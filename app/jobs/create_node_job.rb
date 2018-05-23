require 'htmlentities'
class CreateNodeJob < Struct.new(:lat, :lon, :tags, :user, :client, :source)
  WHEELCHAIR_TAG_KEY = 'wheelchair'.freeze
  WHEELCHAIR_TOILET_TAG_KEY = 'toilets:wheelchair'.freeze

  def self.enqueue(lat, lon, tags, user, source)
    raise 'user not app authorized' unless user.app_authorized? # implies user.access_token.present?

    # Do not enqeue job if not in production or test environment
    return unless Rails.env.production? || Rails.env.test?

    # Remove wheelchair tag if value is "unknown"
    tags.delete(WHEELCHAIR_TAG_KEY) if tags[WHEELCHAIR_TAG_KEY] == 'unknown'
    tags.delete(WHEELCHAIR_TOILET_TAG_KEY) if tags[WHEELCHAIR_TOILET_TAG_KEY] == 'unknown'

    client = Rosemary::OauthClient.new(user.access_token)

    coder = HTMLEntities.new(:expanded)
    tags.each do |k, v|
      tags[k] = coder.encode(v)
    end
    new(lat, lon, tags, user, client, source).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError, 'Client cannot be nil' if client.nil?
    raise ArgumentError, 'User cannot be nil' if user.nil?

    logger.info 'CreateNodeJob -------------------------->'
    logger.info "User: #{user.try(:id)}"

    changeset = api.find_or_create_open_changeset(user.changeset_id, 'Modified via wheelmap.org')
    user.update_attribute(:changeset_id, changeset.id)

    api.create(node, changeset)

    Counter.increment(source)
    user.increment!(:create_counter) if user.terms?
    true
  end

  def node
    @node ||= Rosemary::Node.new(lat: lat, lon: lon, tag: tags)
  end

  def api
    @api ||= Rosemary::Api.new(client)
  end

  def logger
    Delayed::Worker.logger
  end

  def enqueue(job); end

  def before(job); end

  def success(job); end

  def error(_job, e); end

  def after(job); end
end

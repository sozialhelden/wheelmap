source 'http://rubygems.org'

group :default do
  gem 'rails', '3.0.3'
  gem 'mysql2', '~>0.2.7'
  gem 'oauth', :git => 'git://github.com/Bertg/oauth.git'
  gem 'httparty'
  gem 'devise'
  gem 'compass', '0.10.6'
  gem 'redgreengrid'
  gem 'haml', '~>3.0.25'
  gem 'geoip'
  gem 'formtastic', '1.2.4'
  gem 'delayed_job'
  gem 'libxml-ruby', '~> 2.2.1'
  gem 'crewait', :path => "#{File.expand_path(__FILE__)}/../vendor/gems/crewait-0.1.6"
  gem 'hoptoad_notifier', "~> 2.3"
  gem 'whenever', :require => false
  gem "tolk", :git => "git://github.com/ZenCocoon/tolk.git", :branch => "rails3"
  gem "routing-filter"
  gem 'newrelic_rpm', '~>3.0.1'
  gem 'acts_as_api'
  gem 'inherited_resources'
  gem 'has_scope'
#  gem 'mapfish'
  gem 'rake', '0.9.2'
  gem 'yajl-ruby'
  gem 'fastercsv'
  gem 'ruport'
  gem 'memcache-client'
  gem 'jammit'
  gem 'big_sitemap', :git => 'git@github.com:christoph-buente/big_sitemap.git'
  gem 'unicorn'
  gem 'rgeo'
  gem 'spatial_adapter'
  gem 'friendly_id'
end

group :test, :development do
  gem 'rspec-rails', "~>2.1"
end

group :test do
  gem 'fakeweb'
  gem 'webmock'
  gem 'factory_girl_rails'
  gem "capybara"  # on mac, you need sudo port install libffi
  gem 'cucumber'
  gem 'cucumber-rails'
  gem 'rspec'
  gem 'nokogiri'
  gem 'pickle'
  gem 'launchy'
  gem 'database_cleaner'
end

group :deployment do
  gem 'capistrano'
  gem 'capistrano-ext'
end

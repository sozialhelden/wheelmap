ActiveAdmin.register ProvidedPoi do

  menu :label => 'Premiumeintrag', :parent => 'Premium'

  belongs_to :provider, :optional => true
  belongs_to :poi, :optional => true

  index do
   column :id
   column :wheelchair do |p|
     status_tag(p.wheelchair, :class => p.wheelchair)
   end
   column :poi do |p|
     link_to p.poi_id, admin_poi_path(p.poi)
   end
   column :provider
   column :url
   default_actions
  end

  form do |f|
    f.inputs do
      f.input :poi_id
      f.input :provider, as: :select, collection: Provider.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort
      f.input :wheelchair, as: :select, collection: Poi::WHEELCHAIR_STATUS_VALUES.map{|k,v| [t("wheelchairstatus.#{k}"),k]}
      f.input :url
    end
    f.buttons
  end


end
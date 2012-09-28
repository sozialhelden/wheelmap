# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120802105205) do

  create_table "admins", :force => true do |t|
    t.string   "email",                               :default => "", :null => false
    t.string   "encrypted_password",   :limit => 128, :default => "", :null => false
    t.string   "password_salt",                       :default => "", :null => false
    t.string   "reset_password_token"
    t.string   "remember_token"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.integer  "failed_attempts",                     :default => 0
    t.string   "unlock_token"
    t.datetime "locked_at"
  end

  add_index "admins", ["confirmation_token"], :name => "index_admins_on_confirmation_token"
  add_index "admins", ["email"], :name => "index_admins_on_email"
  add_index "admins", ["reset_password_token"], :name => "index_admins_on_reset_password_token"
  add_index "admins", ["unlock_token"], :name => "index_admins_on_unlock_token"

  create_table "alternatives", :force => true do |t|
    t.integer "experiment_id"
    t.string  "content"
    t.string  "lookup",        :limit => 32
    t.integer "weight",                      :default => 1
    t.integer "participants",                :default => 0
    t.integer "conversions",                 :default => 0
  end

  add_index "alternatives", ["experiment_id"], :name => "index_alternatives_on_experiment_id"
  add_index "alternatives", ["lookup"], :name => "index_alternatives_on_lookup"

  create_table "categories", :force => true do |t|
    t.string   "identifier"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "counters", :force => true do |t|
    t.date     "counter_date"
    t.integer  "tag_website",    :default => 0
    t.integer  "tag_iphone",     :default => 0
    t.integer  "tag_android",    :default => 0
    t.integer  "update_website", :default => 0
    t.integer  "update_iphone",  :default => 0
    t.integer  "update_android", :default => 0
    t.integer  "create_website", :default => 0
    t.integer  "create_iphone",  :default => 0
    t.integer  "create_android", :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "delayed_jobs", :force => true do |t|
    t.integer  "priority",         :default => 0
    t.integer  "attempts",         :default => 0
    t.text     "handler"
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "first_started_at"
    t.datetime "last_started_at"
    t.datetime "finished_at"
    t.string   "queue"
  end

  add_index "delayed_jobs", ["priority", "run_at"], :name => "delayed_jobs_priority"

  create_table "experiments", :force => true do |t|
    t.string   "test_name"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "experiments", ["test_name"], :name => "index_experiments_on_test_name"

  create_table "iphone_counters", :force => true do |t|
    t.string   "install_id"
    t.string   "device_version"
    t.string   "app_version"
    t.string   "os_version"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "node_types", :force => true do |t|
    t.integer  "category_id"
    t.string   "identifier"
    t.string   "osm_key"
    t.string   "osm_value"
    t.string   "icon"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "alt_osm_key"
    t.string   "alt_osm_value"
  end

  add_index "node_types", ["id", "category_id"], :name => "index_node_types_on_id_and_category_id"
  add_index "node_types", ["osm_key", "osm_value"], :name => "index_node_types_on_osm_key_and_osm_value"

  create_table "pois", :primary_key => "osm_id", :options=>'ENGINE=MyISAM', :force => true do |t|
    t.integer  "version",                                    :null => false
    t.text     "tags",                                       :null => false
    t.point    "geom",         :limit => nil,                :null => false
    t.integer  "status",       :limit => 3,   :default => 8, :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "node_type_id"
    t.integer  "region_id"
  end

  add_index "pois", ["geom"], :name => "index_pois_on_geom", :spatial => true
  add_index "pois", ["node_type_id", "osm_id"], :name => "index_pois_on_node_type_id_and_osm_id"
  add_index "pois", ["osm_id"], :name => "index_pois_on_osm_id"
  add_index "pois", ["region_id", "status"], :name => "index_pois_on_region_id_and_status"
  add_index "pois", ["region_id"], :name => "index_pois_on_region_id"
  add_index "pois", ["status"], :name => "index_pois_on_status"
  add_index "pois", ["tags"], :name => "fulltext_index_pois_on_tags"

  create_table "provided_pois", :force => true do |t|
    t.integer  "poi_id",      :null => false
    t.integer  "provider_id", :null => false
    t.string   "wheelchair"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "provided_pois", ["provider_id", "poi_id"], :name => "index_provided_pois_on_provider_id_and_poi_id"

  create_table "providers", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "queued_nodes", :options=>'ENGINE=MyISAM', :force => true do |t|
    t.integer  "user_id"
    t.text     "node_attributes"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.point    "geom",            :limit => nil, :null => false
  end

  add_index "queued_nodes", ["geom"], :name => "index_queued_nodes_on_geom", :spatial => true

  create_table "regions", :force => true do |t|
    t.string   "name"
    t.polygon  "grenze",      :limit => nil, :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "parent_id"
    t.integer  "admin_level"
    t.integer  "lft"
    t.integer  "rgt"
    t.integer  "depth"
  end

  create_table "slugs", :force => true do |t|
    t.string   "name"
    t.integer  "sluggable_id"
    t.integer  "sequence",                     :default => 1, :null => false
    t.string   "sluggable_type", :limit => 40
    t.string   "scope"
    t.datetime "created_at"
  end

  add_index "slugs", ["name", "sluggable_type", "sequence", "scope"], :name => "index_slugs_on_n_s_s_and_s"
  add_index "slugs", ["sluggable_id"], :name => "index_slugs_on_sluggable_id"

  create_table "users", :force => true do |t|
    t.string   "oauth_token"
    t.string   "oauth_secret"
    t.string   "email",                               :default => "",    :null => false
    t.string   "encrypted_password",   :limit => 128, :default => "",    :null => false
    t.string   "password_salt",                       :default => "",    :null => false
    t.string   "remember_token"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "changeset_id"
    t.boolean  "wants_newsletter",                    :default => false, :null => false
    t.string   "authentication_token"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.integer  "osm_id"
    t.string   "first_name"
    t.string   "last_name"
  end

  add_index "users", ["authentication_token"], :name => "index_users_on_authentication_token"
  add_index "users", ["email"], :name => "index_users_on_email"
  add_index "users", ["oauth_token"], :name => "index_users_on_oauth_token"
  add_index "users", ["wants_newsletter"], :name => "index_users_on_wants_newsletter"

end

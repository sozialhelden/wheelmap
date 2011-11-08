namespace 'mygengo' do
  desc 'Exports the rails i18n locale files from config/locales into tmp/mygengo as flat json.'
  task :export => [:environment, :clear_tmp_dir] do
    I18n.available_locales.each do |locale|
      sh "#{Rails.root}/bin/locales-flatten.rb #{Rails.root}/config/locales/#{locale}.yml"
      sh "for file in `find #{Rails.root}/config/locales/#{locale} -type f`; do #{Rails.root}/bin/locales-flatten.rb $file; done"
    end
  end

  desc 'Imports yaml files from mygengo into config/locales ready for commiting.'
  task :import => [:environment, :clear_tmp_dir] do
    sh "wget -q -O #{Rails.root}/tmp/mygengo/all.zip http://mygengo.com/string/p/testblubb-1/export/all/2a97f01e4d58cf503a8e99f3b0ad9cd2c8b130085e061321fd5e5e782f658bc6"
    sh "cd #{Rails.root}/tmp/mygengo && unzip all.zip"
    I18n.available_locales.each do |locale|
      sh "for file in `ls #{Rails.root}/tmp/mygengo/#{locale}/*`; do #{Rails.root}/bin/locales-expand.rb $file; done"
    end
  end

  task :clear_tmp_dir do
    sh "rm -rf #{Rails.root}/tmp/mygengo"
    sh "mkdir -p #{Rails.root}/tmp/mygengo"
  end
end

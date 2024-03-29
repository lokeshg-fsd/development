# frozen_string_literal: true

require_relative 'boot'
require 'rails/all'
require 'sprockets/railtie'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
# ENV['RAILS_ADMIN_THEME'] = 'material_theme'

module Code
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1
    config.generators do |g|
      # g.test_framework false
      g.view_specs      false
      g.helper_specs    false
    end
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end

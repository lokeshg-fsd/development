# frozen_string_literal: true

# in lib/rails_admin/unconfirmed.rb

require 'rails_admin/config/actions'
require 'rails_admin/config/actions/base'

module RailsAdminOnlyAdmins
end

module RailsAdmin
  module Config
    module Actions
      class OnlyAdmins < RailsAdmin::Config::Actions::Base
        RailsAdmin::Config::Actions.register(self)
        register_instance_option :controller do
          Proc do
            @objects = Person.only_admins
            render 'index'
          end
        end

        register_instance_option :collection do
          true
        end
      end
    end
  end
end

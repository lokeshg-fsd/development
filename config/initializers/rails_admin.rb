# frozen_string_literal: true

RailsAdmin.config do |config| # rubocop:disable Metrics/BlockLength
  ### Popular gems integration
  config.parent_controller = 'ApplicationController'
  # config.theme = 'material'
  config.included_models = %w[
    Person
    User
    Blood
    Branch
  ]

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  ## == CancanCan ==
  # config.authorize_with :cancancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new do
      except ['Blood']
    end
    export
    bulk_delete do
      except ['Blood']
    end
    show
    edit do
      except ['Blood']
    end
    delete do
      except ['Blood']
    end
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.model 'Person' do
    list do
      items_per_page 200
      scopes [:only_admins, nil]
      field :lastName do
        label 'Last Name'
      end
      field :firstName do
        label 'First Frame'
      end
      field :email do
        label 'Email'
      end
      field :userType do
        label 'Role'
      end
      field :address do
        label 'Address'
      end
      field :status do
        label 'Active'
      end
    end
  end
end

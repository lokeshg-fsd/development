# frozen_string_literal: true

class PagesController < ApplicationController
  # before_action :authenticate_user!
  def index
    @page_title = 'Saver Home'
  end

  def dashboard
    @page_title = 'DashBoard'
  end
end

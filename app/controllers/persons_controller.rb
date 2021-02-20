class PersonsController < ApplicationController
  def index
    person = Person.order('id ASC')
    render json: { data: person }, status: :ok
  end
end

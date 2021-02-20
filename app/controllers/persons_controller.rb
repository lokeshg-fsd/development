class PersonsController < ApplicationController
  def index
    person = Person.order('lastName DESC')
    render json: { status: 'SUCCESS', message: 'Loaded', data: person }, status: :ok
  end
end

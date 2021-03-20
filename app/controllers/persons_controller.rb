class PersonsController < ApplicationController
  def index
    person = []
    (Integer(params[:start])..Integer(params[:end])).each do |index|
      value = Person.find(index)
      person << value
    end

    render json: { data: person }, status: :ok
  end
end

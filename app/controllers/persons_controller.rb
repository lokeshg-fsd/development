# frozen_string_literal: true

class PersonsController < ApplicationController
  def delete
    persons = Person.where('email = ?', params[:email])
    persons.each { |p| p.destroy }
    if persons.empty?
      render json: { mesage: 'No Record Found' }
    elsif render json: { message: 'Deleted Successfully' }
    end
  end

  def index
    permitted = params.key?(:start) || params.key?(:end)
    start = Integer(params[:start] || Person.first.id)
    end_index = Integer(params[:end] || Person.last.id)
    if permitted
      person = []
      (Integer(start)...Integer(end_index)).each do |index|
        value = Person.find(index)
        person << value
      end
      render json: { data: person }, status: :ok
    elsif render json: { data: Person.all }
    end
  end

  def by_status
    persons = Person.where('status = ?', Integer(params[:as] || 1))
    render json: { data: persons }
  end

  def grouped
    render json: { data: Person.group(:status) }
  end

  def create
    created = Person.where('email = ?', params[:email])
    para = ActionController::Parameters.new({
                                              person: params
                                            })
    permision = para.require(:person).permit(:email)
    # byebug
    if permision.permitted? && created.empty? && !permision.empty?
      person = Person.create({
                               lastName: params[:lastName],
                               firstName: params[:firstName],
                               status: params[:status] || 0,
                               address: params[:address] || 'None',
                               userType: params[:userType] || 'user',
                               email: params[:email]
                             })
      render json: { data: person, response: 'SuccsessFully Created User' }

    elsif !permision.permitted? || permision.empty?
      render json: { error: 'Permision Denied Due To Invalid Params', permision: permision }
    elsif !created.empty?
      render json: { error: 'Already Existing User', existingRecord: created }
    end
  end

  def update
    person = Person.find_by(email: params[:email])
    if params.key?(:email) && person
      person.lastName = params[:lastName] || person.lastName
      person.firstName = params[:firstName] || person.firstName
      person.status = params[:status] || person.status
      person.address = params[:address] || person.address
      person.userType = params[:userType] || person.userType
      person.save
      render json: { message: 'Updated SuccessFully', data: person }
    elsif render json: { message: 'Record Not Found or Invalid Email', para: params, data: person }
    end
  end
end

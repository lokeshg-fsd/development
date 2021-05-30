# frozen_string_literal: true

class PersonsController < ApplicationController
  def delete
    persons = Person.where(email: params[:email]).destroy_all
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
    else
      data = Person.includes(:blood, :branch).all.map do |p|
        { person: p, blood: p.blood, branch: p.branch }
      end
      render json: { data: data, email: current_user.email }
    end
  end

  def by_status
    persons = Person.includes(:blood).where(status: Integer(params[:as] || 1))
    maped_data = persons.map do |p|
      {
        firstName: p.firstName,
        lastName: p.lastName,
        fullName: p.firstName + ' ' + p.lastName,
        userType: p.userType,
        email: p.email,
        blood: p.blood&.group,
        bloodValue: p.blood&.value,
        address: p.address,
      }
    end
    render json: { data: maped_data }
  end

  def grouped
    render json: { data: Person.group(:status) }
  end

  def create
    created = Person.where(email: params[:person][:email])
    permision = params.require(:person).permit(:email, :lastName, :firstName, :address,
                                               :blood_id, :branch_id, :status, :userType)

    if created.empty? && permision.permitted?
      person = Person.create(permision)
      render json: { data: person, status: 'SuccsessFully Created User' }
    elsif !permision.permitted? || permision.empty?
      render json: { error: 'Permision Denied Due To Invalid Params', permision: permision }
    elsif !created.empty?
      render json: { error: 'Already Existing User', existingRecord: created }
    end
  end

  def update
    person = Person.find_by(email: params[:user][:email])
    user = params[:user]
    if user.key?(:email) && person
      person.lastName = user[:lastName] || person.lastName
      person.firstName = user[:firstName] || person.firstName
      person.status = user[:status] || person.status
      person.address = user[:address] || person.address
      person.userType = user[:userType] || person.userType
      person.save
      render json: { message: 'Updated SuccessFully', data: person }
    elsif render json: {
      message: 'Record Not Found or Invalid Email',
      para: params,
      data: person,
    }
    end
  end
end

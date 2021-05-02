# frozen_string_literal: true

class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :lastName
      t.string :firstName
      t.numeric :status
      t.string :userType
      t.string :email
      t.text :address

      t.timestamps
    end
  end
end

# frozen_string_literal: true

class CreateBranch < ActiveRecord::Migration[6.1]
  def change
    create_table :branches do |t|
      t.string :name, null: false
      t.string :email, unique: true, null: false
      t.text :address
      t.integer :phone
      t.string :password, null: false
      t.string :dealer
      t.text :description

      t.timestamps
    end
  end
end

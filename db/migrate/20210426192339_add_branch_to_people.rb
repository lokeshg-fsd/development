# frozen_string_literal: true

class AddBranchToPeople < ActiveRecord::Migration[6.1]
  def change
    add_reference :people, :branches, index: true, null: false
    rename_column :people, :branches_id, :branch_id
  end
end

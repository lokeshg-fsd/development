class RenameColumnBloodsIdToBloodId < ActiveRecord::Migration[6.1]
  def change
    rename_column :people, :bloods_id, :blood_id
  end
end

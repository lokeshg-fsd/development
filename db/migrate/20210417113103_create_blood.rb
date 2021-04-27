class CreateBlood < ActiveRecord::Migration[6.1]
  def change
    create_table :bloods do |t|
      t.string :group, null: false
      t.integer :value
      t.string :description

      t.timestamps
    end
  end
end

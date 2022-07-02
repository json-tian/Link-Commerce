class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.string :image
      t.float :price
      t.integer :quantity
      t.integer :sold
      t.belongs_to :shop
      t.timestamps
    end
  end
end

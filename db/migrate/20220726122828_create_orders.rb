class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :email
      t.string :shippingAddress
      t.string :productTitle
      t.string :status
      t.float :price
      t.integer :quantity
      t.belongs_to :shop
      t.timestamps
    end
  end
end

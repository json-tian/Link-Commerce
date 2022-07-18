class CreateShops < ActiveRecord::Migration[7.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :description
      t.string :background
      t.string :subpage
      t.string :email
      t.timestamps
    end
  end
end

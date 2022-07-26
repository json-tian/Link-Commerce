class Shop < ApplicationRecord
  validates :subpage, presence: true

  has_many :products
  has_many :orders
end

class Shop < ApplicationRecord
  validates :subpage, presence: true

  has_many :products
end

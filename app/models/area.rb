class Area < ActiveRecord::Base
  belongs_to :catalog
  has_many :items
end
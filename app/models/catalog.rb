class Catalog < ActiveRecord::Base
  has_many :areas
  default_scope { order(created_at: :desc) }
end
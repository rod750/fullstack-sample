require "csv"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

catalog_csv = File.read(Rails.root.join("lib", "catalogs", "services.csv"))

csv = CSV.parse(catalog_csv, headers: true, encoding: "UTF-8")

Catalog.transaction do
  csv.each do |row|
    catalog = Catalog.find_or_create_by name: row.field("catalog")
    area = catalog.areas.find_or_create_by name: row.field("area")
    area.items.find_or_create_by name: row.field("item")
  end
end
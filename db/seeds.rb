# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


shop1 = Shop.create(name: "Jason's Shop", description: "Cheap n good stuff", background: "255,200,200", subdomain:"hexabox")

shop1.products << Product.create(title: "3D printer", description: "brrrrr", image: "", price: "325.44", quantity: 4, sold: 1)
shop1.products << Product.create(title: "Cool Pad", description: "fun to use", image: "", price: "34.33", quantity: 44, sold: 0)

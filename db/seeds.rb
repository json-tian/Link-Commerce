# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


shop1 = Shop.create(name: "Jason's Shop", description: "Cheap n good stuff", background: "255,50,20", subpage:"hexabox")
shop1.products << Product.create(title: "3D printer", description: "brrrrr", image: "", price: "325.44", quantity: 4, sold: 1)
shop1.products << Product.create(title: "Cool Pad", description: "fun to use", image: "", price: "34.33", quantity: 44, sold: 0)

shop2 = Shop.create(name: "Hexabox.shop", description: "3d printer hobby store", background: "45,20,2", subpage:"jason")
shop2.products << Product.create(title: "PLA Filament", description: "good basic filament", image: "", price: "35.44", quantity: 0, sold: 0)

shop3 = Shop.create(name: "Darryl's Shop", description: "Shop Darryl is using for testing.", background: "200,100,10", subpage:"darryl")
shop3.products << Product.create(title: "Cash Mug", description: "Mug with a picture of Darryl holding cash.", image: "", price: "19.81", quantity: 30, sold: 0)
shop3.products << Product.create(title: "Controller Crewneck", description: "Crewneck sweater with a picture of Darryl holding a controller.", image: "", price: "48.88", quantity: 25, sold: 5)
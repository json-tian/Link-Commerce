# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


shop1 = Shop.create(name: "Jason's Shop", email: "tanjazz7@gmail.com", description: "Cheap n good stuff", background: "255,50,20", subpage:"hexabox")
shop1.products << Product.create(title: "3D printer", description: "brrrrr", image: "", price: "325.44", quantity: 4, sold: 1)
shop1.products << Product.create(title: "Cool Pad", description: "fun to use", image: "", price: "34.33", quantity: 44, sold: 0)
shop1.orders << Order.create(email: "consumer@test.com", shippingAddress: "123 Sesame Street", price: "34.33", quantity: 1, productTitle: "Cool Pad", status: "pending")
shop1.orders << Order.create(email: "consumer@test.com", shippingAddress: "12 Sesame Street", price: "34.33", quantity: 2, productTitle: "Cool Pad", status: "open")
shop1.orders << Order.create(email: "consumer@test.com", shippingAddress: "23 Sesame Street", price: "34.33", quantity: 3, productTitle: "Cool Pad", status: "shipped")
shop1.orders << Order.create(email: "consumer@test.com", shippingAddress: "13 Sesame Street", price: "34.33", quantity: 4, productTitle: "Cool Pad", status: "done")

shop2 = Shop.create(name: "Hexabox.shop", email: "augwangzongda@gmail.com", description: "3d printer hobby store", background: "45,20,2", subpage:"jason")
shop2.products << Product.create(title: "PLA Filament", description: "good basic filament", image: "", price: "35.44", quantity: 0, sold: 0)
shop2.orders << Order.create(email: "consumer@test.com", shippingAddress: "123 Street", price: "34.3", quantity: 1, productTitle: "PLA Filament", status: "pending")
shop2.orders << Order.create(email: "consumer@test.com", shippingAddress: "12 Sesame Street", price: "34.33", quantity: 2, productTitle: "PLA Filament", status: "open")
shop2.orders << Order.create(email: "consumer@test.com", shippingAddress: "12 Street", price: "4.33", quantity: 3, productTitle: "PLA Filament", status: "shipped")
shop2.orders << Order.create(email: "consumer@test.com", shippingAddress: "123 Sesame", price: "34.3", quantity: 4, productTitle: "PLA Filament", status: "done")

shop3 = Shop.create(name: "Darryl's Shop", email: "darrylylhuang@gmail.com", description: "Shop Darryl is using for testing.", background: "200,100,10", subpage:"darryl")
shop3.products << Product.create(title: "Cash Mug", description: "Mug with a picture of Darryl holding cash.", image: "", price: "19.81", quantity: 30, sold: 0)
shop3.products << Product.create(title: "Controller Crewneck", description: "Crewneck sweater with a picture of Darryl holding a controller.", image: "", price: "48.88", quantity: 25, sold: 5)
shop3.orders << Order.create(email: "consumer@test.com", shippingAddress: "123 Street", price: "34.3", quantity: 1, productTitle: "Cash Mug", status: "pending")
shop3.orders << Order.create(email: "consumer@test.com", shippingAddress: "12 Sesame Street", price: "34.33", quantity: 2, productTitle: "Cash Mug", status: "open")
shop3.orders << Order.create(email: "consumer@test.com", shippingAddress: "12 Street", price: "4.33", quantity: 3, productTitle: "Cash Mug", status: "shipped")
shop3.orders << Order.create(email: "consumer@test.com", shippingAddress: "123 Sesame", price: "34.3", quantity: 4, productTitle: "Cash Mug", status: "done")

100.times do
  Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
  )
end

puts "100 Products Seeded"
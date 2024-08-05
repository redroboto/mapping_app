# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'csv'

file_path = Rails.root.join('db', 'pogo_data8.csv')
CSV.foreach(file_path, headers: true) do |row|
  name = row['name']
  longitude = row['longitude'].to_f
  latitude = row['latitude'].to_f
  address = row['address']
  is_2017 = row['is_2017']
  is_2018 = row['is_2018']
  is_2019 = row['is_2019']
  is_2020 = row['is_2020']
  is_2021 = row['is_2021']
  is_2022 = row['is_2022']
  is_2023 = row['is_2023']
  is_2024 = row['is_2024']

  Location.create!(
    name: name,
    longitude: longitude,
    latitude: latitude,
    address: address,
    is_2017: is_2017,
    is_2018: is_2018,
    is_2019: is_2019,
    is_2020: is_2020,
    is_2021: is_2021,
    is_2022: is_2022,
    is_2023: is_2023,
    is_2024: is_2024
  ) 
  
end

p "Seeding Complete."
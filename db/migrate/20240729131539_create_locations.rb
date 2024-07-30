class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :longitude
      t.float :latitude
      t.string :address
      t.boolean :is_2017
      t.boolean :is_2018
      t.boolean :is_2019
      t.boolean :is_2020
      t.boolean :is_2021
      t.boolean :is_2022
      t.boolean :is_2023
      t.boolean :is_2024

      t.timestamps
    end
  end
end

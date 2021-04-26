Person.delete_all

10.times do
  Person.create({
                  lastName: Faker::Name.last_name,
                  firstName: Faker::Name.first_name,
                  status: Faker::Boolean.boolean,
                  address: Faker::Address.full_address,
                  userType: Faker::Name.name,
                  email: Faker::Name.name,
                  blood_id: Random.rand(1...9)
                })
end

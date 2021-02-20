10.times do
  Person.create({
                  lastName: Faker::Name.last_name,
                  firstName: Faker::Name.first_name,
                  status: Faker::Boolean.boolean,
                  address: Faker::Address.full_address,
                  userType: Faker::Name.name,
                  email: Faker::Name.name
                })
end

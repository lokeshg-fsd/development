# Person.delete_all

1000.times do |i|
  Person.create!({
                  lastName: Faker::Name.last_name,
                  firstName: Faker::Name.first_name ,
                  status: Faker::Boolean.boolean,
                  address: Faker::Address.full_address,
                  userType: Faker::Job.position,
                  email: Faker::Internet.email,
                  blood_id: Random.rand(1...9),
                  branch_id: Random.rand(3...4)
                })
end

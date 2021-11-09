# Person.delete_all

# blood_ids = Blood.all.map(&.id)
# branch_ids = Branch.all.map(&.id)

# unless next if branch_ids.any? && blood_ids.any?

# 1000.times do |i|
#   Person.create!({
#                   lastName: Faker::Name.last_name,
#                   firstName: Faker::Name.first_name ,
#                   status: Faker::Boolean.boolean,
#                   address: Faker::Address.full_address,
#                   userType: Faker::Job.position,
#                   email: Faker::Internet.email,
#                   blood_id: blood_ids[rand(blood_ids.size)],
#                   branch_id: branch_ids[rand(branch_ids.size)]
#                 })
# end

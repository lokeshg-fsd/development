class InsertDetailsIntoBlood < ActiveRecord::Migration[6.1]
  BLOOD_GROUPS = [{
    group: 'A+',
    value: 10,
    description: 'A+ Blood Group'
  }, {
    group: 'A-',
    value: 20,
    description: 'A- Blood Group'
  }, {
    group: 'B+',
    value: 30,
    description: 'B+ Blood Group'
  }, {
    group: 'B-',
    value: 40,
    description: 'b- Blood Group'
  }, {
    group: 'AB+',
    value: 50,
    description: 'AV+ Blood Group'
  }, {
    group: 'AB-',
    value: 60,
    description: 'AB- Blood Group'
  }, {
    group: 'O+',
    value: 70,
    description: 'O+ Blood Group'
  }, {
    group: 'O-',
    value: 80,
    description: 'O- Blood Group'
  }, {
    group: 'Other',
    value: 90,
    description: 'Not Listed Blood Group'
  }].freeze

  def up
    if Blood.all.empty?
      BLOOD_GROUPS.map do |item|
        Blood.create(item)
      end
    end
  end

  def down
    Blood.destroy_all
  end
end

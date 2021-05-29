# frozen_string_literal: true

class InsertDetailsIntoBlood < ActiveRecord::Migration[6.1]
  BLOOD_GROUPS = []

  BLOOD_GROUPS.push({ group: 'A+', value: 10, description: 'A+ Blood Group' })
  BLOOD_GROUPS.push({ group: 'A-', value: 20, description: 'A- Blood Group' })
  BLOOD_GROUPS.push({ group: 'B+', value: 30, description: 'B+ Blood Group' })
  BLOOD_GROUPS.push({ group: 'B-', value: 40, description: 'b- Blood Group' })
  BLOOD_GROUPS.push({ group: 'AB+', value: 50, description: 'AV+ Blood Group' })
  BLOOD_GROUPS.push({ group: 'O+', value: 70, description: 'O+ Blood Group' })
  BLOOD_GROUPS.push({ group: 'O-', value: 80, description: 'O- Blood Group' })
  BLOOD_GROUPS.push({ group: 'Other', value: 90, description: 'Not Listed Blood Group' })

  BLOOD_GROUPS.freeze

  def up
    return unless Blood.all.empty?

    BLOOD_GROUPS.map do |item|
      Blood.create(item)
    end
  end

  def down
    Blood.destroy_all
  end
end

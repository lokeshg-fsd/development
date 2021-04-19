# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_19_140431) do

  create_table "bloods", charset: "utf8mb4", force: :cascade do |t|
    t.string "group", null: false
    t.integer 'value'
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "branches", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.text "address"
    t.integer "phone"
    t.string "password", null: false
    t.string "dealer"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_branches_on_email", unique: true
  end

  create_table "people", charset: "utf8mb4", force: :cascade do |t|
    t.string "lastName"
    t.string "firstName"
    t.decimal "status", precision: 10
    t.string "userType"
    t.string "email"
    t.text "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "bloods_id", default: 1, null: false
    t.index ["bloods_id"], name: "index_people_on_bloods_id"
  end

end

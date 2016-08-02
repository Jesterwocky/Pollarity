# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160802183156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "options", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.string   "option",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "options", ["question_id"], name: "index_options_on_question_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.integer  "survey_id",  null: false
    t.string   "question",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "questions", ["survey_id"], name: "index_questions_on_survey_id", using: :btree

  create_table "responses", force: :cascade do |t|
    t.integer  "selected_option_id", null: false
    t.integer  "responder_id",       null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "responses", ["responder_id"], name: "index_responses_on_responder_id", using: :btree
  add_index "responses", ["selected_option_id"], name: "index_responses_on_selected_option_id", using: :btree

  create_table "surveys", force: :cascade do |t|
    t.integer  "author_id",    null: false
    t.string   "survey_title", null: false
    t.string   "response_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "surveys", ["author_id"], name: "index_surveys_on_author_id", using: :btree
  add_index "surveys", ["response_url"], name: "index_surveys_on_response_url", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end

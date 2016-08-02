class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.integer :author_id, null: false
      t.string :survey_title, null: false
      t.string :response_url

      t.timestamps null: false
    end

    add_index :surveys, :author_id
    add_index :surveys, :response_url
  end
end

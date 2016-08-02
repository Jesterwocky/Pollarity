class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :selected_option_id, null: false
      t.integer :responder_id, null: false

      t.timestamps null: false
    end

    add_index :responses, :selected_option_id
    add_index :responses, :responder_id
  end
end

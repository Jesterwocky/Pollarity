class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.integer :question_id, null: false
      t.string :option, null: false

      t.timestamps null: false
    end

    add_index :options, :question_id
  end
end

class AddAnonBooleanToUsers < ActiveRecord::Migration
  def change
    add_column :users, :anon, :boolean, default: false
  end
end

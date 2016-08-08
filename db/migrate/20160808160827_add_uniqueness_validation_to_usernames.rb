class AddUniquenessValidationToUsernames < ActiveRecord::Migration
  def change
    remove_index :users, :username
    add_index :users, :username, unique: true
  end
end

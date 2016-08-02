class RemoveStringColumn < ActiveRecord::Migration
  def change
    remove_column :surveys, :string
  end
end

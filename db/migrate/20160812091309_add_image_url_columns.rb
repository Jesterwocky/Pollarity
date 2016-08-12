class AddImageUrlColumns < ActiveRecord::Migration
  def change
    add_column :options, :image_url, :string
    add_column :options, :thumbnail_url, :string
  end
end

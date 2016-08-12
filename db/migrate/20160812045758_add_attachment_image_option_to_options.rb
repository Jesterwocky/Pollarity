class AddAttachmentImageOptionToOptions < ActiveRecord::Migration
  def self.up
    change_table :options do |t|
      t.attachment :image_option
    end
  end

  def self.down
    remove_attachment :options, :image_option
  end
end

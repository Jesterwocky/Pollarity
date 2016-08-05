class Survey < ActiveRecord::Base
  belongs_to :author,
    class_name: :user,
    foreign_key: :author_id

  has_many :questions,
    dependent: :destroy

  has_many :responses,
    through: :questions

  has_many :responders,
    through: :questions

  accepts_nested_attributes_for :questions

end

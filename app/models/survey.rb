class Survey < ActiveRecord::Base
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    inverse_of: :surveys

  has_many :questions,
    dependent: :destroy

  has_many :options,
    through: :questions

  has_many :responses,
    through: :questions

  has_many :responders,
    through: :questions

  accepts_nested_attributes_for :questions

end

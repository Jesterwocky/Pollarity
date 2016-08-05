class Survey < ActiveRecord::Base

  belongs_to :author,
    class_name: :user,
    foreign_key: :author_id,

  has_many :questions,
    inverse_of: :surveys,
    dependent: :destroy
  accepts_nested_attributes_for :questions
end

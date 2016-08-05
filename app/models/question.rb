class Question < ActiveRecord::Base
  belongs_to :survey

  has_many :options

  has_many :responses, through: :options

  accepts_nested_attributes_for :options
end

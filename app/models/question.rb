class Question < ActiveRecord::Base
  belongs_to :survey

  has_many :options
  accepts_nested_attributes_for :options

  has_many :responses, through: options
end

class Option < ActiveRecord::Base
  belongs_to :question

  has_one :survey,
    through: :question

  has_and_belongs_to_many :responses
end

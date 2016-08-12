class Question < ActiveRecord::Base
  validates :survey_id, :question, :options_attributes, presence: true

  belongs_to :survey

  has_many :options,
    dependent: :destroy

  has_many :responses,
    through: :options,
    source: :votes

  accepts_nested_attributes_for :options
end

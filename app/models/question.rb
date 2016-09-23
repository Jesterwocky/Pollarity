class Question < ActiveRecord::Base
  validates :question, :options, presence: true

  belongs_to :survey

  has_many :options,
    dependent: :destroy

  has_many :responses,
    through: :options,
    source: :votes

  accepts_nested_attributes_for :options, allow_destroy: true
end

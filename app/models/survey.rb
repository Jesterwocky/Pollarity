class Survey < ActiveRecord::Base
  after_create :create_url

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

  accepts_nested_attributes_for :questions

  def create_url
    self.response_url = "surveys/#{self.id}"
    self.save
  end
end

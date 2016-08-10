class Survey < ActiveRecord::Base
  after_create :create_url

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    inverse_of: :surveys

  has_many :questions,
    dependent: :destroy

  accepts_nested_attributes_for :questions

  has_many :options,
    through: :questions

  has_many :responses,
    through: :options,
    source: :votes

  has_many :responders,
    through: :options,
    source: :voters


  def create_url
    self.response_url = "surveys/#{self.id}"
    self.save
  end
end

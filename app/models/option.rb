class Option < ActiveRecord::Base
  # validates :question_id, presence: true
  validates :option, presence: true, unless: :image_url?

  belongs_to :question

  has_one :survey,
    through: :question

  has_many :votes,
    class_name: :Response,
    foreign_key: :selected_option_id,
    dependent: :destroy

  has_many :voters,
    through: :votes,
    source: :responder

  # has_attached_file :image_option, style: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :image_option, content_type: /\Aimage\/.*\Z/
  #
  # validates_attachment :image_option,
  #   content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] },
  #   size: { in: 0..10.kilobytes }
end

class Option < ActiveRecord::Base
  belongs_to :question

  has_one :survey,
    through: :question

  has_many :votes,
    class_name: :Response,
    foreign_key: :selected_option_id

  has_many :voters,
    through: :votes,
    source: :responder

end

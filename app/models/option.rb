class Option < ActiveRecord::Base
  belongs_to :question

  has_one :survey,
    through: :question


  # WORKS!
  has_many :votes,
    class_name: :Response,
    foreign_key: :selected_option_id

  has_and_belongs_to_many :voters,
    class_name: :User,
    join_table: :responses

  # has_many :votes,
  #   class_name: :Response,
  #   foreign_key: :response_id
  #
  # has_many :voters,
  #   through: :votes,
  #   source: :responder

end

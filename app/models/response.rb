class Response < ActiveRecord::Base
  belongs_to :option,
    inverse_of: :votes

  belongs_to :responder,
    class_name: :User,
    foreign_key: :responder_id

  has_one :question,
    through: :option

  has_one :survey,
    through: :question

end

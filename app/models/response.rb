class Response < ActiveRecord::Base
  belongs_to :option,
    class_name: :Option,
    foreign_key: :selected_option_id,
    inverse_of: :votes

  has_one :question,
    through: :option

  belongs_to :responder,
    class_name: :User,
    foreign_key: :responder_id,
    inverse_of: :votes

  has_one :survey,
    through: :question,
    source: :survey

end

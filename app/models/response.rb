class Response < ActiveRecord::Base
  belongs_to :option

  belongs_to :responder,
    class_name :user,
    foreign_key :responder_id
end

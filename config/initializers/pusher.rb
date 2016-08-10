# config/initializers/pusher.rb
require 'pusher'

Pusher.app_id = '233630'
Pusher.key = '98aa24bcedf9f814bbe7'
Pusher.secret = 'b7daca67824c71902a1c'
Pusher.logger = Rails.logger
Pusher.encrypted = true

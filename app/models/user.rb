class User < ActiveRecord::Base
  validates :username, uniqueness: true
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :surveys,
    class_name: :Survey,
    foreign_key: :author_id,
    inverse_of: :author

  has_many :votes,
    class_name: :Response,
    foreign_key: :responder_id

  has_many :selected_options,
    through: :votes,
    source: :option

  has_many :replied_to_surveys,
    through: :selected_options,
    source: :survey

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!

    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end

class User < ApplicationRecord
  has_secure_password

  has_many :apps, dependent: :destroy
  has_many :feedbacks, dependent: :destroy

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  validates :name, presence: true
end

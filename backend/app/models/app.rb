class App < ApplicationRecord
  belongs_to :user
  has_many :app_versions, dependent: :destroy

  validates :name, presence: true
  validates :description, presence: true
end

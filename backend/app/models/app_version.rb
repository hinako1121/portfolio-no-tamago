class AppVersion < ApplicationRecord
  belongs_to :app

  validates :version, presence: true
  validates :description, presence: true
end

class Project < ApplicationRecord
  belongs_to :user
  has_many :canvases
  mount_uploader :image, ImageUploader
  validates :name, uniqueness: true
end

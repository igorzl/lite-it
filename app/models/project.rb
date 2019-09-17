class Project < ApplicationRecord
  belongs_to :user
  has_many :canvas
  mount_uploader :image, ImageUploader
end

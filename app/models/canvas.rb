class Canvas < ApplicationRecord
  belongs_to :project
  mount_uploader :photo, PhotoUploader
  # validates :name, uniqueness: { scope: :project_id,
  #   message: "should be unique for the given project" }
end

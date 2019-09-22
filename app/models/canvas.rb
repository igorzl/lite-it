class Canvas < ApplicationRecord
  belongs_to :project
  mount_uploader :photo, PhotoUploader
  mount_uploader :canvas_svg, CanvasUploader
  # validates :name, uniqueness: { scope: :project_id,
  #   message: "should be unique for the given project" }
end

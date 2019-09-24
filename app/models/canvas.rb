class Canvas < ApplicationRecord
  belongs_to :project
  mount_uploader :photo, PhotoUploader
  validates :name, uniqueness: { scope: :project_id,
    message: "should be unique for the given project" }

    before_validation :set_default_name

private
    def set_default_name
      if name.nil?
        self.name = Project.find(project_id).name + "_" + self.id.to_s
      end
    end
end

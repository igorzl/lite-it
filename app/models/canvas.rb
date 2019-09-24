class Canvas < ApplicationRecord
  belongs_to :project
  mount_uploader :photo, PhotoUploader
  before_validation :set_default_name
  validates :name, uniqueness: { scope: :project_id,
    message: "should be unique for the given project" }


private
    def set_default_name
      if name.nil?
        time = Time.now.strftime '%Y-%m-%d%H:%M:%S'
        self.name = Project.find(project_id).name + "_" + time.to_s
      end
    end
end

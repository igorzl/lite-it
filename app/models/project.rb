class Project < ApplicationRecord
  belongs_to :user
  has_many :canvases, dependent: :delete_all
  mount_uploader :image, ImageUploader
  validates :name, uniqueness: { scope: :user_id,
    message: "should be unique for the given user" }
  validates :date, format: { with: /(|(0[1-9])|(1[0-2]))((0[1-9])|(1\d)|(2\d)|(3[0-1]))((\d{2}))/,
    message: "only format 'mmddYY' allowed" }, length: { maximum: 6 }
end

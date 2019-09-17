class ChangePhotoToImageForProjects < ActiveRecord::Migration[5.2]
  def change
    rename_column :projects, :photo, :image
  end
end

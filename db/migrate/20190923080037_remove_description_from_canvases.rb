class RemoveDescriptionFromCanvases < ActiveRecord::Migration[5.2]
  def change
    remove_column :canvases, :description
  end
end

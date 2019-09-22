class AddNotesToCanvases < ActiveRecord::Migration[5.2]
  def change
    add_column :canvases, :notes, :text
  end
end

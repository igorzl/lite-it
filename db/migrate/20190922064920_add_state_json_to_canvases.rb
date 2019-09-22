class AddStateJsonToCanvases < ActiveRecord::Migration[5.2]
  def change
    add_column :canvases, :state_json, :string
  end
end

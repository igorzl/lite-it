class AddCanvasSvgToCanvases < ActiveRecord::Migration[5.2]
  def change
    add_column :canvases, :canvas_svg, :string
  end
end

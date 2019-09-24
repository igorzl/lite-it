class AddDateToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :date, :string
  end
end

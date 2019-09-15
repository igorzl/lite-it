class CreateCanvas < ActiveRecord::Migration[5.2]
  def change
    create_table :canvas do |t|
      t.string :name
      t.string :tools_json
      t.string :description
      t.string :photo
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end

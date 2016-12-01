class CreatePhrases < ActiveRecord::Migration
  def self.up
    create_table :phrases do |t|
      t.string :body, null: false
      t.timestamps null: false
    end
    add_index :phrases, :body
  end

  def self.down
    drop_table :phrases
  end
end

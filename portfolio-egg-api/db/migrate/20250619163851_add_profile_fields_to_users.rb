class AddProfileFieldsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :username, :string
    add_column :users, :profile_image, :string
    add_column :users, :bio, :text
    add_column :users, :github_url, :string
    add_column :users, :twitter_url, :string
    add_column :users, :provider, :string
    add_column :users, :uid, :string
  end
end

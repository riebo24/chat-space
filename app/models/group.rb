class Group < ApplicationRecord
  has_many :chats
  has_many :group_users
  has_many :users, through: :group_users
  validates :group_name, presence: true, uniqueness: true
  
  def show_last_chat
    if (last_chat = chats.last).present?
      last_chat.text? ? last_chat.text : "画像が投稿されています"
    else
      "まだメッセージはありません"
    end
  end
end

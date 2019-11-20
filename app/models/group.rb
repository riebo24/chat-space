class Group < ApplicationRecord
#   has_many chats
  has_many groups_users
  has_many users throuth groups_users
  validates :name, presence: true, uniqueness: true
end

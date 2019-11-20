class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # has_many chats
  has_many groups_users
  has_many group throuth groups_users
  validates :name, presence: true, unipueness: true
end

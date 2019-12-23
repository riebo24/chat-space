json.array! @chats do |chat|
  # binding.pry
  json.text chat.text
  json.image chat.image
  json.created_at chat.created_at.strftime("%Y/%m/%d %H:%M")
  json.name chat.user.name
  json.id chat.id


end
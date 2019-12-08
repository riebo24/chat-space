FactoryBot.define do

  factory :chat do
    text                  {Faker::Lorem.sentence}
    image                 {File.open("#{Rails.root}/public/images/test.png")}
    user
    group
  end
  
end





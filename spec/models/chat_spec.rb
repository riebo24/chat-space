require "rails_helper"

describe Chat, type: :model do
  describe '#create' do
    context 'can save' do
      it "is valid with text" do
      expect(build(:chat, image: nil)).to be_valid
      end

      it "is valid with image" do
        expect(build(:chat, text: nil)).to be_valid
      end

      it "is valid with both of text and image" do
        expect(build(:chat)).to be_valid
      end
    end

    context 'cannot save' do
      it "is invalid without both of text and image" do
        chat = build(:chat, text: nil, image: nil)
        chat.valid?
        expect(chat.errors[:text]).to include("を入力してください")
      end

      it "is invalid without group_id" do
        chat = build(:chat, group_id: nil)
        chat.valid?        
        expect(chat.errors[:group]).to include("を入力してください")
      end

      it "is invalid without user_id" do
        chat = build(:chat, user_id: nil)
        chat.valid?
        expect(chat.errors[:user]).to include("を入力してください")
      end         
    end
  end
end
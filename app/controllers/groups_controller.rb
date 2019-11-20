class GroupsController < ApplicationController
   def new
   end

   def create
    Group.create(id: params[:id],group_name: params[group_name])
    redirect_to controller: :chats, action: :index       
   end

   def edit       
   end

   def updat
    Group.update(id: params[:id],group_name: params[group_name])
    redirect_to controller: :chats, action: :index        
   end

end

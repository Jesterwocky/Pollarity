class Api::UsersController < ApplicationController
  def new
    @user = user.new
  end

  def create
    @user = user.new(user_params)

    if @user.save
      log_in(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end

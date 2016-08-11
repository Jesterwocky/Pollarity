class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    debugger

    if @user.save
      log_in(@user)
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.permit(:username, :password, :anon)
  end

end

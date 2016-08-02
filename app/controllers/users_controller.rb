class UsersController < ApplicationController
  def new
    @user = user.new
  end

  def create
    @user = user.new(user_params)

    if @user.save
      render json: @user
    else

    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end

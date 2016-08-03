class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render json: @user
    else
      render json: ["Signup failed"], status: 401
    end
  end

  def destroy
    if @current_user
      log_out
      render json: {}
    else
      render ["Logout Error"], status: 404
    end
  end
end

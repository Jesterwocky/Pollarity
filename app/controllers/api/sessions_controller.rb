class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      log_in(@user)
    else
      render json: ["Signup failed"], status: 401
    end
  end

  def destroy
    log_out
  end
end

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
    render json: user
  end

  def log_out
    if current_user
      @current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render ["Logout Error"], status: 404
    end

  end

  def logged_in?
    !!current_user
  end

end

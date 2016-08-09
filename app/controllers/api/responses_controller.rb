class Api::ResponsesController < ApplicationController

  def index
    if params[:survey_id]
      @responses = Survey.find(params[:survey_id].to_i).responses
      render json: @responses
    elsif params[:user_id]
      @responses = User.find(params[:user_id].to_i).votes
      render json: @responses.to_json(include: :survey)
    else
      # Shouldn't need this; route doesn't exist
      Survey.all
    end

  end

  def create
    @response = Response.new(response_params)

    if @response.save
      render json: @response
    else
      render json: @responses.errors.full_messages, status: 401
    end
  end

  def destroy
    @response = Response.find(params[:id])

    if @response.delete
      render json: {}
    else
      render json: @response.errors.full_messages, status: 401
    end
  end

  def update
    @response = Response.find(params(:id))

    if @response.update(response_params)
      render json: @response
    else
      render json: @response.errors.full_messages, status: 401
    end
  end

  def response_params
    params.permit(:id, :responder_id, :selected_option_id)
  end

end

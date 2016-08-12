require 'pusher'

class Api::ResponsesController < ApplicationController


  def index
    if params[:user_id]
      @responses = User.find(params[:user_id].to_i).votes
    elsif params[:survey_id]
      @responses = Survey.find(params[:survey_id].to_i).responses
    else
      # Shouldn't need this; route doesn't exist currently
      @responses = Survey.all.responses
    end

    if @responses
      render json: @responses.to_json(include: {question: {include: :survey}})
    else
      render json: {}
    end
  end

  def create
    # user = User.find(params[:user_params])
    # question = Option.find(params[:selected_option_id]).question
    #
    # if user.replied_to_questions.include?(question)
    #   render json: ["Already replied"], status: 401
    #
    # else
    # end
    @response = Response.new(response_params)

    if @response.save
      Pusher.trigger("survey_#{@response.survey.id}", 'vote', {})
      render json: @response.to_json(include: {question: {include: :survey}})
    else
      render json: @response.errors.full_messages, status: 401
    end
  end

  def destroy
    @response = Response.find(params[:id])

    if @response.delete
      Pusher.trigger("survey_#{@response.survey.id}", 'vote', {})
      render json: params[:id]
    else
      render json: @response.errors.full_messages, status: 401
    end
  end

  def update
    @response = Response.find(params[:id])

    if @response.update(response_params)
      Pusher.trigger("survey_#{@response.survey.id}", 'vote', {})
      render json: @response.to_json(include: {question: {include: :survey}})
    else
      render json: @response.errors.full_messages, status: 401
    end
  end

  def response_params
    params.permit(:id, :responder_id, :selected_option_id, :survey_id)
  end

end

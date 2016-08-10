class Api::ResponsesController < ApplicationController

  def index
    if params[:survey_id]
      @responses = Survey.find(params[:survey_id].to_i).responses

      if @responses
        render json: @responses.to_json(include: :question)
      else
        render json: {}
      end
    elsif params[:user_id]
      @responses = User.find(params[:user_id].to_i).votes
      if @responses
        render json: @responses.to_json(include: :question)
      else
        render json: {}
      end
    else
      # Shouldn't need this; route doesn't exist currently
      @responses = Survey.all.responses
      if @responses
        render json: @responses.to_json(include: :question)
      else
        render json: {}
      end
    end
  end

  def create
    @response = Response.new(response_params)

    if @response.save

      # Pusher.trigger("question_#{@response.question.id}", 'vote', {
      #
      #   # message: {
      #   #   question: @response.question.id,
      #   #   selected_option: @response.selected_option_id
      #   # }
      # })

      render json: @response.to_json(include: :question)
    else
      render json: @response.errors.full_messages, status: 401
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

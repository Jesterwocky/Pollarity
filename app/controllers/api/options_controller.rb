class Api::OptionsController < ApplicationController

  def update
    @option = Option.find(params[:id])

    if @option.update(option_params)
      render json: @option
    else
      render json: @option.errors.full_messages, status: 401
    end
  end

  def destroy
    @option = Option.find(params[:id])

    if @option.delete
      render json: {id: @option.id, surveyId: @option.survey.id, questionId: @option.question.id}
    else
      render json: @option.errors.full_messages, status: 401
    end
  end

  def option_params
    params.permit(:option, :question_id, :image_option, :image_url, :thumbnail_url)
  end
end

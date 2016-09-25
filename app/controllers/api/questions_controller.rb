class Api::QuestionsController < ApplicationController

  def show
    # probably don't need this
    @question = Question.find(params[:id])

    if @question
      render json: @question.to_json(include: {options: {include: :votes}})
    else
      render json: @question.errors.full_messages, state: 401
    end

  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      render json: @question.to_json(include: :options)
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def destroy
    @question = Question.find(params[:id])

    if @question.delete
      render json: {id: @question.id, surveyId: @question.survey_id}
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def question_params
    params.permit(:question, :survey_id, options_attributes: [:id, :option, :image_url, :thumbnail_url])
  end
end

class Api::SurveysController < ApplicationController
  def show
    @survey = Survey.includes(:questions, :options, :responses).find(params[:id].to_i)

    if @survey
      render json: @survey.to_json(include: {questions: {include: {options: {include: :votes}}}})
    else
      render json: ["No such survey"], status: 401
    end
  end

  def create
    @survey = Survey.new(survey_params)

    if @survey.save
      render json: @survey.to_json(include: {questions: {include: {options: {include: :votes}}}})
    else
      render json: @survey.errors.full_messages, status: 401
    end
  end

  def index
    @surveys = if params[:user_id]
      User.find(params[:user_id].to_i).surveys.includes(:questions, :options, :responses)
    else
      Survey.all
    end

    render json: @surveys.to_json(include: {questions: {include: {options: {include: :votes}}}})
  end

  def update
    @survey = Survey.find(survey_params[:id])

    if @survey.update(survey_params)
      render json: @survey.to_json(include: {questions: {include: {options: {include: :votes}}}})
    else
      render json: @survey.errors.full_messages, status: 401
    end
  end

  def destroy
    @survey = Survey.find(params[:id])

    if @survey.delete
      render json: {id: @survey.id}
    else
      render json: @survey.errors.full_messages, status: 401
    end

  end

  def survey_params
    params.permit(:id, :survey_title, :author_id, questions_attributes: [:id, :question, options_attributes: [:id, :option, :image_url, :thumbnail_url]])
  end
end

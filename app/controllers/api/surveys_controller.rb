class Api::SurveysController < ApplicationController
  def show
    # params may be incorrect here...
    @survey = Survey.find(params[:id].to_i)

    if @survey
      render json: @survey.to_json(include: {questions: {include: :options}})
    else
      render json: ["No such survey"], status: 401
    end
  end

  def create
    @survey = Survey.new(survey_params)
    # ensure_survey_title(@survey)

    if @survey.save
      render json: @survey.to_json(include: {questions: {include: :options}})
    else
      render json: @survey.errors.full_messages, status: 401
    end
  end

  def index
    @surveys = if params[:user_id]
      User.find(params[:user_id].to_i).surveys
    else
      Survey.all
    end

    render json: @surveys.to_json(include: {questions: {include: :options}})
  end

  def destroy
    @survey = Survey.find(params[:id])

    if @survey.delete
      render json: {}
    else
      render json: @survey.errors.full_messages, status: 401
    end

  end

  def survey_params
    params.permit(:survey_title, :author_id, questions_attributes: [:id, :question, :options])
  end
end

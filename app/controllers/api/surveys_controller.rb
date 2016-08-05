class Api::SurveysController < ApplicationController
  # def new
  #   @survey = Survey.new
  # end

  def create
    @survey = Survey.new(survey_params)
    # Confirm this is the right way
    @survey[author_id] = params[:userId]

    if @survey.save
      render json: @survey
    else
      render json: @survey.errors.full_messages, status 401
    end
  end

  def index
    @surveys = Survey.all
  end

  def destroy
    @survey = Survey.find(params[:id])

    if @survey.delete
      render json: {}
    else
      render json: @survey.errors.full_messages, status 401
    end

  end

  def survey_params
    params.permit(:survey_title, :question_attributes)
  end
end

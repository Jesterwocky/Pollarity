class Api::SurveysController < ApplicationController
  # def new
  #   @survey = Survey.new
  # end

  def create
    @survey = Survey.new(survey_params)
    @survey[author_id] = params[:userId]

    ensure_survey_title(@survey)

    if @survey.save
      render json: @survey
    else
      render json: @survey.errors.full_messages, status: 401
    end
  end

  def index
    debugger

    @surveys = if params[:user_id]
      User.find(params[:user_id].to_i).surveys
    else
      Survey.all
    end

    debugger

    render json: @surveys
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
    params.permit(:survey_title, :questions_attributes)
  end

  # Would like this to go on the model, but it doesn't work... Questions
  def ensure_survey_title(survey)
    first_question_exists = survey[questions_attributes] && survey[questions_attributes][0] && survey[questions_attributes][0][question]

    if survey[survey_title].nil? && first_question_exists
      survey[survey_title] = survey[questions_attributes][0][question]
    end
  end
end

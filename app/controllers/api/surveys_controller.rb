class Api::SurveysController < ApplicationController
  def show
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
      render json: @survey
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
    params.permit(:survey_title, :questions_attributes, :author_id)
  end

  # Would like this to go on the model, but it doesn't work... Questions
  # def ensure_survey_title(survey)
  #   first_question_exists = survey[questions_attributes] && survey[questions_attributes][0] && survey[questions_attributes][0][question]
  #
  #   if survey[survey_title].nil? && first_question_exists
  #     survey[survey_title] = survey[questions_attributes][0][question]
  #   end
  # end
end

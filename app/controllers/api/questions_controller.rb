class Api::QuestionsController < ApplicationController

  # def update
  #   @question = Question.find(params(:id))
  #
  #   if @question.update(question_params)
  #     render json: @question.to_json(include: {:options})
  #   else
  #     render json: @question.errors.full_messages, status: 401
  #   end
  # end
  #
  # def destroy
  #   @question = Question.find(params(:id))
  #
  #   if @question.delete
  #     render json: {}
  #   else
  #     render json: @question.errors.full_messages, status: 401
  #   end
  # end
  #
  # def question_params
  #   params.permit(:question, :survey_id, options_attributes: [:id, :option])
  # end
end

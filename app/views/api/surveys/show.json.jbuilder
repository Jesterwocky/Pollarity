json.survey do
  json.survey_id @survey.id
  json.title @survey.title

  json.array! @survey.questions do |survey_question|
    json.question_id survey_question.id
    json.question survey_question.question

    json.array! survey_question.options do |answer_option|
      json.option_id answer_option.id
      json.option answer_option.option

      json.array! answer_option.responses do |response|
        json.response_id response.id
      end
    end
  end
end

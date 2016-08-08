# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "GUEST", password: "password")
User.create!(username: "Testeron", password: "password")

Survey.create!(
  author_id: 1,
  survey_title: "Your Mood",
  questions_attributes: [
    {
      question: "What are you craving?",
      options_attributes: [
        {option: "A pizza"},
        {option: "A hug"},
        {option: "sleep"},
        {option: "Alcohol"}
      ]
    },
    {
      question: "Which of the following best describes your mood?",
      options_attributes: [
        {option: "Elated"},
        {option: "Deflated"},
        {option: "Neutral"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "2016 Olympics",

  questions_attributes: [
    {
      question: "Who are you rooting for?",
      options_attributes: [
        {option: "USA"},
        {option: "China"},
        {option: "Italy"},
        {option: "Brazil"},
        {option: "Other"}
      ]
    },
    {
      question: "What do you think about Brazil's sanitation and infrastructure problems?",
      options_attributes: [
        {option: "Pretty bad. Makes me not want to visit."},
        {option: "Probably overstated. I would vacation there."},
        {option: "No opinion."}
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "American Politics",

  questions_attributes: [
    {
      question: "Which best describes your political leanings?",
      options_attributes: [
        {option: "Far left"},
        {option: "Lefty-moderate"},
        {option: "Moderate"},
        {option: "Righty-moderate"},
        {option: "Far-right"},
        {option: "None of the above"}
      ]
    },
    {
      question: "Which of these issues do you feel most strongly about?",
      options_attributes: [
        {option: "Freedom of speech"},
        {option: "Education"},
        {option: "Protecting citizens from harm"},
        {option: "Economic freedom"}
      ]
    },
    {
      question: "Who would you rather see as the next president?",
      options_attributes: [
        {option: "Clinton"},
        {option: "Trump"},
        {option: "Sanders"},
        {option: "Gary Johnson"},
        {option: "Jeb Bush"},
        {option: "A randomly selected citizen"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "Your Mood",

  questions_attributes: [
    {
      question: "What are you craving?",
      options_attributes: [
        {option: "A pizza"},
        {option: "A hug"},
        {option: "sleep"},
        {option: "Alcohol"}
      ]
    },
    {
      question: "Which of the following best describes your mood?",
      options_attributes: [
        {option: "Elated"},
        {option: "Deflated"},
        {option: "Neutral"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "2016 Olympics",

  questions_attributes: [
    {
      question: "Who are you rooting for?",
      options_attributes: [
        {option: "USA"},
        {option: "China"},
        {option: "Italy"},
        {option: "Brazil"},
        {option: "Other"}
      ]
    },
    {
      question: "What do you think about Brazil's sanitation and infrastructure problems?",
      options_attributes: [
        {option: "Pretty bad. Makes me not want to visit."},
        {option: "Probably overstated. I would vacation there."},
        {option: "No opinion."}
      ]
    }
  ]
)


Survey.create!(
  author_id: 2,
  survey_title: "American Politics",

  questions_attributes: [
    {
      question: "Which best describes your political leanings?",
      options_attributes: [
        {option: "Far left"},
        {option: "Lefty-moderate"},
        {option: "Moderate"},
        {option: "Righty-moderate"},
        {option: "Far-right"},
        {option: "None of the above"}
      ]
    },
    {
      question: "Which of these issues do you feel most strongly about?",
      options_attributes: [
        {option: "Freedom of speech"},
        {option: "Education"},
        {option: "Protecting citizens from harm"},
        {option: "Economic freedom"}
      ]
    },
    {
      question: "Who would you rather see as the next president?",
      options_attributes: [
        {option: "Clinton"},
        {option: "Trump"},
        {option: "Sanders"},
        {option: "Gary Johnson"},
        {option: "Jeb Bush"},
        {option: "A randomly selected citizen"}
      ]
    }
  ]
)

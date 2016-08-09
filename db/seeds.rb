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
  survey_title: "Tech",

  questions_attributes: [
    {
      question: "What kind of phone do you have?",
      options_attributes: [
        {option: "iPhone"},
        {option: "Samsung"},
        {option: "Other Android phone"},
        {option: "Other phone not listed"},
        {option: "None"},
      ]
    },
    {
      question: "Where are you from?",
      options_attributes: [
        {option: "North America"},
        {option: "South America"},
        {option: "Africa"},
        {option: "Asia"},
        {option: "Europe"},
        {option: "Oceania"},
        {option: "Antartica"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "Favorites",

  questions_attributes: [
    {
      question: "Which is your favorite?",
      options_attributes: [
        {option: "Puppies"},
        {option: "Kittehs"},
        {option: "Lizards"},
      ]
    },
    {
      question: "How do you destress?",
      options_attributes: [
        {option: "Socialize"},
        {option: "Netflix"},
        {option: "Exercise"}
      ]
    },
    {
      question: "Where would you prefer to go on vacation?",
      options_attributes: [
        {option: "Prague"},
        {option: "Rome"},
        {option: "Sydney"},
        {option: "Tokyo"},
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
  survey_title: "Tech",

  questions_attributes: [
    {
      question: "What kind of phone do you have?",
      options_attributes: [
        {option: "iPhone"},
        {option: "Samsung"},
        {option: "Other Android phone"},
        {option: "Other phone not listed"},
        {option: "None"},
      ]
    },
    {
      question: "Where are you from?",
      options_attributes: [
        {option: "North America"},
        {option: "South America"},
        {option: "Africa"},
        {option: "Asia"},
        {option: "Europe"},
        {option: "Oceania"},
        {option: "Antartica"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "Favorites",

  questions_attributes: [
    {
      question: "Which is your favorite?",
      options_attributes: [
        {option: "Puppies"},
        {option: "Kittehs"},
        {option: "Lizards"},
      ]
    },
    {
      question: "How do you destress?",
      options_attributes: [
        {option: "Socialize"},
        {option: "Netflix"},
        {option: "Exercise"}
      ]
    },
    {
      question: "Where would you prefer to go on vacation?",
      options_attributes: [
        {option: "Prague"},
        {option: "Rome"},
        {option: "Sydney"},
        {option: "Tokyo"},
      ]
    }
  ]
)

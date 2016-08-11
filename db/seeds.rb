# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "GUEST", password: "password", anon: false)
User.create!(username: "Testeron", password: "password", anon:false)

Survey.create!(
  author_id: 1,
  survey_title: "You you you",
  questions_attributes: [
    {
      question: "How are you feeling?",
      options_attributes: [
        {option: "Elated"},
        {option: "Deflated"},
        {option: "Neutral"}
      ]
    },
    {
      question: "What do you want most?",
      options_attributes: [
        {option: "Sleep"},
        {option: "A hug"},
        {option: "Coffee"}
      ]
    },
    {
      question: "Which pet is best?",
      options_attributes: [
        {option: "Puppehz"},
        {option: "Kittehz"},
        {option: "Lizards"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "Programming",

  questions_attributes: [
    {
      question: "What did you primarily do/study before programming?",
      options_attributes: [
        {option: "Math or engineering"},
        {option: "Visual or performing arts"},
        {option: "Business, writing, or other office work"}
      ]
    },
    {
      question: "Which language do you prefer?",
      options_attributes: [
        {option: "Ruby"},
        {option: "JavaScript"},
        {option: "Other"}
      ]
    },
    {
      question: "All else being equal, where would you prefer to work?",
      options_attributes: [
        {option: "Large company"},
        {option: "Startup"},
        {option: "Consultancy"},
        {option: "Don't care"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "Quest",

  questions_attributes: [
    {
      question: "What is your quest?",
      options_attributes: [
        {option: "Get a job"},
        {option: "Seek the holy grail"},
        {option: "Save the world"},
        {option: "Defeat the ultimate evil"}
      ]
    },
    {
      question: "Weapon of choice?",
      options_attributes: [
        {option: "My wit"},
        {option: "My 1337 skillz"},
        {option: "Sword"},
        {option: "Bow"},
        {option: "Axe"},
        {option: "Giant robot"},
        {option: "Reverse psychology"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "You you you",
  questions_attributes: [
    {
      question: "How are you feeling?",
      options_attributes: [
        {option: "Elated"},
        {option: "Deflated"},
        {option: "Neutral"}
      ]
    },
    {
      question: "What do you want most?",
      options_attributes: [
        {option: "Sleep"},
        {option: "A hug"},
        {option: "Coffee"}
      ]
    },
    {
      question: "Which pet is best?",
      options_attributes: [
        {option: "Puppehz"},
        {option: "Kittehz"},
        {option: "Lizards"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "Programming",

  questions_attributes: [
    {
      question: "What did you primarily do/study before programming?",
      options_attributes: [
        {option: "Math or engineering"},
        {option: "Visual or performing arts"},
        {option: "Business, writing, or other office work"}
      ]
    },
    {
      question: "Which language do you prefer?",
      options_attributes: [
        {option: "Ruby"},
        {option: "JavaScript"},
        {option: "Other"}
      ]
    },
    {
      question: "All else being equal, where would you prefer to work?",
      options_attributes: [
        {option: "Large company"},
        {option: "Startup"},
        {option: "Consultancy"},
        {option: "Don't care"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "Quest",

  questions_attributes: [
    {
      question: "What is your quest?",
      options_attributes: [
        {option: "Get a job"},
        {option: "Seek the holy grail"},
        {option: "Save the world"},
        {option: "Defeat the ultimate evil"}
      ]
    },
    {
      question: "Weapon of choice?",
      options_attributes: [
        {option: "My wit"},
        {option: "My 1337 skillz"},
        {option: "Sword"},
        {option: "Bow"},
        {option: "Axe"},
        {option: "Giant robot"},
        {option: "Reverse psychology"}
      ]
    }
  ]
)

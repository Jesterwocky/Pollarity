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
  survey_title: "Pet vs Pet",
  questions_attributes: [
    {
      question: "Which pet is best?",
      options_attributes: [
        {option: "Puppehz", image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471002397/la6gfsh7s8vwzhotkvkk.jpg"},
        {option: "Kittehz", image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471002381/kbshb262pn5wslebsvey.jpg"},
        {option: "Lizards", image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471002413/o1ejfg83h0koru9psxi0.jpg"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "I want to...",
  questions_attributes: [
    {
      question: "Be famous",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    },
    {
      question: "Try Haggis",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    },
    {
      question: "Move to a new city",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    },
    {
      question: "Write a book",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "How you doin?",
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
    }
  ]
)

Survey.create!(
  author_id: 1,
  survey_title: "Work and Life",

  questions_attributes: [
    {
      question: "What did you study in school?",
      options_attributes: [
        {option: "Math, engineering, science, or programming"},
        {option: "Visual or performing arts"},
        {option: "Business, writing, languages, or history"},
        {option: "Other"}
      ]
    },
    {
      question: "Which do you like best?",
      options_attributes: [
        {option: "Breakfast"},
        {option: "Lunch"},
        {option: "Dinner"},
        {option: "Snacks"}
      ]
    },
    {
      question: "When are you most productive?",
      options_attributes: [
        {option: "Early morning"},
        {option: "Morning"},
        {option: "Lunchtime"},
        {option: "Midafternoon"},
        {option: "Evening"},
        {option: "Late at night"}
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
  survey_title: "Pet vs Pet",
  questions_attributes: [
    {
      question: "Which pet is best?",
      options_attributes: [
        {option: "Puppehz", image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471002397/la6gfsh7s8vwzhotkvkk.jpg"},
        {option: "Kittehz", image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471002381/kbshb262pn5wslebsvey.jpg"},
        {option: "Lizards", image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471002413/o1ejfg83h0koru9psxi0.jpg"}
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "I want to...",
  questions_attributes: [
    {
      question: "Be famous",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    },
    {
      question: "Try Haggis",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    },
    {
      question: "Move to a new city",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    },
    {
      question: "Write a book",
      options_attributes: [
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026927/ajzlr7k3xf909cdmxjdy.png"},
        {image_url: "http://res.cloudinary.com/pollaritycloud/image/upload/v1471026935/dm8rzw9ymskkdyljpfe6.png"},
      ]
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "How you doin?",
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
    }
  ]
)

Survey.create!(
  author_id: 2,
  survey_title: "Work and Life",

  questions_attributes: [
    {
      question: "What did you study in school?",
      options_attributes: [
        {option: "Math, engineering, science, or programming"},
        {option: "Visual or performing arts"},
        {option: "Business, writing, languages, or history"},
        {option: "Other"}
      ]
    },
    {
      question: "Which do you like best?",
      options_attributes: [
        {option: "Breakfast"},
        {option: "Lunch"},
        {option: "Dinner"},
        {option: "Snacks"}
      ]
    },
    {
      question: "When are you most productive?",
      options_attributes: [
        {option: "Early morning"},
        {option: "Morning"},
        {option: "Lunchtime"},
        {option: "Midafternoon"},
        {option: "Evening"},
        {option: "Late at night"}
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

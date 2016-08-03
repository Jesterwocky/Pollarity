# PHASE 2: Surveys and Questions

## Rails
#### Models
#### Controllers
#### Views

## Flux
#### Components (views)
* CreateSurvey
* CreateQuestion
* MySurveys

#### Stores
* Survey store
  * all
  * reset
  * remove
  * find
  * findByUser
* Question store
  * allBySurvey
  * addQuestion

#### Actions
* SurveyActions
  * Client actions:
    * fetchSurveys
    * getSurvey
    * createSurvey
    * deleteSurvey
  * Server actions:
    * receiveAll
    * receiveSurvey
    * deleteSurvey

* QuestionActions
  * Client actions:
    * fetchSurveyQuestions
    * createQuestion
    * deleteQuestion
  * Server actions:
    * receiveAll
    * receiveQuestion
    * deleteQuestion

#### ApiUtil
* SurveysApiUtil
  * fetchSurveys
  * getSurvey
  * createSurvey
  * deleteSurvey

* QuestionsApiUtil
  * createQuestion
  * fetchSurveyQuestions
  * deleteQuestion

## Gems/Libraries

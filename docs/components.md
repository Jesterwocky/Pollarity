## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * NavBar
  * **HomePage**
  * **Signup**
  * **Login**
  * **SurveyIndex**
  * **ResponseForm**
    * Response
  * **UserSurveyIndex**
    * **CreateSurvey**
      * CreateQuestion
      * CreateOptions
        * CreateOption
    * **SurveyReport**
      * SurveyURL
      * SurveyResults

## Routes

* component: `App` path `/`
* component: `Home` path `/` (index route)
  * component: `Signup` path `/signup`
  * component: `Login` path `/login`
  * component: `Surveys` path `/surveys`
  * component: `ResponseForm` path `/surveys/:surveyResponseId`
  * component: `UserSurveys` path `/username/surveys`
    * component: `CreateSurvey` path `/username/surveys/new`
    * component: `SurveyReport` path `/username/surveys/:surveyId`

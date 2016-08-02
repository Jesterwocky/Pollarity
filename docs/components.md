## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * NavBar
  * **HomePage**
  * **Signup**
  * **Login**
  * **OpenSurveys**
  * **ResponseForm**
    * Response
  * **MySurveys**
    * **MySurvey**
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
* component: `OpenSurveys` path `/surveys`
* component: `ResponseForm` path `/survey/id`
* component: `CreateSurvey` path `/mysurveys/new`
* component: `MySurveys` path `/mysurveys`
* component: `SurveyReport` path `/mysurveys/id`

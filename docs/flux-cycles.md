# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions
**Note:** need to review and revise auth and routing URLs!

* `signUp`
  * invoked from `Signup` component `onSubmit`
  * `POST` to `api/users`
  * on success: `receiveCurrentUser`
* `logIn`
  * invoked from `Login` component `onSubmit`
  * `POST` to `api/session`
  * on success: `receiveCurrentUser`
* `logOut`
  * invoked from `Navbar` component Logout button `onSubmit`
  * `DELETE` to `api/session`
  * on success: `removeCurrentUser`
* `currentUser` <-- how to adapt this for anon users?
  * invoked from `App` in componentDidMount
  * `GET` to `api/session`
  * on success: `receiveCurrentUser`


### Session API Response Actions

* `receiveCurrentUser`
  * dispatches to `CurrentUserStore` to add to `_currentUser`
* `removeCurrentUser`
  * dispatches to `CurrentUserStore` to remove from `_currentUser`

## Survey Cycles
(Will be very similar for questions; surveys will only have one question initially)

### Survey API Request Actions

* `fetchAllSurveys`
  * invoked by `OpenSurveys` component `componentDidMount`
  * `GET` to `api/surveys`
  * on success: `receiveAllSurveys`

* `fetchMySurveys`
  * invoked by `MySurveys` component `componentDidMount`
  * `GET` to `api/mysurveys`
  * on success: `receiveAllSurveys`

* `createSurvey`
  * invoked by `CreateSurvey` component `onSubmit`
  * `POST` to `api/mysurveys/new`
  * on success: `receiveSurvey`

* `deleteSurvey`
  * invoked by `MySurveys` (later `MySurvey`) component delete link `onClick`
  * `DELETE` to `api/mysurveys/surveyId`
  * on success: `removeSurvey`

### Survey API Response Actions

* `receiveAllSurveys`
  * dispatches to `SurveyStore` to add to `_surveys`
* `receiveSurvey`
  * dispatches to `SurveyStore` to add to `_surveys`
* `removeSurvey`
  * dispatches to `SurveyStore` to remove from `_surveys`

### Survey Store Listeners
* `OpenSurveys`
* `MySurveys`
* `MySurvey`



## Response Cycles

### Response API Request Actions
* `fetchQuestionResponses`
  * invoked by `SurveyResults` component on `componentDidMount`
  * `GET` to `api/surveysurveyId/responses`
  * on success: `receiveAll`
* `getResponse`
  * invoked by `ResponseForm` on `componentDidMount`
  * `GET` to `api/survey/:surveyId/responses/responseId`
  * on success: `receiveResponse`
* `createResponse`
  * invoked by `Response` on `onClick`
  * `POST` to `api/survey/surveyId/responses`
  * on success: `receiveResponse`
* `editResponse`
  * invoked by `Response` on `onClick`
  * `PATCH` to `api/survey/surveyId/responses/responseId`
  * on success: `receivePost`
* `removeResponse`
  * invoked by `Response` on `onClick`
  * `DELETE` to `api/survey/surveyId/responses/responseId`
  * on success: `removeResponse`

**Note:** for create/edit/remove, want to:
- Create if no previous response exists for the user/question combo.
- Edit if a previous response exists with a different question selected
- Delete if a previous response exists for the SAME response (deselection)

### Response API Response Actions
* `receiveAll`
  * dispatches to `ResponseStore` to add to `_responses`
* `receiveResponse`
  * dispatches to `ResponseStore` to add to `_responses`
* `removeResponse`
  * dispatches to `ResponseStore` to add to `_responses`

### Response Store Listeners
* `ResponseForm`
* `SurveyReport`


## Survey Report Cycles

### Survey Report API Request Actions
* `getReport`
  * invoked by `MySurveys` (or a `MySurvey`) on `onClick`
  * `GET` to `api/mysurveys/id`
  * on success: `receiveReport`
* `createReport`
  * invoked by `CreateSurvey` on `onSubmit`
  * `POST` to `api/mysurveys/id`
  * on success: `receiveReport`

### Survey Report API Response Actions
* `receiveReport`
  * dispatches to `ResponseStore` to add to `_responses`

# Pollarity

## Heroku link
https://pollarity-polls.herokuapp.com/

## Minimum Viable Product

**Pollarity** is a clone of **Poll Everywhere** using Ruby on Rails and React.js. **Pollarity** will have basic survey creation, response, and result-tracking capabilities.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosted on Heroku
- [ ] CSS styling on all components
- Features:
  - [ ] **User Accounts**
    - [ ] Signup and login
    - [ ] Anonymous interaction permitted
  - [ ] **Survey Questions** - users can:
    - [ ] Create a single-question survey
    - [ ] Create a multi-question survey
    - [ ] See a list of surveys they've created
  - [ ] **Options** - users can:
    - [ ] Add answer options to a survey question
  - [ ] **Participation** - users can:
    - [ ] See a list of open surveys
    - [ ] Access a survey's response page at the custom URL
    - [ ] Submit a response to survey questions
  - [ ] **Reporting** - poll creators can:
    - [ ] See a custom URL to give participants
    - [ ] See survey responses in real time

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline


### PHASE 1: Backend and Auth
DBs, user accounts, anonymous users. **2 days**

- [ ] Create rails project
- [ ] Host on Heroku
- [ ] Create JS entry point and frontend folder structure
- [ ] DB tables for:
  - [ ] Users (plus controller) - with "anon" boolean
  - [ ] Surveys (1 to 1 relationship with questions for now)
  - [ ] Questions
  - [ ] Options
  - [ ] Responses (Users/Answer_Options join table)
- [ ] Users model set up for authentication
- [ ] Sessions controller
- [ ] StaticPages controller that renders a root view
- [ ] Signup component
- [ ] Login component
- [ ] Current user store
- [ ] NavBar component
- [ ] username or "log in" and "sign up" buttons
- [ ] My Polls link

- **App state:**
  - [ ] Can log in and out
  - [ ] Cookies set for anonymous and logged-in users
  - [ ] Routes are set up

### PHASE 2: Surveys and Questions
(All surveys are 1-question only for now.)
**3 days**

- [ ] API util for surveys - create, fetch, get, delete
- [ ] API util for questions - create, fetch
- [ ] Survey store
- [ ] Question store
- [ ] Survey actions - create, fetch, get, update, delete
- [ ] Question actions = create, fetch, delete
- [ ] CreateSurvey component
- [ ] CreateQuestion component
- [ ] MySurveys component
- **App state** - user can:
  - [ ] Access survey creation from home page
  - [ ] Enter a survey question
  - [ ] Save a survey
  - [ ] See a list of surveys they've created
  - [ ] Delete a survey

### PHASE 3: Answer Options
**1 day**

- [ ] API util for options
- [ ] Options store
- [ ] Option actions - create, fetch, get, edit, delete
- [ ] CreateOptions component (parent)
- [ ] CreateOption component (child)
- **App state** - user can:
  - [ ] Add options for a survey question

### PHASE 4: Survey Responses
**2 days**

- [ ] API util for responses
- [ ] Response store
- [ ] Response actions - create, fetch, get, update, delete
- [ ] ResponseForm component
- [ ] Response component (1 per option)
- **App state**
  - User can:
    - [ ] Access a response form for any survey
    - [ ] Select a response
    - [ ] Change or deselect a previous response
    - [ ] See their previous response after navigating away from the response form, even if not logged in.
  - Responses are logged in the Responses DB table.

### PHASE 5: Reporting
**2 days**

- [ ] MySurvey component
  - [ ] Shows survey question and options
  - [ ] On click, redirects to the survey report
- [ ] SurveyURL component
- [ ] SurveyResults component
- [ ] SurveyReport component
- **App state** - user can:
  - [ ] See survey details in each MySurvey component under MySurveys
  - [ ] Access the SurveyReport by clicking on a MySurvey component
  - [ ] View the URL for their survey's response form
  - [ ] See a graph for survey results
  - [ ] See accurate, real-time survey results

### BONUS FEATURES
- [ ] Make surveys editable
- [ ] Multi-question surveys
- [ ] Ability to publish and close surveys
- [ ] Ability to upload images as survey options
- [ ] Different survey types (word cloud, Q&A, etc.)

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docs/phases/phase6.md
[phase-seven]: docs/phases/phase7.md
[phase-eight]: docs/phases/phase8.md

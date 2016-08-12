# Pollarity

[Pollarity-Polls on Heroku]: https://pollarity-polls.herokuapp.com/

**Pollarity** is a clone of **Poll Everywhere** that was created using Ruby on Rails and React.js. **Pollarity**

## Single Page with React routing

Pollarity is a single-page app that uses React routes and nested components to mimic multi-page functionality. Users have access to the following distinct regions:
- Home/landing page
- Signin
- Signup
- User surveys list
- Survey creation (via modal)
- Voting page for participation
- Vote reporting with real-time updates

## Survey Summary

Users can see all of their surveys on their personal page. Summaries include the survey title, questions, and links to reporting and participation.

## Multiple-Choice Questions; Multi-Question Surveys

Users can create polls with any number of questions. Questions are multiple-choice. Model-level validations ensure that all surveys have at least 2 text and/or image options for users to choose from.

Upon clicking "Create", the survey instantly appears in the user's list of surveys. Reporting and the participation page are available immediately.

## Endless Question List

On the survey summary page, a modal lets the user create an endless stream of survey questions just by typing, without having to use an "Add" button.

At all times, a dummy question box sits at the bottom of the modal, inviting the user to enter a new question. This input field has a change handler set. When the user enters text in the dummy question box, the handler create a real question box component instantly, transferring the text to the new component; changing the focus; and clearing the dummy question box. Additional questions can be created by typing into the dummy box.

## Options

New question components have two option components by default. These components can be edited and deleted prior to save. Options can be text, an image, or both. The image-upload interface provided by Cloudinary is simple, but sufficient to create polls with high-quality imagery.

## Anonymous Participation

Users can participate in Pollarity polls with or without an account. To track anonymous users, the app sets a simple cookie and creates a temporary account in "anon" mode (flagged at the database level).

Users can only vote once, but they can change and/or remove an original vote by clicking on different options. To update a user's vote, the option component evaluates the circumstances and sends an appropriate response to the database: create (if no previous votes are associated with the current question and user account), update (if the user previously selected a different option) or delete (if the user has clicked an already-selected response).

## Reporting Page

The reporting page presents a large-font rendering of the link to the survey's voting page, followed by a separate bar graph (QuestionReport component) for each question in the survey. The bar graph is composed of divs within divs. The inner divs are ResponseOption React components that each represent one possible answer to the question. The width of the innermost div is controlled by an inline style, which is recalculated every time the parent QuestionAndAnswers component registers a new, changed, or deleted vote from Pusher, causing the OptionDisplay components to re-render.

## Real-Time Updates

Pusher's easy-to-implement websocket API allows votes to appear within milliseconds of casting, and to disappear just as quickly if a user removes their vote.

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

* [views]: docs/views.md
* [components]: docs/components.md
* [flux-cycles]: docs/flux-cycles.md
* [api-endpoints]: docs/api-endpoints.md
* [schema]: docs/schema.md

* [phase-one]: docs/phases/phase1.md
* [phase-two]: docs/phases/phase2.md
* [phase-three]: docs/phases/phase3.md
* [phase-four]: docs/phases/phase4.md
* [phase-five]: docs/phases/phase5.md
* [phase-six]: docs/phases/phase6.md
* [phase-seven]: docs/phases/phase7.md
* [phase-eight]: docs/phases/phase8.md

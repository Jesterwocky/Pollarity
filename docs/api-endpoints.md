# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `GET /api/session`
- `DELETE /api/session`

### Surveys
- `GET /api/surveys`
- `GET /api/users/userId/surveys`
- `POST /api/surveys`
- `DELETE /api/surveys/surveyId`

### Questions
TBD.

### Response Forms
- `GET /api/surveys/surveyId`

### Responses
- `GET /api/surveys/surveyId/responses`
- `POST /api/surveys/surveyId/responses`
- `DELETE /api/surveys/surveyId/responses/responseId`
- `PATCH /api/surveys/surveyId/responses/responseId`

### Survey Reports
- `GET /api/surveys/surveyId/report`

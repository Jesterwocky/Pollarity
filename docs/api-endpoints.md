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
- `POST /api/surveys`
- `DELETE /api/surveys/surveyId`

### Questions
TBD.

### Response Forms
- `GET /api/surveys/surveyId`

### Responses
- `POST /api/surveys/surveyId/responses`
- `GET /api/surveys/surveyId/responses`
- `GET /api/surveys/surveyId/responses/responseId`
- `DELETE /api/surveys/surveyId/responses/responseId`
- `PATCH /api/surveys/surveyId/responses/responseId`

### Survey Reports
- `POST /api/surveys/surveyId/report`
- `GET /api/surveys/surveyId/report`

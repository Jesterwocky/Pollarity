# Schema Information

## users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null, indexed, unique
password_digest| string    | not null
session_token  | string    | not null


## surveys
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | foreign key, not null, indexed
survey_title| string    |
response_url| string    | indexed

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
survey_id   | integer   | foreign key, not null, indexed
question    | string    | not null


## Options
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | foreign key, not null, indexed
option      | string    | not null


## Responses
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
selected_option_id| integer   | foreign key, not null,indexed
responder_id      | integer   | foreign key, not null, indexed

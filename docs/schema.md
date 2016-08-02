# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null, indexed, unique
password_digest| string | not null
session_token| string   | not null
anon        | boolean   | not null
name        | string    |


## surveys
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | FK, not null, indexed
survey_title| string    |

NOTE: at least initially, survey_title will automatically be the same as the single question associated with the survey


## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
survey_id   | integer   | FK, not null, indexed
question    | string    | not null


## Options
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | FK, not null, indexed
option      | string    | not null


## Responses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
option_id   | integer   | FK, not null,indexed
user_id     | integer   | FK< not null, indexed

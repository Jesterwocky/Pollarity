# PHASE: Survey Responses

## Rails
### Models
### Controllers
### Views


## Flux
### Components (views)
* ResponseForm
* Response

### Stores
* Response store
  * findByUserAndQuestion
  * allByQuestion
  * add
  * remove

### Actions
* ResponseActions
  * Client actions:
    * fetchQuestionResponses
    * getResponse
    * createResponse
    * editResponse
    * removeResponse
  * Server actions:
    * receiveAll
    * receiveQuestion

### ApiUtil
* ResponsesApiUtil
  * fetchResponses
  * getResponse
  * createResponse
  * updateResponse
  * deleteResponse

## Gems/Libraries

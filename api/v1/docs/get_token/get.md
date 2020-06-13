
# Get a Token 

Get a token that you can use to interact with this microservices

**URL** : `/api/v1/get_token/:account_id`

**URL Parameters** : `account_id=[string]` where `account_id` is the ID of the user 

**Method** : `GET`

**Auth required** : NO

**Permissions required** : NO

**Data constraints**: `{}`

**Header constraints**: NONE


**Data example** `{}`


## Success Response

**Condition** : None.

**Code** : `200 OK`

**Content example**

```json {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImFjY291bnRfaWQiOiJhc2Rmc2dlIn0sImlhdCI6MTU5MjA2NjQyNSwiZXhwIjoxNTkyMDcwMDI1fQ.aIS7mlqN1NtmkURiioHxpvhIJmniGUJJhzceEHCOVlA"
}
```





# Show Page Html

Get the page html for the specified page id  if current User has access permissions to it.

**URL** : `/api/retrieve_page_html/:page_id`

**URL Parameters** : `page_id=[string]` where `page_id` is the ID of the page on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : 
User is at least one of the following in relation to the page requested:

* Owner `OO`
* Admin `AA`
* Viewer `VV`

**Data constraints**


**Header constraints**

The Token used to retrieve the User's pages can be sent in the
header. Values passed in the `Authorisation` header will pass  checks for validity:

- If 0 characters, or not provided, ignore.
- If valid characters, Retrieved.
- If expired, ignore.

```
Authorization: ['Bearer Token']
```


**Data example** `{}`


## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `200 `

**Content example**

```html

    

```


## Error Responses

**Condition** : If page does not exist with `id` of provided `page_id` parameter.

**Code** : `404 NOT FOUND`

**Content** : `{}`

### Or

**Condition** : If page exists but Authorized User does not have required
permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
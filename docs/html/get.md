# Show Page Html

Get the page html for the specified page id of the currently Authenticated User.

**URL** : `/api/retrieve_page_html/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Provide page id of page to be retrieved.

```json
{
    "page_id": "[unicode 64 chars max]"
}
```

**Data example** All fields must be sent.

```json
{
    "page_id": "Build something project dot com"
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 123,
    "name": "Build something project dot com",
    "url": "http://testserver/api/accounts/123/"
}
```

## Error Responses

**Condition** : If Account already exists for User.

**Code** : `303 SEE OTHER`

**Headers** : `Location: http://file.microdev.com/api/retrieve_page_html/123/`

**Content** : `{}`

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "name": [
        "This field is required."
    ]
}
```

# Create a page

Create a page for the authenticated User if the same page for that User does
not already exist. A User cannot have.

**URL** : `/api/add_page/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Provide  url and tile of the page to be created.

```json
{
    "url": "[unicode 64 chars max]",
    "title": "[unicode 64 chars max]"
}
```
**Header constraints**

The Token used to create the User's pages can be sent in the
header. Values passed in the `Authorisation` header will pass  checks for validity:

- If 0 characters, or not provided, ignore.
- If valid characters, save.
- If expired, ignore.

```
Authorization: ['Bearer Token']
```


**Data example** All fields must be sent.

```json
{
    "url": "https://Build-something-project-dot.com",
     "title": "Build"
}
```

## Success Response

**Condition** : If everything is OK and the same page didn't exist for this User.

**Code** : `201 CREATED`

**Content example**

```json
{
    "_id": "78gig78ytf55n3s46dfgxb",
    "title": "Build something project dot com",
    "url": "http://files.microdev.com/api/page/123/",
    "user_id": "dtd54dghjsw3ed5k7"
}
```

## Error Responses

**Condition** : If Page already exists for User.

**Code** : `303 SEE OTHER`

**Headers** : `Location: http://testserver/api/retrieve_page_html/123/`

**Content** : `{}`

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "url": [
        "This field is required."
    ]
}
```

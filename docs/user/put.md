# Update Page Markdown 

Allow the Authenticated User to update a page's markdown.

**URL** : `/api/set_page_markdown/`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "page_id": "[1 to 30 chars]",
    "markdown": "[1000 to 3000 chars]"
}
```

Note that `id` and `email` are currently read only fields.

**Header constraints**

The application used to update the User's pages can be sent in the
header. Values passed in the `UAPP` header only pass basic checks for validity:

- If 0 characters, or not provided, ignore.
- If 1 to 8 characters, save.
- If longer than 8 characters, ignore.

```
UAPP: [1 to 8 chars]
```

**Data examples**

Partial data is allowed.

```json
{
    "page_id": ""
}
```

Empty data can be PUT to erase the name, in this case from the iOS application
version 1.2:

```
UAPP: ios1_2
```

```json
{
    "last_name": ""
}
```

## Success Responses

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information. A
User with `id` of '1234' sets their name, passing `UAPP` header of 'ios1_2':

```json
{
    "id": 1234,
    "first_name": "Joe",
    "last_name": "Bloggs",
    "email": "joe25@example.com",
    "uapp": "ios1_2"
}
```

## Error Response

**Condition** : If provided data is invalid, e.g. a markdown field is too long.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "markdown": [
        "Please provide maximum 3000 character or empty string",
    ]
}
```

## Notes

* Endpoint will ignore irrelevant and read-only data such as parameters that
  don't exist, or fields that are not editable like `page_id` or `page_title`.
* Similar to the `GET` endpoint for the User, if the User does not have a
  UserInfo instance, then one will be created for them.

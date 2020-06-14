# Update Page Markdown 

Allow the Authenticated User to update a page's markdown.

**URL** : `/api/set_page_markdown/`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : 
User is at least one of the following in relation to the page requested:

* Owner `OO`
* Admin `AA`


**Data constraints**

```json
{
    "page_id": "[1 to 30 chars]",
    "markdown": "[1000 to 3000 chars]"
}
```

Note that `id` and `title` are currently read only fields.

**Header constraints**

The Token used to update the User's pages can be sent in the
header. Values passed in the `Authorisation` header will pass  checks for validity:

- If 0 characters, or not provided, ignore.
- If valid characters, save.
- If expired, ignore.

```
Authorization: ['Bearer Token']
```

**Data examples**

Partial data is allowed.

```json
{
    "page_id": "8yft78v6576r6r56yfehdq5dk5a"
}
```

Empty data can be PUT to erase the markdown:

```
Authorization: 'Bearer r6r56yfehdq5dk5a'
```
<span class="bg-dark">
```json
{
    "page_id": "8yft78v6576r6r56yfehdq5dk5a",
    "markdown": "Hello **World**"
}
```</span>

## Success Responses

**Condition** : Data provided is valid and User is Authenticated.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information. A
User with `id` of '1234' sets their name, passing `UAPP` header of 'ios1_2':

```json
{
        "_id": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
        "title": "String",
        "url": "String",
        "user_id": "String",
        "markdown":" String"
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

### Or

**Condition** : If page does not exist with `id` of provided `page_id` parameter.

**Code** : `404 NOT FOUND`

**Content** : `{}`


### OR

**Condition** : If page exists but Authorized User does not have required
permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```

## Notes

* Endpoint will ignore irrelevant and read-only data such as parameters that
  don't exist, or fields that are not editable like `page_id` or `page_title`.


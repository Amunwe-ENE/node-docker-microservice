# Show Accessible Pages

Show all pages the active User can access and with what permission level.
Includes their own pages if they have one.

**URL** : `/api/list_page/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any pages.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more Pages.

**Code** : `200 OK`

**Content** : In this example, the User can see three Pages as PageAdmin
`AA`, Viewer `VV`, and Owner `OO` - in that order:

```json
[
    {
        "page": {
            "id": 123,
            "title": "Lots of Admins Project",
            "url": "http://file.microdev.com/api/add/index.html"
        },
        "permission": "AA"
    },
    {
        "account": {
            "id": 234,
            "title": "Feel free to View this",
            "url": "http://files.microdev/api/server.js"
        },
        "permission": "VV"
    },
    {
        "account": {
            "id": 345,
            "title": "Mr Owner Project",
            "url": "http://testserver/api/accounts/345/"
        },
        "permission": "OO"
    }
]
```

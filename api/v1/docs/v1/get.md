# Get Docs in JSON

Used to collect a the Docs in JSON Format.

**URL** : `/api/v1/`

**Method** : `GET`

**Auth required** : NO


## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
        "end_point": "/add_page",
        "documentation_url": "https://files.microdev.com/docs/add/post.md",
        "data_constrants": {
            "url": "[unicode 64 chars max]",
            "title": "[unicode 64 chars max]"
        },
        "responses":{
            "success":{},
            "errors":[

            ]
         },
    },
   
]
```


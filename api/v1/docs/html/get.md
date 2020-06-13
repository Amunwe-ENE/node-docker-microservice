
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

**Condition** : If everything is OK  .

**Code** : `200 OK`

**Content example**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>The page title</title>
    </head>
    <body>
        <nav></nav>
        <div class="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae, quisquam amet eveniet doloribus necessitatibus sequi eos assumenda? Similique illo asperiores eveniet facilis delectus tempore, molestiae veniam! Repudiandae, labore illum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt eius laudantium libero! Totam earum consequuntur ducimus nemo optio, hic odit officiis blanditiis, in neque, libero nam tenetur illum doloribus!</p>
        </div>
        <footer></footer>
    </body>
</html>
    

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
```


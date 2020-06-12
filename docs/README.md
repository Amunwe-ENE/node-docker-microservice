# External Static pages Microservice Docs
* [baseUrl](/api/) : `GET https:files.microdev.com/api/`


## Open Endpoints

Open endpoints require no Authentication.

* [Docs in JSON](api/docs/v1) : `GET /api/v1/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the auth microservice.

### User's Page related

Each endpoint manipulates or displays pages related to the User whose
Token is provided with the request:

* [Add page](api/docs/add) : `POST /api/v1/add_page`
* [Update Page Markdow](api/docs/markdown) : `PUT /api/v1/set_page_markdown/:id`
* [Get Page Html](api/docs/html) : `Get /api/v1/retrieve_page_html/:id`

### All Page related

Endpoints for viewing All pages that the Authenticated User
has permissions to access.

* [List all permitted pages](api/docs/all_pages) : `GET /api/v1/list_pages`


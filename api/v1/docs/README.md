
# External Static pages Microservice Docs
* [baseUrl](#) : ` https:files.microdev.com/api/`


## Open Endpoints

Open endpoints require no Authentication.

* [Docs in JSON](/api/v1/docs/v1/get.md) : `GET /api/v1/`
* [Get a Token](/api/v1/docs/get_token/get.md) : `GET /api/v1/get_token/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the auth microservice.

### User's Page related

Each endpoint manipulates or displays pages related to the User whose
Token is provided with the request:

* [Add page](/api/v1/docs/add/post.md) : `POST /api/v1/add_page/`
* [Update Page Markdow](/api/v1/docs/markdown/put.md) : `PUT /api/v1/set_page_markdown/`
* [Get Page Html](/api/v1/docs/html/get.md) : `Get /api/v1/retrieve_page_html/:page_id`

### All Page related

Endpoints for viewing All pages that the Authenticated User
has permissions to access.  

* [List all accesible pages](/api/v1/docs/list_pages/get.md) : `GET /api/v1/list_pages/`


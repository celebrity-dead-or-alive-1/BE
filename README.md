# BE


# Celebrity Table

- Field contents are not checked for formatting or proper data. *Garbage in, garbage out.*
- Check the `getById` output example below for the fields to send.
- `POST` - all fields are required *except id*.
- `PUT` - all fields are required ***including*** *id*.

| HTTP | Path               | route method | Desc                                   | Data|
|-|-|-|-|-|
| GET  | /api/celeb/        | getAll       | Gets the full list of all celebrities. | Returns an array of `getById` objects.|
| GET  | /api/celeb/count   | getCount     | Gets the number of celebs in the DB.   | Returns an object `{"count": 5}`|
| GET  | /api/celeb/:id     | getById      | Gets the celeb at that id.             | Returns a `getById` object.|
| POST | /api/celeb/        | add          | Adds a celeb | **Expects** `getById` json object *without id*. **Returns** `getById` object.|
| PUT  | /api/celeb/        | change       | Edits an existing celeb. | **Expects** `getById` json object ***including id***. **Returns** the new and improved `getById` object.||
| DEL  | /api/celeb/del/:id | remove       | Deleted celeb at that id.              | Returns 1 if successful.|||||||


## `getById` object example

```
{
	"id": 5,
	"celebname": "Freddy Heineken",
	"image_url": "https://specials-images.forbesimg.com/imageserve/5d8e22cc6de3150009a54b53/960x0.jpg",
	"factoid": "Dutch beer brewer (Heineken).",
	"birthyear": 1923,
	"alive": 0
}
```


# Users Table

| HTTP | Path               | Desc                                   | Data|
|-|-|-|-|
| POST | /api/auth/register | Gets the full list of all celebrities. | Expects `{username:"", password:"", email:""}`|
||||Returns `{ "id":##, "username":""}`|
| POST | /api/auth/login    | Gets the number of celebs in the DB.   |  Expects `{username:"", password:""}`|
|||Use `admin` flag to limit access to the form used for `create`/`update`/`delete` of celebs|Returns `{ "token":"", "id":"", "username":"", "email":"", "admin": [[true\|false]] }` |

---
*Tables made with https://www.tablesgenerator.com/markdown_tables#*
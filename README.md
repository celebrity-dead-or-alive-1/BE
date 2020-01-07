# BE


# `celebrity` Table

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
| PUT  | /api/celeb/        | change       | Edits an existing celeb. | **Expects** `getById` json object ***including id***. **Returns** an object: `{"status": ###, "success": [[1\|0]],"msg": "id# Update successful."}`.||
| DEL  | /api/celeb/del/:id | remove       | Deleted celeb at that id.              | Returns an object: `{"status": ###,    "success": [[1\|0]],    "msg": "DELETE successful."}`|||||||


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
---

# `users` Table

| HTTP | Path               | Desc                                   | Data|
|-|-|-|-|
| POST | /api/auth/register | Registers new user. | Expects `{"username":"", "password":"", "email":""}`|
||||Returns `{ "id":##, "username":""}`|
| POST | /api/auth/login    | Logs in a user.   |  Expects `{"username":"", "password":""}`|
||||Returns `loginObj` below.|
||||`create`/`update`/`delete` of celebs *must* have HTTP header `Authorization: <token>`|
||||Use `admin` flag to limit access to the form used for `create`/`update`/`delete` of celebs.|


## `loginObj` object example
```
{
	"token": "",
	"id": "",
	"username": "",
	"email": "",
	"admin": [[true | false]]
}
```
---

# `scores` Table

| HTTP | Path               | route method | Desc                                   | Data|
|-|-|-|-|-|
| GET  | /api/users/scores/:id| getAllScoresForUser  | Gets  all scores for a user. | Given an id in the path, returns an array of `score` objects including scores table id.|
| POST  | /api/users/scores   | setOneUserScore |  Saves one score.  | **Expects** `score` json object. **Returns** the db id.|
| GET  | /api/users/topten| getTopTen  | Gets ten highest scores. | Returns an array of `topten` objects.|

## `score` object example
```
{
	"score": 14,
	"user_id": 1,
	"time": 17
}
```

## `topten` object example
```
{
	"score": 17,
	"time": 42,
	"username": "Glibber"
},
```

---
*Tables made with https://www.tablesgenerator.com/markdown_tables#*
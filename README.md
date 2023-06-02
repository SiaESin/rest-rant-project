# Project REST-Rant
REST-Rant is an app where users can review restaurants.

Fill in the blanks! User stories are most often phrased as: "As a ____(user type)_____ I need ____(feature)____ so I can ____(action)____"

"As a student I need fast, healthy food so I can study."
"As a working mom I need healthy, yummy food so I can feed my kids quickly after work."
"As a single person I need a fun place so I can meet up for a date."

draw some wireframes. These can be electronic or on paper, complex or simple.

Choose a color scheme. It should include at least 3 colors: A primary color #17BEBB, a secondary color #EDB88B, and a highlight color #EF3E36 & #2E282A.

Method      |    Path     |      Purpose
------------------------------------------
GET         |       /     |     Home page

GET

/places

Places index page

POST

/places

Create new place

GET

/places/new

Form page for creating a new place

GET

/places/:id

Details about a particular place

PUT

/places/:id

Update a particular place

GET

/places/:id/edit

Form page for editing an existing place

DELETE

/places/:id

Delete a particular place

POST

/places/:id/rant

Create a rant (comment) about a particular place

DELETE

/places/:id/rant/:rantId

Delete a rant (comment) about a particular place

GET

*

404 page (matches any route not defined above)


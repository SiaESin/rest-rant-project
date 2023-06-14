# Project REST-Rant

☻ Part 1: Project setup, stub three routes, and creating a README file
☻ Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
☻ Part 3: Making more views, creating a layout page, and expanding your README
☻ Part 4: Adding some style with CSS
☻ Part 5: Forms, validation, and navigation
☻ Part 6: Implementing delete functionality and adding a DELETE route
☻ Part 7: Implementing edit form and functionality, adding a PUT route
☻ Part 8: Implementing the Mongoose ODM
→ Part 9: Seeding data, validations, and helper methods
Part 10: Adding commentary: rants and raves
Part 11: Populating data for star ratings
Part 12: Deploying your project
Here's an outline of the things we expect to accomplish during today's activity:

Make a seeder file to generate sample data.
Make a helper method on the place schema.
Make a validation for at least one field.


REST-Rant is an app where users can review restaurants.

Fill in the blanks! User stories are most often phrased as: "As a ____(user type)_____ I need ____(feature)____ so I can ____(action)____"

"As a student I need fast, healthy food so I can study."
"As a working mom I need healthy, yummy food so I can feed my kids quickly after work."
"As a single person I need a fun place so I can meet up for a date."

draw some wireframes. These can be electronic or on paper, complex or simple.

Choose a color scheme. It should include at least 3 colors: A primary color #17BEBB, a secondary color #EDB88B, and a highlight color #EF3E36 & #2E282A.

Method      |        Path               |      Purpose
------------------------------------------------------------------------------
GET         |       /                   |     Home page

GET         |   /places                 |     Places index page

POST        |   /places                 |     Create new place

GET         |   /places/new             |     Form page for creating a new place

GET         |   /places/:id             |     Details about a particular place

PUT         | /places/:id               |     Update a particular place

GET         | /places/:id/edit          |     Form page for editing an existing place

DELETE      |  /places/:id              |     Delete a particular place

POST        | /places/:id/rant          |     Create a rant (comment) about a particular place

DELETE      | /places/:id/rant/:rantId  |     Delete a rant (comment) about a particular place

GET         |           *               |     404 page (matches any route not defined above)


*Data*

Field Name    |    Data Type
------------------------------
name          |     string

city          |     string

state         |     string

Type of food  |     string

picture       |     string (a URL)
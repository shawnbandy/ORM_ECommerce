# ORM E-Commerce 

### Acceptance Criteria ✅
    1. MySQL username, password, and database name should be in a .env file
    2. Use Sequelize // Create a sequelize connection to MySQL
    3. Have a generic database and seed commands to create/drop database and seed the application 
    4. Server should start with node.js, and host on local machine
    5. API GET routes should be made for categories, products, or tags, with their results displayed as a .json
    6. API POST/PUT/DELETE routes should be able to create, update, and delete data respectively 

### Application Specifics
    1. 4 Models should be created: ✅
        A. Category
            i. ID
                a. Integer
                b. Doesn't allow null values
                c. Primary key
                d. Auto increments 
            ii. category_name
                a. String
                b. Doesn't allow null values
        B. Product 
            i. ID
                a. Integer
                b. Doesn't allow null values
                c. Primary key
                d. Auto increments 
            ii. product_name
                a. String
                b. Not null
            iii. price 
                a. Decimal
                b. Not null
                c. Validates value as a decimal 
            iv. stock
                a. Integer
                b. Not null
                c. Default value of 10
                d. Validates value is numeric 
            v. category_id
                a. Integer
                b. References category(id)
        C. Tag
            i. ID
                a. Integer
                b. Doesn't allow null values
                c. Primary key
                d. Auto increments 
            ii. tag_name
                a. String
        D. ProductTag
            i. ID
                a. Integer
                b. Doesn't allow null values
                c. Primary key
                d. Auto increments 
            ii. product_id
                a. Integer
                b. References product(id)
            iii. tag_id
                a. Integer
                b. References tag(id)
    2. Product belongs to category
    3. category has many product models
    4. product belongs to many tag models
    5. Tag belongs to many product models


### Application Description
ORM ECommerce is an application for ECommerce companies to keep track of different categories, tags, and products that a business may offer all using object relational mapper Sequelize for Node.js. Sequelize allows the user to use the ORM library built for Node.js to utilize MySQL in a friendly manner. After the database and tables are created/seeded, the user is able to view, create, update, and delete categories, tags, and products after launching the server. 

### To Use
    1. Create a .env folder with:
        A. DB_NAME='ecommerce_db'
        B. DB_USER='' //your MySQL username
        C. DB_PASSWORD='' //your MySQL Password
    2. Please run the schema.sql in the ../db folder using MySQL
    3. Please seed the database from the /Develop folder by using "node seeds/index.js"
    4. Start your server with "node server.js", "npm start", etc
    5. Open your REST client 
        A. Please use http://localhost:3001/api/ as the base for all of the requests
        B. For all GET routes please use 
            i. api/categories
            ii. api/tags
            iii. api/products
        C. For all POST routes please use the above routes with a JSON body such as
            i.  For tags and categories replace 'type' with its name
            {
                "type_name" : "nameHere"
            }
            ii. For Products use
            {
	            "product_name" : "namedProduct",
                "price" : "IntegerHere",
                "stock" : "IntegerHere",
                "category_id" : "IntegerHere",
                "tagIds": [IntegerHere, ...]
            }
        D. For all PUT routes, use
            i. /api/:type/:ID , where type is category, id, or tag, and ID is the ID number of object
            ii. Include a JSON body with updated parts such as (for category),s
            {
                "category_name": "UpdatedName"
            }
        E. For all DELETE routes, use
            i. /api/:type/:ID , where type is category, id, or tag, and ID is the ID number of object
            ii. Once you delete something, you cannot get it back!


            
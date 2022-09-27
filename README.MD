# ORM E-Commerce 

### Acceptance Criteria 
    1. MySQL username, password, and database name should be in a .env file
    2. Use Sequelize // Create a sequelize connection to MySQL
    3. Have a generic database and seed commands to create/drop database and seed the application 
    4. Server should start with node.js, and host on local machine
    5. API GET routes should be made for categories, products, or tags, with their results displayed as a .json
    6. API POST/PUT/DELETE routes should be able to create, update, and delete data respectively 

### Application Specifics
    1. 4 Models should be created:
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
    2. Product belongs to category and a category can have many product models
    3. Product belongs to tag models and tag belong to many product models 
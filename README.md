Create an angular application using angular-cli
●Create a component for Welcome screen which includes:
1. Greetings for the day ex. Good morning, your_name
2. Welcome message
3. Button -> Click Here(Onclick- Should redirect to product list page).
●
Create a component for Product List which includes:
1. Make an AJAX api call to fetch product list from JSON server
2. Table should contain product_id, name, category, price, stock_units
3. Should have button to add new product above the table, clicking on this button
redirect to add new product page
4. Clicking on the product from the table, should redirect to the details page where
the user can see all the details.
●
Create a component to Add New Product, it should have form which includes following
fields and should have validation on submit :
1. Product_id - it should be alphanumeric value
2. Name - maximum character length should be 30.
3. Category - should be static dropdown (Mobile, Laptop, T.V.,...., possible
electronic items)
4. Price - it should be float value(100.01rs)
5. serial/model number - it should be alphanumeric value
6. release_date - it should be past date
7. Stock_units - it should be numeric value
8. Description - maximum character length should be 150.
9. Should have back button to go back on list page
10. On successful submission should redirect to List page.
11. Pass product_id from route and read that value on details page to show full
details of product.
●
Create a component to display selected Product Details
1. Fetch product list and show only selected record
2. Product_id, Name, Category, Price, serial/model number, release_date,
Stock_units, Description
3. Should contain back button to go back on list page
●
Use of life cycle hooks●Use routing to redirect user from one page to another
●Must follow validation on form fields mentioned next to the field name.
●Use bootstrap using CDN for table, buttons and form design
●All are individuals component which are highlighted above

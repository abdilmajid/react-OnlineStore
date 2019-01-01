# **Store App**

> This is a Full Stack Application that uses React/Redux for the frontend, Node-Express and PostgreSQL for the backend

<p align="center">
  <a href="https://storeapp-frontend.herokuapp.com/"><img src="src/readme/store4.gif" alt="store4"/></a>
</p>

<br>

## Table of Contents
- [Synopsis](#Synopsis)
- [Tools Used](#tools-used)
- [Walkthrough ](#Walkthrough)

<br>


# **Synopsis**

This project is a simple ecommerce shop that allows visitors to select from a wide veriety of products. The users can add and remove items from thier cart, and when thier purchases are complete they enter thier name and email. This will then send them to an order page that shows thier purchases with thier total. 


# **Tools Used** 
>### ***Client Side***
<a href='https://www.npmjs.com/package/react'><img src="src/readme/ReactJS.png" alt="react-logo" height=50 align="center"/></a>
<a href='https://www.npmjs.com/package/redux'><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png" alt="redux-logo" height=50 align="center"/></a>
<a href='https://github.com/lukehoban/es6features'><img src="src/readme/es6.jpeg" alt="es6-logo" height=30 align="center"/></a>
<a href='https://www.npmjs.com/package/redux-form'><img src="https://raw.githubusercontent.com/erikras/redux-form/master/logo.png" alt="redux-form" height=30 align="center"/>(Redux-Form)</a>
<a href='https://www.npmjs.com/package/react-router'><img src="src/readme/react router.jpg" alt="react-router" height=45 align="center"/></a>
<a href='https://getbootstrap.com/'><img src="src/readme/Bootstrap-Logo.png" alt="bootstrap-logo" height=50 align="center"/></a>


>### ***Server Side***
<a href='https://nodejs.org/en/'><img src="src/readme/nodejs-logo.png" alt="node" height=50 align="center"/></a>
<a href='https://www.npmjs.com/package/express'>
<img src="src/readme/express-facebook-share.png" alt="Express" height=35 align="center"/></a>
<a href='https://www.npmjs.com/package/pg'>
<img src="src/readme/favicon.png" alt="node-postgres" height=20 align="center"/> (Node-Postgres) </a>

>### ***Database***
<a href='https://www.postgresql.org/'>
<img src="src/readme/Node_js_database_example_PostgreSQL_1461672928728-1466683645768.png" alt="postgres" height=60 align="center"/></a>
<a href='https://www.postgresql.org/'>
<img src="src/readme/pgAdminLogo.png" alt="postgres" height=50 align="center"/></a>
<br>

>### ***Other Tools***
<a href='https://www.heroku.com/'>
<img src="src/readme/logo-square-heroku.png" alt="Heroku" height=80 align="center"/></a>
<a href='https://www.npmjs.com/'>
<img src="src/readme/1280px-Npm-logo.svg.png" alt="npm" height=25 align="center"/></a>
<a href='https://git-scm.com/'>
<img src="src/readme/1_QoR3rxWIbnf5wmF_IuAHqQ.png" alt="git" height=30 align="center"/></a>
<a href='https://github.com/'>
<img src="src/readme/github-logo.png" alt="github-logo" height=40 align="center"/></a>
<br>
<br>


# **Walkthrough**

:star: When a user enters the app they see a list of all available products.

<p align="center">
<img src="src/readme/01HomePage.png" alt="homepage" height=540 align="center"/></p>
<br>

:star: Here they can add or remove different items. They can also expand the ***See item details*** button for summary info on the selected item. When an item is added or removed from the cart the cart button changes to reflect the current state of the cart.

<p align="center">
<img src="src/readme/incrementing cart.png" alt="homepage" height=300 align="center"/></p>
<br>

:star: After items are selected and the ***Go to cart*** button is selected, a list of all items are displayed. The table includes items selected, quantity of the selected items and the price of the given items. This page also includes the total price of cart. 

<p align="center">
<img src="src/readme/CartPage.png" alt="homepage" height=250 align="center"/></p>
<br>

:star: From this page you can increase or decrease the quantity of a given item, or remove the item from the cart. These changes are reflected in the quantity section of the table aswell as the total price of the cart. If the user wanted to add other items to the cart they would click back add those items. The state of the cart only changes when items are added or removed. If additional items are added to the cart the table and the total cart price would reflect those changes. 

<p align="center">
<img src="src/readme/CartPage2.png" alt="homepage" height=250 align="center"/></p>
<br>

:star: After the user is complete they would click the ***Check-Out*** button. The checkout page asks for the users Name and Email.

<p align="center">
<img src="src/readme/Checkout.png" alt="homepage" height=350 align="center"/></p>
<br>

:star: **Redux-forms** is used to collect all this information to be sent to the server. **Node** and **Express** are used to handle all http requests. I use  **Node-Postgres** to connect to the **PostgreSQL** database. 

:star: So the form is sent to the server which inserts that information to the database.

<p align="center">
<img src="src/readme/pgAdmin.png" alt="homepage" height=130 align="center"/></p>
<br>

:star: The server then queries the database for specific data which the frontend will use.

<p align="center">
<img src="src/readme/api.png" alt="homepage" height=450 align="center"/></p>
<br>

:star: I Use the above info to construct the Order page. When the user is in the order page, their name and contact info appears, as well as the items purchased (including the total cost of each individual item). The ***Cart*** button is reset to zero as well.

<p align="center">
<img src="src/readme/OrderPage.png" alt="homepage" height=300 align="center"/></p>
<br>


> The application also uses local storage for state persistence. So if the user accidentally leaves/refreshes the page their data is not erased. This also has the added benefit of not having to reload all the assets if the app has been visited already 

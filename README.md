# ECommerce Web React JS : https://pepor-ecomerce.vercel.app/

#  Feature

- Generate product card using data in redux.
- Add and Remove product in shopping cart and calculate product price in shopping cart.
- Add and Remove product in wish list , It will store the wish list in local storage. It won't disappear until you remove it.
- There is a login and register page. but still not working because redux is not connected yet.

## Tool
- React JS
- Redux , redux-persist
- bootstrap 4

## Installation

 - Clone the repo in your terminal by clicking the  _green_  clone or download button at the top right and copy in 	the URL
 - In your terminal, type `git clone URL`
	  -   replace URL with the URL you copied
		- enter
-  This will copy all the files from this repo down to your computer
-   In your terminal, cd into the directory you just created
-   Type  `npm install`  to install all dependencies
-   Set local storage to use wish list feature
	- paste URL in your browser `http://localhost:3000/`
	- Please `F12 >> Console` paste code  `localStorage.setItem('Ecommerce_wishList' , '001|003|004')` in console. Please enter.
-    Last, but not least, type  `npm start`  to run the app locally.


## Folder Structure

```
$ my_app
.
├── node_modules
├── public
├── src
│   ├── app
|		├── store.js
│   ├── component
|		├── auth
|			├── Login.js
|			├── Register.js
|		├── detail
|			├── Dashboard.js
|			├── ProductDetail.js
|			├── ProductList.js
|			├── ShoppingCart.js
|			├── WishList.js
|		├── Common.js
|		├── Layout.js
|		├── MenuBar.js
|		├── NavMenu.js
|		├── PrivateRoute.js
|		├── SubLayout.js
│   └── reducer
|		├── ProductReducer.js
|		├── ShopingCartReducer.js
|		├── WishListReducer.js
│   └── store
|		├── ProductContainer.js
|		├── ShopingContainer.js
|		├── WishListContainer.js
│   └── App.css
│   └── App.js
│   └── App.test.js
│   └── index.css
│   └── index.js
│   └── .gitignore
│   └── package-lock.json
│   └── package.json
├── file_in_root.ext
└── README.md
``
```
thanks for the opportunity Hope to be considered. Thank you.

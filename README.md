# easesmith-assignmet

## Project Overview

This project build a simple UI for an E-commerce Listing Page.The UI display a list of products, and each product have an option to either view the product, add product to the cart or remove product from the cart.

It is built using React.js and includes modern features like hooks for state management, React Router to manage navigation between the pages. This project uses mock data which is maintained in `mock.json` file.

## Features

- Add product to cart
- Remove product from cart
- View product details
- Local storage for cart item count persistence

## Tech Stack

**Frontend:**

- React.js (with hooks)
- React Router
- CSS Modules
- React icons

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** version 16.x or higher
- **npm** installed globally on your machine

To check if Node.js and npm are installed, run:

```bash
node -v
npm -v
```

If not installed, download and install from the [official Node.js website](https://nodejs.org/).

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Byuti-singh/easesmith-assignmet.git
cd easesmith-assignmet
```

2. **Install dependencies**:

```bash
npm install
npm install react-icons --save
npm install react-router-dom@5
```

## Running the Application

1. **Start the development server**:

```bash
npm start
```

2. **Open the app in your browser**:

Once the server starts, open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Functionality / Additional Information

- `Add to cart` button added with each product in product list section on home page. It has two buttons `+` and `-`. `+` is for adding item in cart and `-` is for removing item from cart.
- After clicking `+` or `-` button, a modal will pop-up with product information, with two buttons `confirm` and `cancel` asking for user action.
- After clicking on `confirm` button, item will either be added to cart or removed from the cart depending on the trigger button i.e. `+` or `-`.
- Cart item count is shown as a badge on cart icon. If cart is empty then badge will not be visible. If cart is not empty then badge will show a number, representing number of items present in cart. 

**Note:** If badge is not visible on cart icon even items are present in cart, then kindly refresh the page. It should be visible after refresh.

- `componentization` is used in the project and given single functionality to each compoenent.
- `localStorage` is used for cart item count persistence.
- Mock data is created for`Nursery` and `Products` and maintained in `mock.json` file.
- All images of Nursery and Products are stored in `public` folder.
- Logo and search image also stored in `public` folder.
- `React icon` is used to show icons in the project.
- After clicking on `view product` button, user will navigate to customized `Thank You` page. `React Router` is used to navigate between the pages.
- `Thank You` page is have product information and greeting message for user. `Continue Shopping` button is also added on `Thank You` page. When user click on `Continue Shopping` button, user will navigated to home page.
- `React Hooks` like `useSate` and `useEffect` is used to maintain the state.
- `Pagination` is used to show the list of products on home page.

### Developed By
[Byuti Singh](https://github.com/Byuti-singh)

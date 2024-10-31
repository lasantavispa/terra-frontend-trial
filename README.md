# Responsive Page Project - Technical Test for Terra Frontend Position

## Overview
This project is a responsive web page developed as a technical test for a Frontend position at Terra. The page is built with **React** using **Vite** as the development environment. 

## Requirements
- Connection to the REST API to fetch content and images.
- Use `localStorage` to handle the design state across consecutive page visits.
- Compatibility with desktop, tablet, and mobile devices.

## Features
- **Responsive Design:** The page adapts to desktop, tablet, and mobile devices.
- **Dropdown Menu:** A dropdown menu is available in the mobile and tablet versions for easy navigation.
- **Button Hover Interaction:** Implement a hover effect on the button, following the reference provided. Hover color should be `#F78BD8`.
- **Fonts:** The fonts used are:
  - **Red Hat Display** (available on Google Fonts)
  - **Work Sans** (available on Google Fonts)
  
- **REST API for Content and Images:** All content and images displayed on the page are sourced from a REST API (make sure to connect to it correctly to fetch these assets).

- **Display State Management:**
  - On the first visit, the page should display the design as shown on the left side (initial state).
  - On the second visit, only the button and the title should change its design. `LocalStorage` is used to manage this display state.

- **Story Component Route:** A dedicated route exists for the story component, allowing users to navigate directly to it.

## Installation and Execution
1. Clone this repository.
   git clone https://github.com/lasantavispa/terra-frontend-trial.git

2. Install dependences
    npm install

3. Start the project
    npm run dev

## Author
Ángela Ávila Lasanta
angela.avilasanta@gmail.com

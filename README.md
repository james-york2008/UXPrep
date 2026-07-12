# UXPrep 
[Live Page](https://james-york2008.github.io/UXPrep/)

![Image of the Neon Reel landing page on desktop](./src/assets/readmeImages/desktopUxPrep.png)
![Image of the Neon Reel landing page on mobile](./src/assets/readmeImages/mobileUxPrep.jpg)


## Run Locally:

1. **Clone the repository:**
```bash
git clone https://github.com/james-york2008/UXPrep
cd UXPrep
```


2. **Install dependencies:**
```bash
npm install
```


3. **Start the development server:**
```bash
npm run dev
```


4. **View the app:**
Open your browser and navigate to `http://localhost:5173`


## Overview:

UXPrep is a data-driven quiz application designed to help users prepare for Frontend Web Development (FEWD) interviews. The platform provides quizzes across multiple frontend topics and dynamically renders questions using TypeScript data. This project was originally built using vanilla JavaScript and later rewritten using React and TypeScript to improve maintainability.


## Features:

- **Multiple Quizzes:** Covers diverse frontend development topics
- **Dynamic Rendering:** Generates questions from TypeScript data using URL parameters
- **Modern Routing:** Built with React Router for seamless navigation
- **Scoped Styling:** Uses CSS modules to prevent style bleeding when necessary
- **Responsive Design:** Fully accessible and mobile friendly



## Tech Stack:

- **Framework:** React
- **Language:** TypeScript
- **Routing:** React Router
- **Styling:** CSS Modules and global files
- **Build Tool:** Vite


## Challenges Faced and Lessons Learned:

### Migrating from Vanilla JavaScript to React
The largest challenge was rethinking application architecture and logic. During migration, I had to rework the quiz submission logic and convert static sections into self-contained components.


### Dynamic Content Rendering
To improve scalability, quiz cards on the landing page are rendered dynamically rather than being hardcoded. The application dynamically renders quizzes from JSON data in order to support any number of questions or answers without changes to the UI components. Originally it rendered TypeScript data, but that was replaced to separate logic from data and to simplify scalability.


### Understanding React Rendering
While implementing quiz submission logic, I initially attempted using `useRef` to avoid what I assumed would be excessive re-renders. Through the process, I gained a deeper understanding of React's rendering model and learned that state updates are batched together into a single re-render for better performance.


### Accessibility Improvements
**Color Contrast:** 
- Improved contrast within the mobile navigation menu to meet accessibility standards
- Reviewed existing styling choices to ensure text remained readable across different screen sizes

**Layout:**
- Improved component organization to create clearer content structure
- Ensured quiz content scales appropriately across desktop and mobile layouts

**Program Quality and Maintainability:**
- Separated application logic from quiz data to improve maintainability
- Converted static sections into reusable React components
- Used CSS Modules where appropriate to prevent style conflicts



### Code Quality
- Switched unnecessary `let` variable declarations for `const`
- Redesigned the rendering logic to remove illegal render-phase side effects
- Used local inline calculations as opposed to render-phase side effects
- Replaced an unnecessary `useState` hook with a block scoped constant


## Potential Future Improvements: 

- Detailed answer explanations after quiz submission
- Timer-based quiz modes
- Expanded question database
- Difficulty section for quizzes
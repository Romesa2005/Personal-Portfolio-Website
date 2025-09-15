// Import the main SCSS file for styling
import './App.scss';

// Import routing components from react-router-dom
import { Routes, Route } from 'react-router-dom'

// Import your custom components
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      {/* Define the routes for the application */}
      <Routes>
        {/* The main layout route wraps all nested routes */}
        <Route path="/" element={<Layout  />}>
          {/* Index route corresponds to the homepage */}
          <Route index element={<Home />} />
          {/* Route for the About page */}
          <Route path="about" element={<About />} />
          {/* Route for the Contact page */}
          <Route path="contact" element={<Contact />} />
          {/* Route for the Portfolio page */}
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

// Export the App component as the default export
export default App;

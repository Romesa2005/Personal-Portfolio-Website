// Import Sidebar component
import Sidebar from '../Sidebar';
// Import SCSS for styling
import './index.scss';
// Import Outlet to render nested routes
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      {/* Sidebar navigation component */}
      <Sidebar />

      {/* Main page content */}
      <div className="page">
        {/* Top HTML-like tag for styling */}
        <span className="tags top-tags">&lt;body&gt;</span>

        {/* Render the nested route components here */}
        <Outlet />

        {/* Bottom HTML-like tags for styling */}
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

// Export Layout component as default
export default Layout;

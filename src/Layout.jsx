import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footers from './components/Footers.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footers />
    </>
  );
}

export default Layout;

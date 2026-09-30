import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './Nav';
import "../assets/styles/home.scss";

// The page frame, mounted once. Pages used to render their own Nav, so every
// route change remounted it: the whole shell faded in again and the nav
// landed at a different x on each page. Now only the content column changes.
export const Shell = () => {
  const { pathname } = useLocation();

  // The document scrolls now, not a panel, so a new route would otherwise
  // open at the previous page's scroll depth.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  );
};

import track from 'lib/utils/track';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    void track('page-opened', {
      pathname: location.pathname,
      state: location.state,
    });
  }, [location]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;

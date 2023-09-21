import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import track from '../../lib/utils/track';
const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    void track('page-opened', {
      pathname: location.pathname,
      state: location.state,
    });
  }, [location]);

  return (
    <div className="flex h-screen flex-col overflow-auto bg-slate-950 px-10 text-slate-50">
      <Outlet />
    </div>
  );
};

export default Layout;

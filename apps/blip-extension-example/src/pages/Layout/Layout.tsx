import { useMantineTheme } from '@mantine/core';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import track from '../../lib/utils/track';

const Layout = () => {
  const location = useLocation();
  const theme = useMantineTheme();

  useEffect(() => {
    void track('page-opened', {
      pathname: location.pathname,
      state: location.state,
    });
  }, [location]);

  return (
    <div
      className="flex h-screen flex-col overflow-auto px-10"
      style={{
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[0],
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;

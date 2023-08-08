import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import NavBar from 'components/NavBar/NavBar';

export const SharedLayout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

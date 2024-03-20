// import Outlet, Outlet component allows swapping between diff pgs based on URL
import { Outlet } from 'react-router-dom';
import NavMenu from './components/NavMenu';


function App() {
  return (
    <>
    <NavMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

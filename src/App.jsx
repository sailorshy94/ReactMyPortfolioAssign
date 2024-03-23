// import Outlet, Outlet component allows swapping between diff pgs based on URL
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

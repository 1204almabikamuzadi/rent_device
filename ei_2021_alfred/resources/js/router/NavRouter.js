import {Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/home/Footer';
const NavRoute = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
      <div>
        <Navbar/>
        <Component {...props}/>
        <Footer/>
      </div>
    )}/>
  );
  export default NavRoute;
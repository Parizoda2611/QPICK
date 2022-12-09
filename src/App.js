import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Product} />
        <Route exact path='/products/:id' component={ProductDetail} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Redirect path='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

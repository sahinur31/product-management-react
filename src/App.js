import './components/Boootstrap/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import AddProducts from './components/AddProducts/AddProducts';
import UpdateProducts from './components/UpdateProducts/UpdateProducts';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/products/add">
            <AddProducts></AddProducts>
          </Route>
          <Route exact path="/products/update/:id">
            <UpdateProducts></UpdateProducts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

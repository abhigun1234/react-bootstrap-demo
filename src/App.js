import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Card from 'react-bootstrap/Card';
import Matrial from './Matrial';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Plist from './Plist';
function App() {
  return (
    <div className="App">
 
    {/* <Header title="offers"></Header>
    <ProductList description="fancy "></ProductList> */}
    {/* <ProductDetails></ProductDetails> */}
    <Plist description="fancy "></Plist>
    </div>
  );
}

export default App;

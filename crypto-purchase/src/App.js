import React from "react";
import "./App.css";
import CryptoCard from "./components/CryptoCard";
import Cart from "./components/Cart";

const data = [
  { currency: "Bitcoin", price: 40000 },
  { currency: "Ethereum", price: 3600 },
  { currency: "Litecoin", price: 340 },
];

function App() {

  const [cartData, setCartData] = React.useState([]);
console.log(cartData)
  return (
    <div className="App">
      <h1 className="heading">Crypto Purchasing Portal</h1>
      <div className="currencyCardContainer">
        {data &&
          data.map((el) => {
            return (
              <CryptoCard
                key={el.currency}
                currency={el.currency}
                price={el.price}
                cartData = {cartData}
                setData = {setCartData}
              />
            );
          })}
      </div>
      <hr style={{width:"60%", margin:"20px auto"}}/>
      <Cart cartData={cartData}/>
    </div>
  );
}

export default App;

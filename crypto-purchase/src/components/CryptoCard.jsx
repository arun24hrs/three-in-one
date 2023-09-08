import React from "react";
import "../App.css";
const CryptoCard = ({ currency, price, setData, cartData }) => {
  const [visible, setVisible] = React.useState(false);
  const [quantity, setQuantity] = React.useState(null);

  const handleQuantity = () => {
    setVisible(!visible);
  };
  const handleQuantityChange = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };
  const handleBuy = () => {
    if (!quantity) {
      window.alert(`Please enter a quantity`);
    } else {
        let total = +price * +quantity
      setData([...cartData, { currency, price, total }])
    }
  };

  return (
    <div>
      <div className="currencyCard">
        <h3>{currency}</h3>
        <p>${price}</p>
      </div>
      <div className="actionsContainer">
        <button onClick={handleQuantity}>Quantity</button>
        <button onClick={handleBuy}>Buy</button>
        <input
          onChange={(e) => handleQuantityChange(e)}
          style={{ display: visible ? "block" : "none" }}
          type="number"
          placeholder="Enter quantity"
        />
      </div>
    </div>
  );
};

export default CryptoCard;

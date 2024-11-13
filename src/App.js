import React, { useState } from "react";

function App() {
  const items = [
    { id: 1, name: "T-shirt", price: 20, onSale: true },
    { id: 2, name: "Jeans", price: 50, onSale: false },
    { id: 3, name: "Socks", price: 5, onSale: true },
    { id: 4, name: "Hat", price: 15, onSale: false },
    { id: 5, name: "Shoes", price: 65, onSale: true },
  ];

  const [onSale, setOnSale] = useState(items); //items that are on sale
  const [show, setShow] = useState(false); //whether show on sale is true or false
  // change show state by true and false and then filter items based on true or false
  const handleFilter = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (show === true) {
      setOnSale(onSale.filter((item) => item.onSale === true));
    } else {
      setOnSale(items);
    }
  };

  const handlefFilter = () => {};

  return (
    <div className="container pt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleFilter}
      >
        {show ? "Show Items That Are On Sale" : "Show All Items"}
      </button>
      <ul className="list-group d-flex mt-3">
        {onSale.map((item) => {
          const { id, name, price, onSale } = item;
          return (
            <div>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3 mt-2">
                <div className="d-flex">
                  <h2 className="fw-bold">{name}</h2>
                  {onSale === true ? (
                    <button className="btn btn-small btn-danger ms-4">
                      On Sale!
                    </button>
                  ) : null}
                </div>
                <h2>${price}</h2>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

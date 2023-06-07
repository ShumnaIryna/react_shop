import { useState, useEffect } from "react";
import { API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Basket } from "./Basket";
import { BasketList } from "./BasketList";

//const API_KEY = process.env.REACT_APP_API_KEY;

const API_KEY = `548fddbc-b16a4210-9bb19577-b682b006`;

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId)
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      // method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Basket quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} />}
    </main>
  );
}

export { Shop };

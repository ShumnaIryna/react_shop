import { useState, useEffect } from "react";
import { API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Basket } from "./Basket";

//const API_KEY = process.env.REACT_APP_API_KEY;

const API_KEY = `548fddbc-b16a4210-9bb19577-b682b006`;

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

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
      <Basket quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}

export { Shop };

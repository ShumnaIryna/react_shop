import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">The basket is empty</li>
      )}
      <li className="collection-item active">
        Total price: {totalPrice} usd
      </li>
      <li className="collection-item">
        <button className="btn-small">
          BUY
        </button>
      </li>
      <li className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </li>
    </ul>
  );
}

export { BasketList };

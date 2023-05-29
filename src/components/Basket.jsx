function Basket(props) {
  const { quantity = 0 } = props;
  return (
    <div className="basket #6d4c41 brown darken-1 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="quantity">{quantity}</span> : null}
    </div>
  );
}

export { Basket };

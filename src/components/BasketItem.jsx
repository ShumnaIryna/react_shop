function BasketItem(props) {
  const { id, name, price, quantity } = props;

  return (
    <li className="collection-item active">
      {name} x {quantity} = {price}
      <span class="secondary-content">
        <i class="material-icons">send</i>
      </span>
    </li>
  );
}

export { BasketItem };

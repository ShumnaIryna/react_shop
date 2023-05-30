function BasketList(props) {
  const { order } = props;

  return (
    <ul className="collection">
      <li className="collection-item active">
        Basket
      </li>
      <li className="collection-item active">
        Total price:
      </li>
    </ul>
  );
}

export { BasketList };

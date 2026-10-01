function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  totalPrice,
}) {
  return (
    <div className="cart">
      <h2>🛒 장바구니</h2>

      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {(item.price * item.quantity).toLocaleString()}원
                </p>
              </div>

              <div className="quantity">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h2>
            총 금액: {totalPrice.toLocaleString()}원
          </h2>

          <button className="order-button">
            주문하기
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
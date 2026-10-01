import { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // 장바구니에 음식 추가
  const addToCart = (food) => {
    const existingFood = cart.find((item) => item.id === food.id);

    if (existingFood) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  // 수량 증가
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 수량 감소
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 총 금액
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">
      <h1>🍽️ 맛있는 한끼</h1>

      <div className="container">
        <Menu addToCart={addToCart} />

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default App;
const menu = [
  {
    id: 1,
    name: "🍕 페퍼로니 피자",
    price: 12000,
  },
  {
    id: 2,
    name: "🍔 치즈버거",
    price: 8000,
  },
  {
    id: 3,
    name: "🍗 후라이드 치킨",
    price: 15000,
  },
  {
    id: 4,
    name: "🍝 토마토 파스타",
    price: 10000,
  },
];

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h2>메뉴</h2>

      {menu.map((food) => (
        <div className="food" key={food.id}>
          <div>
            <h3>{food.name}</h3>
            <p>{food.price.toLocaleString()}원</p>
          </div>

          <button onClick={() => addToCart(food)}>
            담기
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => (
        <li style={{ backgroundColor: ingredient.color }} key={idx}>
          {ingredient.name}
          <button onClick={() => props.removeItem(ingredient)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;

// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length !== 0 ? (
        props.ingredients.map((ingredient, idx) => (
          <li style={{ backgroundColor: ingredient.color }} key={idx}>
            {ingredient.name}
            <button onClick={() => props.removeItem(ingredient)}>-</button>
          </li>
        ))
      ) : (
        <p>no ingredient</p>
      )}
    </ul>
  );
};

export default BurgerStack;

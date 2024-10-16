// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const handleClick = (event) => {
    props.removeItem();
  };

  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => (
        <li style={{ backgroundColor: ingredient.color }} key={idx}>
          <button onClick={handleClick}> {ingredient.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;

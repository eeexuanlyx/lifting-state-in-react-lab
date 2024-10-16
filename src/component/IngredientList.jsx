// src/components/IngredientList.jsx
const IngredientList = (props) => {
  return (
    <>
      <ul>
        {props.ingredients.map((ingredient, idx) => (
          <li style={{ backgroundColor: ingredient.color }} key={idx}>
            {ingredient.name}
            <button onClick={() => props.addItem(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

// src/components/IngredientList.jsx
const IngredientList = (props) => {
  const handleClick = (event) => {
    props.addItem();
  };

  return (
    <>
      <ul>
        {props.ingredients.map((ingredient, idx) => (
          <li style={{ backgroundColor: ingredient.color }} key={idx}>
            <button onClick={handleClick}> {ingredient.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

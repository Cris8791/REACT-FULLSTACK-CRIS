import PropTypes from "prop-types";

const Menu = ({ items }) => {
  return (
    <ul>
      {/* si asta e o varianta valabila, dar ineficienta, daca avem multe obiecte intr-un array
       <li>{items[0].name}</li>
      <li>{items[1].name}</li>
      <li>{items[2].name}</li> */}

      {items.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;

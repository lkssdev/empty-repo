import "./ItemCard.css"

const ItemCard = ({ img, name, price }) => {
    return (
      <div className="item-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
      </div>
    );
  };
  
  export default ItemCard;
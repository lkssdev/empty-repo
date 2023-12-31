import ItemCard from '../ItemCard/ItemCard'; 
import "./ItemListContainer.css"

import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const items = [
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    { img: "../../../public/favicon.png", name: 'Item 1', price: 10 },
    
  
  ];


  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Link key={index} className='li' to={`item/${index}`}>
          <ItemCard item={item} img={item.img} name={item.name} price={item.price} />
        </Link>
      ))}
    </div>
  );
};

export default ItemListContainer;
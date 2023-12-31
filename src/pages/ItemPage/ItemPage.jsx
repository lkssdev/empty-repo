import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";

import ItemCard from "../../components/ItemCard/ItemCard";
import axios from "axios";

const ItemPage = () => {
  const [item, setItem] = useState({});
  let {id} = useParams;

  useEffect (() => {
    axios(`../components/ItemListContainer/ItemlistContainer/${id}`).then((json) =>
    setItem(json.data)
    );
  }, [id]);

  return (
    <div>
      <h2>Detalle del ítem</h2>
      {item.id ? <ItemCard item={item} /> : null}
    </div>
    
  );
};

export default ItemPage;
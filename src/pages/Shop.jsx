import React, { useState } from "react";
import SHOP_DATA from "../shopData";

import Collection from "../components/Collection";
const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <Collection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;

import React from "react";
import CollectionPreview from "./CollectionPreview";

const CollectionsPreview = (props) => {
  const { products } = props;

  const collectionsArr = Object.keys(products).map((key) => {
    return products[key];
  });

  return (
    <>
      {collectionsArr.map((collection) => {
        return (
          <CollectionPreview
            key={collection.title}
            collection={collection}
          />
        );
      })}
    </>
  );
};

export default CollectionsPreview;

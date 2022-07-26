import React from "react";
import CollectionsDirectoryItem from "./CollectionsDirectoryItem";

const collectionsArr = [
  {
    id: 1,
    name: "Clothing",
    img: "/assets/collections/clothing.jpg",
  },
  {
    id: 2,
    name: "Caps",
    img: "/assets/collections/caps.jpg",
  },
  {
    id: 3,
    name: "Bags",
    img: "/assets/collections/bags.jpg",
  },
  {
    id: 4,
    name: "Watches",
    img: "/assets/collections/watches.jpg",
  },
  {
    id: 5,
    name: "Shoes",
    img: "/assets/collections/shoes.jpg",
  },
];

const CollectionsDirectory = () => {
  return (
    <section
      className="collections container mx-auto p-3 py-6"
      id="collections"
    >
      <h2 className="section-title">Collections</h2>
      <div className="collection-list flex flex-wrap justify-center">
        {collectionsArr.map((collection) => (
          <CollectionsDirectoryItem
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>
    </section>
  );
};

export default CollectionsDirectory;

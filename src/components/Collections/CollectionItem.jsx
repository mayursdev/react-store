import React from "react";

const CollectionItem = (props) => {
  const { collection } = props;

  return (
    <div className="collection-card-wrapper p-3 w-1/2 md:w-1/3 lg:w-1/4">
      <div className="collection-card border border-black relative group overflow-hidden shadow">
        <a href={`/shop/${collection.name.toLowerCase()}`}>
          <img
            src={collection.img}
            alt={collection.name}
            className="collection-img w-full group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
          />
          <button className="bg-white px-4 py-1 border border-black font-semibold absolute bottom-8 left-1/2 translate-x-[-50%] transition-all hover:bg-slate-800 hover:text-white sm:py-2 sm:px-16">
            {collection.name}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;

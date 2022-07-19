import React from "react";

const CollectionItem = (props) => {
  const { collection } = props;

  return (
    <div className="collection-card-wrapper p-3 w-1/2 md:w-1/3 lg:w-1/4">
      <div className="collection-card border-2 border-slate-800 relative">
        <a href={`/shop/${collection.name.toLowerCase()}`}>
          <img
            src={collection.img}
            alt={collection.name}
            className="collection-img w-full"
          />
          <button className="bg-white px-4 py-1 border border-slate-800 font-semibold absolute bottom-8 left-1/2 translate-x-[-50%] hover:bg-slate-800 hover:text-white sm:py-2 sm:px-16">
            {collection.name}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;

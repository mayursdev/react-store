import React, { createContext, useState } from "react";

const UsersContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UsersProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

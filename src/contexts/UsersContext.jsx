import React, { createContext, useEffect, useState } from "react";
import { onAuthChange } from "../utils/firebase";

const UsersContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UsersProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

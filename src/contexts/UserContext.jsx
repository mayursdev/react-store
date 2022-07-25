import React, { createContext, useEffect, useState } from "react";
import { onAuthChange } from "../utils/firebase";

const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserProvider = (props) => {
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
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

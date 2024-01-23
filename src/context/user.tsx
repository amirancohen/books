import React, { createContext, useContext, ReactNode, useState } from "react";

type User = {
  isAdmin: boolean;
  email: string | null;
  userId: string | null;
  setUser: Function;
  removeUser: Function;
  isLogedIn: Function;
};

const UserContext = createContext<User | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const setUser = (user: User) => {
    setIsAdmin(user.isAdmin);
    setEmail(user.email);
    setUserId(user.userId);
  };

  const removeUser = (user: User) => {
    setIsAdmin(false);
    setEmail(null);
    setUserId(null);
  };

  const isLogedIn = (): boolean => !!email && !!userId;
  return (
    <UserContext.Provider
      value={{
        isAdmin,
        email,
        userId,
        setUser,
        removeUser,
        isLogedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserData = () => useContext(UserContext);

export { useUserData, UserProvider };

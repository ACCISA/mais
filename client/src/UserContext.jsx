import { createContext, useState } from "react";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(false);
  const [root, setRoot] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, active, setActive}}
    >
      {children}
    </UserContext.Provider>
  );
}
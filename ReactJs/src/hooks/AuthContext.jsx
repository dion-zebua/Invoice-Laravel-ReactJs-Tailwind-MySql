import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

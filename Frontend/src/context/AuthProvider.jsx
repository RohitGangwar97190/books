// import React, { createContext, useContext, useState } from "react";
// import { useEffect } from "react";
// export const AuthContext = createContext();
  
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("user");

//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) :null
//   );

 
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser ]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
//  export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Retrieve the user data from localStorage
  const initialAuthUser = localStorage.getItem("user");
  let parsedUser = null;

  // Safely parse the JSON only if it's a valid string
  if (initialAuthUser) {
    try {
      parsedUser = JSON.parse(initialAuthUser);
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      parsedUser = null; // fallback to null if parsing fails
    }
  }

  // Initialize the authUser state
  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);



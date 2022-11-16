import React, { useState, useEffect } from "react";
import Landing from "./Landing";

interface RequireAuthProps {
  children: any;
}

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({
  children,
}: RequireAuthProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = window.localStorage.getItem("jwtToken");
    token && token?.length > 0
      ? setIsUserLoggedIn(true)
      : setIsUserLoggedIn(false);
  }, []);

  if (!isUserLoggedIn) {
    return <Landing isUserLoggedIn={isUserLoggedIn}/>;
  }
  return children;
};

export default RequireAuth;

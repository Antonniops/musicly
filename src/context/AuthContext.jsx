import React, { createContext, useEffect, useState } from "react";

const authParams = {
  token: "",
};

export const AuthContext = createContext(authParams);

export const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState('')

  async function getToken() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    let response = await fetch(
      "https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=71b00de8b16e41f0b354ac83fab0df82&client_secret=fb16c377f2664f25b16da4f521f2a9e9",
      requestOptions
    );

    response = await response.json();

    await setToken(response.access_token)

    return await token
  }

  return (
    <AuthContext.Provider value={{ token, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

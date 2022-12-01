import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [username, setUsername] = useState("Onii-chan");
  const [email, setEmail] = useState("kawaii@moe.com");
  const [password, setPassword] = useState("onichichi");

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });
  //import hooks to use in different files
  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        username,
        email,
        password,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        setUsername,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

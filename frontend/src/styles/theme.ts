import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bg: "#ffffff",
  textPrimary: "#1A1A1A",
  text: "#555555",

  buttonBg: "#d8d8d8ff",
  buttonText: "#000000",

  navBg: "#E0E0E0",

  border: "#d0d7de",
  inputBg: "#f9fafb",

  placeholder: "#9ca3af",
  inputFocusBg: "#fff",

  primary: "#3b82f6",
  primaryShadow: "rgba(59, 130, 246, 0.3)",

  bgOverlay: "rgba(255, 255, 255, 0.6)",

};

export const darkTheme: DefaultTheme = {
  bg: "#0D1117",
  textPrimary: "#E6E6E6",
  text: "#A0A0A0",

  buttonBg: "#1F242B",
  buttonText: "#FFFFFF",

  navBg: "#161B22",

  border: "#30363D",
  inputBg: "#1A1F24",

  placeholder: "#6B7280",
  inputFocusBg: "#0D1117",

  primary: "#3b82f6",
  primaryShadow: "rgba(59, 130, 246, 0.5)",

  bgOverlay: "rgba(0, 0, 0, 0.45)",
}
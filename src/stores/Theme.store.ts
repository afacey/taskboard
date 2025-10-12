import { create } from "zustand";

export type ThemeState = "light" | "dark";

export const useTheme = create<ThemeState>()(() => "light");

export const toggleTheme = () =>
  useTheme.setState((theme) => (theme === "dark" ? "light" : "dark"));

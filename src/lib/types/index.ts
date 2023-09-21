export type ThemeSliceState = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};
export type ThemeModes = {
  DARK: "dark";
  LIGHT: "light";
};

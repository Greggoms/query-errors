import { THEME_MODES } from "../constants";

// for tailwind css, need the change the root
export const applyThemePreference = (theme: string) => {
  const { DARK, LIGHT } = THEME_MODES;
  const root = window.document.documentElement;
  const isDark = theme === DARK;
  root.classList.remove(isDark ? LIGHT : DARK);
  root.classList.add(theme);
  root.style.colorScheme = isDark ? DARK : LIGHT;
};

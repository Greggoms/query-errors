export type ThemeSliceState = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};
export type ThemeModes = {
  DARK: "dark";
  LIGHT: "light";
};

export type JsonPlaceholderAlbum = {
  userId: string;
  id: string;
  title: string;
};

export type FormValues = {
  album: string;
};

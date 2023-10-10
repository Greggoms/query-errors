export type ThemeSliceState = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};
export type ThemeModes = {
  DARK: "dark";
  LIGHT: "light";
};

/** DateFormValues ↓↓↓↓↓↓↓
 * <input type="date" value={value} onChange={onChange} />
 * Setting a date input's defaultValue to null returns this error:
 *
 * Warning: `value` prop on `input` should not be null.
 * Consider using an empty string to clear the component or
 * `undefined` for uncontrolled components.
 *
 * Along with a TypeScript Error of:
 * Type 'null' is not assignable to type 'string | number | readonly string[] | undefined'.
 *
 *
 * Strings are the best solution as they are the most versatile option.
 */
export type DateFormValues = {
  beginDate: string;
  endDate: string;
};

export type JsonPlaceholderAlbum = {
  userId: string;
  id: string;
  title: string;
};

export type FormValues = {
  album: string;
};

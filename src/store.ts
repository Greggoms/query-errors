import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_MODES } from "./lib/constants";
import { ThemeSliceState } from "./lib/types";

const { LIGHT, DARK } = THEME_MODES;

const useThemeStore = create<ThemeSliceState>()(
  persist(
    (set) => ({
      mode: DARK,
      toggleTheme: () =>
        set((state) => ({
          mode: state.mode === LIGHT ? DARK : LIGHT,
        })),
    }),
    {
      name: "test-theme",
      partialize: (state) => state.mode,
    }
  )
);

export default useThemeStore;

import useThemeStore from "../store";

export default function Header() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="dark:bg-zinc-800">
      <div className="container flex items-center justify-between gap-5 py-3">
        <h2>Header</h2>
        <button
          onClick={toggleTheme}
          type="button"
          className="py-1 px-2 text-white bg-zinc-800 dark:bg-yellow-600 rounded"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}

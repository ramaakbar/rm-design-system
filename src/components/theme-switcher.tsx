import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="block w-full rounded-md border-0 bg-transparent px-3 py-2 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}

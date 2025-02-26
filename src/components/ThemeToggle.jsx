import { createSignal, onMount } from "solid-js";

const ThemeToggle = () => {
  const [theme, setTheme] = createSignal("light");

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  const toggleTheme = () => {
    const newTheme = theme() === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button class="theme-toggle" onClick={toggleTheme}>
      {theme() === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;

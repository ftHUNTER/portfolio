import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#31473A' : '#EDF4F2',
        color: isDarkMode ? '#EDF4F2' : '#31473A',
        border: `2px solid ${isDarkMode ? '#EDF4F2' : '#31473A'}`
      }}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </button>
  );
} 
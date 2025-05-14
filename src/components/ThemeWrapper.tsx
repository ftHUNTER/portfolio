'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const bgColor = isDarkMode ? '#1a1a1a' : '#EDF4F2';

  return (
    <div style={{ 
      backgroundColor: bgColor,
      minHeight: '100vh',
      transition: 'background-color 0.3s ease'
    }}>
      {children}
    </div>
  );
} 
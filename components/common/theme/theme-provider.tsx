'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme, type ThemeProviderProps } from 'next-themes';

export type Theme = 'light' | 'dark' | 'system';

// Extended context to provide additional theme functionality
type ThemeContextValue = {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
  resolvedTheme: string | undefined;
  isYouTubeDark: boolean; // Specifically for YouTube-style UI
  toggleTheme: () => void; // Convenience method
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'dark', // YouTube-like default
  storageKey = 'youtube-theme',
  ...props
}: ThemeProviderProps) {
  // Track initial mount to prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
      storageKey={storageKey}
      {...props}>
      <ThemeProviderContent>{mounted ? children : null}</ThemeProviderContent>
    </NextThemesProvider>
  );
}

function ThemeProviderContent({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  const isYouTubeDark = resolvedTheme === 'dark';

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  const contextValue = React.useMemo(
    () => ({
      theme: theme as Theme | undefined,
      setTheme: setTheme as (theme: Theme) => void,
      resolvedTheme,
      isYouTubeDark,
      toggleTheme,
    }),
    [theme, setTheme, resolvedTheme, isYouTubeDark, toggleTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

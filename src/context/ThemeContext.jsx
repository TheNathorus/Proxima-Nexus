import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react';

const STORAGE_KEY = 'proxima-theme';

function readPreference() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'dark' || v === 'light' || v === 'auto') return v;
  } catch {
    /* ignore */
  }
  return 'auto';
}

function subscribePreferredColorScheme(onStoreChange) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', onStoreChange);
  return () => mq.removeEventListener('change', onStoreChange);
}

function getPreferredSnapshot() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getPreferredServerSnapshot() {
  return 'dark';
}

function resolveEffectiveTheme(preference, systemTheme) {
  if (preference === 'dark') return 'dark';
  if (preference === 'light') return 'light';
  return systemTheme;
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const systemTheme = useSyncExternalStore(
    subscribePreferredColorScheme,
    getPreferredSnapshot,
    getPreferredServerSnapshot,
  );

  const [preference, setPreferenceState] = useState(readPreference);

  const resolvedTheme = resolveEffectiveTheme(preference, systemTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  const setPreference = (next) => {
    const v = next === 'dark' || next === 'light' || next === 'auto' ? next : 'auto';
    setPreferenceState(v);
    try {
      localStorage.setItem(STORAGE_KEY, v);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo(
    () => ({ preference, resolvedTheme, systemTheme, setPreference }),
    [preference, resolvedTheme, systemTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}

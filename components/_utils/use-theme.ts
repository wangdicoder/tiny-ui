import { useSyncExternalStore, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'ty-theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(mode: ThemeMode): void {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  if (mode === 'system') {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', mode);
  }
}

function readStoredTheme(): ThemeMode {
  if (typeof localStorage === 'undefined') return 'system';
  return (localStorage.getItem(STORAGE_KEY) as ThemeMode) || 'system';
}

// ---- Shared store ----
let currentMode: ThemeMode = readStoredTheme();
const listeners = new Set<() => void>();

function getSnapshot(): ThemeMode {
  return currentMode;
}

function getServerSnapshot(): ThemeMode {
  return 'system';
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function setThemeMode(next: ThemeMode): void {
  currentMode = next;
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
  listeners.forEach((cb) => cb());
}

// Listen for system preference changes at module level
if (typeof window !== 'undefined') {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (currentMode === 'system') {
        // Force re-render for all subscribers so resolvedTheme updates
        listeners.forEach((cb) => cb());
      }
    });
}

// ---- Hook ----
export function useTheme() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const resolvedTheme: 'light' | 'dark' = mode === 'system' ? getSystemTheme() : mode;

  const setMode = useCallback((newMode: ThemeMode) => {
    setThemeMode(newMode);
  }, []);

  const toggle = useCallback(() => {
    const resolved = currentMode === 'system' ? getSystemTheme() : currentMode;
    setThemeMode(resolved === 'light' ? 'dark' : 'light');
  }, []);

  return { mode, resolvedTheme, setMode, toggle };
}

/**
 * Next.js Instrumentation Hook
 * Polyfills localStorage for Node.js 22+ where a partial localStorage object
 * exists without getItem/setItem/removeItem methods, causing SSR crashes.
 */
export async function register() {
  if (typeof globalThis.localStorage !== 'undefined') {
    const storage = globalThis.localStorage;
    if (typeof storage.getItem !== 'function') {
      const store: Record<string, string> = {};
      globalThis.localStorage = {
        ...storage,
        getItem(key: string): string | null {
          return store[key] ?? null;
        },
        setItem(key: string, value: string): void {
          store[key] = String(value);
        },
        removeItem(key: string): void {
          delete store[key];
        },
        clear(): void {
          Object.keys(store).forEach((key) => delete store[key]);
        },
        get length(): number {
          return Object.keys(store).length;
        },
        key(index: number): string | null {
          return Object.keys(store)[index] ?? null;
        },
      } as Storage;
    }
  }
}

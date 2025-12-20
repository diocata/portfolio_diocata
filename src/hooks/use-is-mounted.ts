import { useSyncExternalStore } from "react";

/**
 * Custom hook to safely handle hydration for client-side only features.
 * Returns false during SSR and true after hydration is complete.
 */
export function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

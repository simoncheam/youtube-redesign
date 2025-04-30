import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent | PointerEvent;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: Event) => void,
  // Optional: Add a second ref for cases like dropdowns where clicking the trigger shouldn't close it
  triggerRef?: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const triggerEl = triggerRef?.current;
      const target = event.target as Node | null;

      // Do nothing if clicking ref's element or descendent elements
      // Also do nothing if clicking the trigger element or its descendants
      if (
        !target ||
        !el ||
        el.contains(target) ||
        (triggerEl && triggerEl.contains(target))
      ) {
        return;
      }

      handler(event); // Call the handler only if the click is outside
    };

    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('pointerdown', listener);
    };
    // Re-run if ref, triggerRef or handler changes
  }, [ref, triggerRef, handler]);
}

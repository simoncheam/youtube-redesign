import { useState, useEffect, useCallback } from 'react';

export function useSidebarState(showSidebar: boolean, isMobile: boolean) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(showSidebar && !isMobile);
  }, [showSidebar, isMobile]);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, open, close };
}

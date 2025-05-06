import { useState } from 'react';
import { useCallback } from 'react';

interface SectionProps {
  playlists: boolean;
  collections: boolean;
  subscriptions: boolean;
}

export function useExpandableSections() {
  const [sections, setSections] = useState<SectionProps>({
    playlists: false,
    collections: false,
    subscriptions: false,
  });

  const toggleSection = useCallback((section: keyof SectionProps) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  }, []);

  return { sections, toggleSection };
}

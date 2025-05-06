/**
 * ResponsiveLayout - Main layout component that adapts UI based on screen size and route
 *
 * This component handles:
 * - Conditional rendering of navigation components (mobile vs desktop)
 * - Sidebar state management (open/closed)
 * - Special layout behavior for specific pages (watch, shorts)
 * - Correct content positioning based on sidebar state
 */
'use client';

import { useMediaQuery } from '@/hooks/ui/useMediaQuery';
import { useSidebarState } from '@/hooks/ui/useSidebarState';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

// Use consistent import paths with @/ prefix
import Navbar from '@/components/layouts/navigation/navbar/navbar';
import { MobileBottomNav } from './navigation/mobile/mobile-bottom-nav';
import { MobileNavbar } from './navigation/mobile/mobile-navbar';
import { DesktopSidebar } from './navigation/sidebar/DesktopSidebar';
import { MobileSidebar } from './navigation/sidebar/MobileSidebar';

// Constants for improved maintainability
const RESERVED_ROUTES = {
  WATCH: '/watch',
  SHORTS: '/shorts/',
};

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Compute layout-related states in one place
  const layoutState = useMemo(() => {
    const isWatchPage = pathname.startsWith(RESERVED_ROUTES.WATCH);
    const isShortsPage = pathname.startsWith(RESERVED_ROUTES.SHORTS);
    const showSidebar = !isWatchPage && !isShortsPage;

    return {
      isWatchPage,
      isShortsPage,
      showSidebar,
    };
  }, [pathname]);

  // Replace your existing sidebar state management
  const { isOpen, toggle, open, close } = useSidebarState(layoutState.showSidebar, isMobile);

  // Calculate main content class based on sidebar state
  const mainContentClass = !layoutState.showSidebar ? '' : isOpen ? 'ml-60' : 'ml-16';

  return (
    <div className='flex flex-col min-h-screen bg-youtube-black text-white overflow-hidden'>
      {/* Render navbar based on screen size */}
      {isMobile ? (
        <MobileNavbar onMenuClick={open} />
      ) : (
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar onMenuClick={toggle} />
        </div>
      )}

      {/* Main content area */}
      <div className={isMobile ? '' : 'mt-14 flex flex-1'}>
        {/* Conditionally render the appropriate sidebar */}
        {layoutState.showSidebar && !isMobile && (
          <div className='fixed top-14 bottom-0 left-0 z-40'>
            <DesktopSidebar isOpen={isOpen} />
          </div>
        )}

        {/* Main content with appropriate margin/positioning */}
        {isMobile ? (
          <main className='fixed inset-x-0 top-14 bottom-16 z-10 overflow-y-auto overflow-x-hidden'>{children}</main>
        ) : (
          <main className={`flex-1 overflow-y-auto overflow-x-hidden ${mainContentClass} w-full`}>{children}</main>
        )}
      </div>

      {/* Only render mobile components on mobile */}
      {isMobile && (
        <>
          {layoutState.showSidebar && (
            <MobileSidebar
              isOpen={isOpen}
              isMobile={true}
              onOpenChange={toggle}
            />
          )}
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}

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
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useState, useEffect, useMemo } from 'react';

// Use consistent import paths with @/ prefix
import Navbar from '@/components/layouts/navigation/navbar/navbar';
import Sidebar from '@/components/layouts/navigation/sidebar/sidebar';
import { MobileBottomNav } from './navigation/mobile/mobile-bottom-nav';
import { MobileNavbar } from './navigation/mobile/mobile-navbar';

// Constants for improved maintainability
const MOBILE_BREAKPOINT = '(max-width: 767px)';
const RESERVED_ROUTES = {
  WATCH: '/watch',
  SHORTS: '/shorts/',
};

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Initialize sidebar state
  useEffect(() => {
    const shouldOpenSidebar = !isMobile && layoutState.showSidebar;
    setSidebarOpen(shouldOpenSidebar);
  }, [isMobile, layoutState.showSidebar]);

  // Handler functions
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // Calculate main content class based on sidebar state
  const mainContentClass = !layoutState.showSidebar ? '' : sidebarOpen ? 'ml-60' : 'ml-16';

  return (
    <div className='flex flex-col min-h-screen bg-youtube-black text-white overflow-hidden'>
      {/* Navbar section */}
      <div className={!isMobile ? 'fixed top-0 left-0 right-0 z-50' : ''}>
        {isMobile ? <MobileNavbar onMenuClick={openSidebar} /> : <Navbar onMenuClick={toggleSidebar} />}
      </div>

      {/* Desktop layout with conditionally visible sidebar */}
      {!isMobile && (
        <div className='flex flex-1 mt-14'>
          {layoutState.showSidebar && (
            <div className='fixed top-14 bottom-0 left-0 z-40'>
              <Sidebar
                isOpen={sidebarOpen}
                isMobile={false}
                onOpenChange={setSidebarOpen}
              />
            </div>
          )}
          <main className={`flex-1 overflow-y-auto overflow-x-hidden ${mainContentClass} w-full`}>{children}</main>
        </div>
      )}

      {isMobile && (
        <>
          {layoutState.showSidebar && (
            <Sidebar
              isOpen={sidebarOpen}
              isMobile={true}
              onOpenChange={setSidebarOpen}
            />
          )}

          <main className='fixed inset-x-0 top-14 bottom-16 z-10 overflow-y-auto overflow-x-hidden'>{children}</main>
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}

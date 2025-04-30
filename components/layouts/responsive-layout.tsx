'use client';

import Navbar from '@/components/layouts/navbar/navbar';
import MobileSidebar from '@/components/layouts/sidebar/mobile-sidebar';
import Sidebar from '@/components/layouts/sidebar/sidebar';
import { MobileNavbar } from '@/components/mobile/mobile-navbar';
import { MobileBottomNav } from '@/components/navigation/bottom-nav/mobile-bottom-nav';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isWatchPage = pathname.startsWith('/watch');
  const isShortsPage = pathname.startsWith('/shorts/*');
  const showSidebar = !isWatchPage && !isShortsPage;

  const renderSidebar = !isShortsPage;
  const isMiniSidebarForced = !isMobile && isWatchPage;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [pathname, isWatchPage, isShortsPage]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mobile = window.innerWidth < 768;
      setSidebarOpen(!(mobile || isWatchPage || isShortsPage));
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex flex-col min-h-screen bg-youtube-black text-white overflow-hidden'>
      {/* Unified navigation approach - Always fixed at top */}
      <div className={`${!isMobile ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        {isMobile ? (
          <MobileNavbar onMenuClick={() => toggleSidebar()} />
        ) : (
          <Navbar onMenuClick={() => toggleSidebar()} />
        )}
      </div>

      {/* Desktop layout - fixed navbar + sidebar + scrollable content */}
      {!isMobile ? (
        <div className='flex flex-1 mt-14'>
          {' '}
          {/* Add top margin to account for fixed navbar */}
          {showSidebar && (
            <div className='fixed top-14 bottom-0 left-0 z-40'>
              <Sidebar
                isOpen={sidebarOpen}
                onOpenChange={setSidebarOpen}
                isMobile={isMobile}
              />
            </div>
          )}
          {/* Desktop main content - Push content to accommodate sidebar */}
          <main className={`flex-1 overflow-y-auto overflow-x-hidden ${sidebarOpen ? 'ml-60' : 'ml-16'} w-full`}>
            {children}
          </main>
        </div>
      ) : (
        <>
          {/* Mobile layout */}
          <div className='flex flex-1 overflow-hidden'>
            {/* Mobile Sidebar with Custom implementation for visibility */}
            {showSidebar && sidebarOpen && (
              <div
                className='fixed inset-0 z-[100] bg-black/50'
                onClick={() => setSidebarOpen(false)}>
                <div
                  className='fixed left-0 top-0 bottom-0 w-64 bg-youtube-black z-[101]'
                  onClick={(e) => e.stopPropagation()}>
                  <MobileSidebar onClose={() => setSidebarOpen(false)} />
                </div>
              </div>
            )}

            {/* Mobile main content area */}
            <main className='fixed inset-x-0 top-14 bottom-16 z-10 overflow-y-auto overflow-x-hidden'>{children}</main>
          </div>

          {/* Mobile bottom nav */}
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}

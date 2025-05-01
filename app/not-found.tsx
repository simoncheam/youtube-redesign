'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

interface NotFoundProps {
  showToast?: boolean;
}

export default function NotFound({ showToast = true }: NotFoundProps) {
  useEffect(() => {
    if (showToast) {
      toast.error('Page not found', {
        description: 'The page you requested could not be found.',
        duration: 5000,
      });
    }
  }, [showToast]);

  return (
    <main className='flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-6'>
      <div className='max-w-md text-center space-y-6'>
        <h1 className='text-5xl font-bold tracking-tight'>404</h1>

        <div className='mx-auto w-64 h-64 relative mb-4'>
          <Image
            src='/images/shorts/orange-cat-jail-thumbnail.webp'
            alt='Cat in jail - Page not found'
            fill
            className='object-cover rounded-xl'
          />
        </div>

        <p className='text-xl text-muted-foreground'>This page has been put in jail or doesn't exist yet.</p>

        <Button
          asChild
          variant='default'
          size='lg'>
          <Link
            href='/'
            className='flex items-center gap-2'>
            <Home size={18} />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}

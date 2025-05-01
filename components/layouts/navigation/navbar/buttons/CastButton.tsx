import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Cast } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CastButtonProps {
  onClick?: () => void;
  className?: string;
}

export function CastButton({ onClick, className }: CastButtonProps) {
  const label = 'Cast';

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className={cn('text-white', className)}
            onClick={onClick}
            aria-label={label}>
            <Cast className='h-5 w-5' />
            <span className='sr-only'>{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side='bottom'
          sideOffset={10}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

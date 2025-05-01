import { Bell } from 'lucide-react';
import { Button } from '../../../../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface NotificationsButtonProps {
  onClick?: () => void;
  className?: string;
}

export function NotificationsButton({ onClick, className }: NotificationsButtonProps) {
  const label = 'Notifications';

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
            <Bell className='h-5 w-5' />
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

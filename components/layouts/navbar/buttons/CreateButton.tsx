import { cn } from '@/lib/utils';
import { Button } from '../../../ui/button';
import { PlusCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CreateButtonProps {
  onClick?: () => void;
  className?: string;
}

export function CreateButton({ onClick, className }: CreateButtonProps) {
  const label = 'Create';

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
            <PlusCircle className='h-5 w-5' />
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

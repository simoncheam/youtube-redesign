'use client';

interface ColorSampleProps {
  name: string;
  color: string;
  textColor?: string;
}

function ColorSample({ name, color, textColor = 'text-white' }: ColorSampleProps) {
  return (
    <div className='flex flex-col'>
      <div className={`h-16 w-full rounded-md ${color} flex items-center justify-center`}>
        <span className={`text-xs font-mono ${textColor}`}>{color}</span>
      </div>
      <span className='mt-1 text-sm'>{name}</span>
    </div>
  );
}

export default function ThemeColors() {
  return (
    <div className='p-6 space-y-8'>
      <div>
        <h2 className='text-xl font-bold mb-4'>YouTube Theme Colors</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <ColorSample
            name='YouTube Red'
            color='bg-youtube-red'
          />
          <ColorSample
            name='YouTube Black'
            color='bg-youtube-black'
          />
          <ColorSample
            name='Card Background'
            color='bg-youtube-card'
          />
          <ColorSample
            name='Hover State'
            color='bg-youtube-hover'
          />
          <ColorSample
            name='Border Color'
            color='bg-youtube-border'
          />
          <ColorSample
            name='Input Background'
            color='bg-youtube-input'
          />
          <ColorSample
            name='Focus Color'
            color='bg-youtube-focus'
          />
        </div>
      </div>

      <div>
        <h2 className='text-xl font-bold mb-4'>Scrollbar Colors</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <ColorSample
            name='Scrollbar Track'
            color='bg-youtube-scrollbar-track'
          />
          <ColorSample
            name='Scrollbar Thumb'
            color='bg-youtube-scrollbar-thumb'
          />
          <ColorSample
            name='Scrollbar Hover'
            color='bg-youtube-scrollbar-hover'
          />
        </div>
      </div>

      <div>
        <h2 className='text-xl font-bold mb-4'>Base Theme Colors</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <ColorSample
            name='Background'
            color='bg-background'
            textColor='text-foreground'
          />
          <ColorSample
            name='Foreground'
            color='bg-foreground'
          />
          <ColorSample
            name='Primary'
            color='bg-primary'
          />
          <ColorSample
            name='Secondary'
            color='bg-secondary'
            textColor='text-secondary-foreground'
          />
          <ColorSample
            name='Muted'
            color='bg-muted'
            textColor='text-muted-foreground'
          />
          <ColorSample
            name='Accent'
            color='bg-accent'
            textColor='text-accent-foreground'
          />
          <ColorSample
            name='Destructive'
            color='bg-destructive'
          />
        </div>
      </div>
    </div>
  );
}

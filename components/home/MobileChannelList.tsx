import Image from 'next/image';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PATHS } from '@/lib/constants';

interface Channel {
  id: string;
  name: string;
  avatar?: string;
  image?: string;
  hasNew?: boolean;
}

interface MobileChannelListProps {
  channels: Channel[];
}

export default function MobileChannelList({ channels }: MobileChannelListProps) {
  return (
    <ScrollArea className='w-full'>
      <div className='px-4 pt-3 pb-2 flex gap-4'>
        {channels.map((channel) => (
          <div
            key={channel.id}
            className='flex flex-col items-center gap-1 min-w-[60px]'>
            <Link
              href={`${PATHS.ROUTES.CHANNEL}/${channel.id}`}
              className='relative'>
              <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-youtube-red'>
                <Image
                  src={channel.image || channel.avatar || '/placeholder.svg'}
                  alt={channel.name}
                  width={48}
                  height={48}
                  className='object-cover'
                  priority={true}
                />
              </div>
              {channel.hasNew && <div className='absolute bottom-0 right-0 w-2 h-2 bg-youtube-red rounded-full'></div>}
            </Link>
            <span className='text-xs truncate w-full text-center text-white'>{channel.name}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

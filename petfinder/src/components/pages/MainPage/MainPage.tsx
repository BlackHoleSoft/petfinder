'use client';

import { Map } from '@/components/organisms/Map';
import { EventsFeed } from '@/components/organisms/EventsFeed';

interface MainPageProps {}

export const MainPage = ({}: MainPageProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Map height="500px" />
        </div>
        <div className="lg:col-span-1">
          <EventsFeed />
        </div>
      </div>
    </div>
  );
};

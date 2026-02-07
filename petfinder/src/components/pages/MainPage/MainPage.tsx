"use client";

import { Map } from "@/components/organisms/Map";
import { EventsFeed } from "@/components/organisms/EventsFeed";

interface MainPageProps {}

export const MainPage = ({}: MainPageProps) => {
  return (
    <div className="max-w-7xl mx-auto h-full">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 gap-8 h-full">
        <div className="lg:col-span-2 h-full">
          <Map />
        </div>
        <div className="lg:col-span-1 h-full">
          <EventsFeed />
        </div>
      </div>
    </div>
  );
};

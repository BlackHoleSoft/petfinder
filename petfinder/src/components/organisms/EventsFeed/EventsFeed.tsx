"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { EventCard, EventItem } from "@/components/molecules/EventCard";
import { Publish } from "@/components/molecules/Publish";

interface EventsFeedProps {
  events?: EventItem[];
}

export const EventsFeed = ({ events = [] }: EventsFeedProps) => {
  const [feedEvents, setFeedEvents] = useState<EventItem[]>([]);

  // Инициализация моковых данных
  useEffect(() => {
    if (events.length === 0) {
      // Если внешние события не переданы, используем моковые данные
      setFeedEvents([
        {
          id: 1,
          type: "lost",
          animalType: "cat",
          name: "Барсик",
          description: "Пропал кот, серый, боится людей",
          image: "/placeholder-cat.jpg",
          contact: "+7 (999) 123-45-67",
          date: "2023-05-15",
          location: "Москва, м. Пушкинская",
        },
        {
          id: 2,
          type: "seen",
          animalType: "dog",
          description: "Видели собаку, белая с коричневыми пятнами",
          image: "/placeholder-dog.jpg",
          contact: "+7 (999) 123-45-68",
          date: "2023-05-16",
          location: "Москва, Парк Горького",
        },
        {
          id: 3,
          type: "found",
          animalType: "cat",
          name: "Мурка",
          description: "Найдена кошка, ласковая",
          image: "/placeholder-cat2.jpg",
          contact: "+7 (999) 123-45-69",
          date: "2023-05-17",
          location: "Москва, ул. Льва Толстого",
        },
        {
          id: 4,
          type: "lost",
          animalType: "dog",
          name: "Шарик",
          description: "Пропала собака, порода доберман",
          image: "/placeholder-dog2.jpg",
          contact: "+7 (999) 123-45-70",
          date: "2023-05-18",
          location: "Москва, м. Китай-город",
        },
        {
          id: 5,
          type: "seen",
          animalType: "other",
          description: "Видели маленького ежика",
          image: "/placeholder-other.jpg",
          contact: "+7 (999) 123-45-71",
          date: "2023-05-19",
          location: "Москва, Измайловский парк",
        },
      ]);
    } else {
      setFeedEvents(events);
    }
  }, [events]);

  return (
    <div className="grid w-full h-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Лента событий</h2>
        <Publish />
      </div>

      <div className="overflow-y-auto h-full">
        <div className="space-y-4">
          {feedEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      {/* Простая пагинация */}
      <div className="mt-6 flex justify-center">
        <Button variant={"outline"}>Загрузить еще</Button>
      </div>
    </div>
  );
};

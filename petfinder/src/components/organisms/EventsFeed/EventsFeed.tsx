'use client';

import { useState, useEffect } from 'react';

interface EventItem {
  id: number;
  type: 'lost' | 'seen' | 'found';
  animalType: 'dog' | 'cat' | 'other';
  name?: string;
  description?: string;
  image?: string;
  contact?: string;
  date: string;
  location?: string;
}

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
          type: 'lost',
          animalType: 'cat',
          name: 'Барсик',
          description: 'Пропал кот, серый, боится людей',
          image: '/placeholder-cat.jpg',
          contact: '+7 (999) 123-45-67',
          date: '2023-05-15',
          location: 'Москва, м. Пушкинская'
        },
        {
          id: 2,
          type: 'seen',
          animalType: 'dog',
          description: 'Видели собаку, белая с коричневыми пятнами',
          image: '/placeholder-dog.jpg',
          contact: '+7 (999) 123-45-68',
          date: '2023-05-16',
          location: 'Москва, Парк Горького'
        },
        {
          id: 3,
          type: 'found',
          animalType: 'cat',
          name: 'Мурка',
          description: 'Найдена кошка, ласковая',
          image: '/placeholder-cat2.jpg',
          contact: '+7 (999) 123-45-69',
          date: '2023-05-17',
          location: 'Москва, ул. Льва Толстого'
        },
        {
          id: 4,
          type: 'lost',
          animalType: 'dog',
          name: 'Шарик',
          description: 'Пропала собака, порода доберман',
          image: '/placeholder-dog2.jpg',
          contact: '+7 (999) 123-45-70',
          date: '2023-05-18',
          location: 'Москва, м. Китай-город'
        },
        {
          id: 5,
          type: 'seen',
          animalType: 'other',
          description: 'Видели маленького ежика',
          image: '/placeholder-other.jpg',
          contact: '+7 (999) 123-45-71',
          date: '2023-05-19',
          location: 'Москва, Измайловский парк'
        }
      ]);
    } else {
      setFeedEvents(events);
    }
 }, [events]);

  // Функция для получения цвета фона карточки в зависимости от типа события
  const getEventBgColor = (type: string) => {
    switch (type) {
      case 'lost':
        return 'bg-red-50 border-l-4 border-red-500'; // Красный для пропавших
      case 'seen':
        return 'bg-yellow-50 border-l-4 border-yellow-500'; // Желтый для замеченных
      case 'found':
        return 'bg-green-50 border-l-4 border-green-500'; // Зеленый для найденных
      default:
        return 'bg-gray-50 border-l-4 border-gray-500';
    }
  };

  // Функция для получения названия типа события
  const getEventTypeName = (type: string) => {
    switch (type) {
      case 'lost':
        return 'Потерялся';
      case 'seen':
        return 'Видел потеряшку';
      case 'found':
        return 'Нашли';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Лента событий</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors" aria-label="Создать публикацию">
          <span className="text-xl">+</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {feedEvents.map((event) => (
          <div 
            key={event.id} 
            className={`p-4 rounded-lg shadow-sm ${getEventBgColor(event.type)} flex items-start`}
          >
            <div className="mr-4 flex-shrink-0">
              {event.image ? (
                <img 
                  src={event.image} 
                  alt={`${event.animalType}`} 
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder.jpg';
                  }}
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">{event.animalType}</span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-900 truncate">
                  {event.name || `${event.animalType.charAt(0).toUpperCase() + event.animalType.slice(1)}`}
                </h3>
                <span className="text-xs text-gray-500 ml-2">{event.date}</span>
              </div>
              
              <div className="mt-1">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  event.type === 'lost' ? 'bg-red-100 text-red-800' :
                  event.type === 'seen' ? 'bg-yellow-100 text-yellow-800' :
                  event.type === 'found' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {getEventTypeName(event.type)}
                </span>
              </div>
              
              <p className="mt-2 text-gray-700 text-sm line-clamp-2">
                {event.description}
              </p>
              
              {event.location && (
                <p className="mt-2 text-gray-500 text-xs">
                  {event.location}
                </p>
              )}
              
              {event.contact && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Контакт: {event.contact}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Простая пагинация */}
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          Загрузить еще
        </button>
      </div>
    </div>
  );
};

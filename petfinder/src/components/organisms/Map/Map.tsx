'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Исправление отображения маркеров для Leaflet в сочетании с Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapPin {
  id: number;
  lat: number;
 lng: number;
  type: 'lost' | 'seen' | 'found'; // потеряшка, видел, найдена
  animalType: 'dog' | 'cat' | 'other';
  name?: string;
  description?: string;
  image?: string;
 contact?: string;
}

interface MapProps {
  pins?: MapPin[];
  height?: string;
 defaultCenter?: [number, number];
  defaultZoom?: number;
}

export const Map = ({
  pins = [],
  height = '500px',
  defaultCenter = [55.7558, 37.6176], // Координаты Москвы по умолчанию
  defaultZoom = 10,
}: MapProps) => {
  const [mapPins, setMapPins] = useState<MapPin[]>([]);

  // Инициализация моковых данных
  useEffect(() => {
    if (pins.length === 0) {
      // Если внешние пины не переданы, используем моковые данные
      setMapPins([
        {
          id: 1,
          lat: 55.7558,
          lng: 37.6176,
          type: 'lost',
          animalType: 'cat',
          name: 'Барсик',
          description: 'Пропал кот, серый, боится людей',
          image: '/placeholder-cat.jpg',
          contact: '+7 (999) 123-45-67',
        },
        {
          id: 2,
          lat: 55.7588,
          lng: 37.6076,
          type: 'seen',
          animalType: 'dog',
          description: 'Видели собаку, белая с коричневыми пятнами',
          image: '/placeholder-dog.jpg',
          contact: '+7 (999) 123-45-68',
        },
        {
          id: 3,
          lat: 55.7458,
          lng: 37.6276,
          type: 'found',
          animalType: 'cat',
          name: 'Мурка',
          description: 'Найдена кошка, ласковая',
          image: '/placeholder-cat2.jpg',
          contact: '+7 (999) 123-45-69',
        },
      ]);
    } else {
      setMapPins(pins);
    }
  }, [pins]);

  // Функция для получения цвета маркера в зависимости от типа
  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'lost':
        return '#e74c3c'; // Красный для пропавших
      case 'seen':
        return '#f39c12'; // Желтый для замеченных
      case 'found':
        return '#2ecc71'; // Зеленый для найденных
      default:
        return '#3498db'; // Синий по умолчанию
    }
  };

  // Функция для получения иконки маркера
  const getCustomIcon = (type: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${getMarkerColor(type)};
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">
          <div style="
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [28, 40],
      iconAnchor: [14, 40],
    });
  };

  return (
    <div className="w-full" style={{ height }}>
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {mapPins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.lng]}
            icon={getCustomIcon(pin.type)}
          >
            <Popup>
              <div className="popup-content">
                <div className="flex items-center mb-2">
                  {pin.image ? (
                    <img 
                      src={pin.image} 
                      alt={`${pin.animalType}`} 
                      className="w-16 h-16 object-cover rounded mr-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.jpg';
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded mr-3 flex items-center justify-center">
                      <span className="text-gray-500">{pin.animalType}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold">{pin.name || `${pin.animalType.charAt(0).toUpperCase() + pin.animalType.slice(1)}`}</h3>
                    <p className="text-sm text-gray-600 capitalize">{pin.type}</p>
                  </div>
                </div>
                
                {pin.description && (
                  <p className="mt-2 text-gray-700">{pin.description}</p>
                )}
                
                {pin.contact && (
                  <div className="mt-2 pt-2 border-t">
                    <p className="text-sm">Контакт: {pin.contact}</p>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

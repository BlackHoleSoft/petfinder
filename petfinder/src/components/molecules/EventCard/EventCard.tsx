import { EventCardProps } from "./EventCard.interface";

export const EventCard = ({
  id,
  type,
  animalType,
  name,
  description,
  image,
  contact,
  date,
  location,
}: EventCardProps) => {
  // Функция для получения цвета фона карточки в зависимости от типа события
  const getEventBgColor = (type: string) => {
    switch (type) {
      case "lost":
        return "bg-red-50 border-l-4 border-red-500"; // Красный для пропавших
      case "seen":
        return "bg-yellow-50 border-l-4 border-yellow-500"; // Желтый для замеченных
      case "found":
        return "bg-green-50 border-l-4 border-green-500"; // Зеленый для найденных
      default:
        return "bg-gray-50 border-l-4 border-gray-500";
    }
  };

  // Функция для получения названия типа события
  const getEventTypeName = (type: string) => {
    switch (type) {
      case "lost":
        return "Потерялся";
      case "seen":
        return "Видел потеряшку";
      case "found":
        return "Нашли";
      default:
        return "";
    }
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-sm ${getEventBgColor(type)} flex items-start`}
    >
      <div className="mr-4 flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={`${animalType}`}
            className="w-16 h-16 object-cover rounded"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/placeholder.jpg";
            }}
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">{animalType}</span>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-900 truncate">
            {name ||
              `${animalType.charAt(0).toUpperCase() + animalType.slice(1)}`}
          </h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              type === "lost"
                ? "bg-red-100 text-red-800"
                : type === "seen"
                  ? "bg-yellow-100 text-yellow-800"
                  : type === "found"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {getEventTypeName(type)}
          </span>
        </div>

        <p className="mt-1 text-gray-700 text-sm line-clamp-2">{description}</p>

        <div className="flex flex-row justify-between items-center mt-1">
          <div className="text-xs text-gray-500">
            {date}, {location}
          </div>
        </div>

        {contact && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-600">Контакт: {contact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

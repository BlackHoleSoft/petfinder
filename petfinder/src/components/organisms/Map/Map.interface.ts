export interface MapPin {
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

export interface MapProps {
  pins?: MapPin[];
  height?: string;
  defaultCenter?: [number, number];
  defaultZoom?: number;
}

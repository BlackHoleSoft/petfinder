export interface EventItem {
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

export interface EventsFeedProps {
  events?: EventItem[];
}

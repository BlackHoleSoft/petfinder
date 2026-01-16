'use client';

import { Header } from '@/components/organisms/Header';

interface PageTemplateProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export const PageTemplate = ({ 
  children, 
  showHeader = true 
}: PageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 PetFinder. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

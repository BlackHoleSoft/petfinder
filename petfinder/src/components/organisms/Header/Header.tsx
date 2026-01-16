'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <Link href="/" className="text-xl font-bold text-blue-600">
          PetFinder
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Лента
          </Link>
          <Link href="/my-posts" className="text-gray-700 hover:text-blue-600 transition-colors">
            Мои публикации
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={handleModalToggle}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="Создать публикацию"
        >
          <span className="text-xl">+</span>
        </button>
        
        <Link 
          href="/login" 
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Вход
        </Link>
      </div>

      {/* Модальное окно создания публикации */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Создать публикацию</h2>
            <div className="space-y-3">
              <button 
                className="w-full text-left p-3 border rounded hover:bg-gray-50 transition-colors"
                onClick={() => {
                  // Перенаправление на страницу публикации объявления о пропаже
                  window.location.href = '/create-lost-pet';
                }}
              >
                Мой питомец потерялся
              </button>
              <button 
                className="w-full text-left p-3 border rounded hover:bg-gray-50 transition-colors"
                onClick={() => {
                  // Перенаправление на страницу публикации пина
                  window.location.href = '/create-pin';
                }}
              >
                Я видел потеряшку
              </button>
            </div>
            <button 
              onClick={handleModalToggle}
              className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded transition-colors"
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

'use client';

import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { usePublishModalStore } from '@/stores/publishModalStore';
import { Button } from '@/ui/Button';

// Устанавливаем корневой элемент для модального окна
Modal.setAppElement('body');

export const PublishModal = () => {
  const { isOpen, closeModal } = usePublishModalStore();

  // Обработка закрытия модального окна по клавише Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md shadow-xl focus:outline-none"
      overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold mb-2">Создать публикацию</h2>
        
        <button 
          className="w-full text-left p-3 border rounded hover:bg-gray-50 transition-colors text-gray-800"
          onClick={() => {
            // Перенаправление на страницу публикации объявления о пропаже
            window.location.href = '/create-lost-pet';
            closeModal();
          }}
        >
          Мой питомец потерялся
        </button>
        
        <button 
          className="w-full text-left p-3 border rounded hover:bg-gray-50 transition-colors text-gray-800"
          onClick={() => {
            // Перенаправление на страницу публикации пина
            window.location.href = '/create-pin';
            closeModal();
          }}
        >
          Я видел потеряшку
        </button>
        
        <Button 
          onClick={closeModal}
          variant='secondary'
          fullWidth
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

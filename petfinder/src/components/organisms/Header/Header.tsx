"use client";

import Link from "next/link";
import { usePublishModalStore } from "@/stores/publishModalStore";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const { openModal } = usePublishModalStore();

  return (
    <header className="bg-white shadow-md py-2 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <Link href="/" className="text-xl font-bold text-(--main-color)">
          PetFinder
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Лента
          </Link>
          <Link
            href="/my-posts"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Мои публикации
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Вход
        </Link>
      </div>
    </header>
  );
};

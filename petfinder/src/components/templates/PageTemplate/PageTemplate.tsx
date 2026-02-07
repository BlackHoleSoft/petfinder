"use client";

import { Header } from "@/components/organisms/Header";

interface PageTemplateProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export const PageTemplate = ({
  children,
  showHeader = true,
}: PageTemplateProps) => {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-rows-[auto_minmax(500px,1fr)]">
      {showHeader && <Header />}
      <main className="container h-full max-h-full mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

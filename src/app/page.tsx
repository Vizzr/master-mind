'use client';

import { TopBar } from "./components/top-bar/top-bar";
import { PageContent } from "./components/page-content/page-content";
import { Menu } from "./components/menu/menu";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar openMenu={() => setIsMenuOpen(true)} />
      <PageContent />
      <Menu
        onSave={console.log}
        isOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)} />
    </main>
  );
}
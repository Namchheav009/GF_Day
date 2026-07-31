import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Memories } from './components/Memories';
import { LittleThings } from './components/LittleThings';
import { Letter } from './components/Letter';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="flex min-h-full w-full flex-col bg-cream">
      <NavBar />
      <main className="w-full flex-1 bg-cream">
        <Hero />
        <span id="our-story" className="block" aria-hidden="true" />
        <Memories />
        <LittleThings />
        <Letter />
      </main>
      <Footer />
    </div>);

}
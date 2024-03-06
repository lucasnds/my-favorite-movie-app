import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MovieProvider } from './src/contexts/MoviesContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
    <MovieProvider>
      <Routes />
      <StatusBar style="auto" translucent backgroundColor='#242a32'/>
    </MovieProvider>
    </>
  );
}

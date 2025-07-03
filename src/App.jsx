import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/components/pages/LandingPage';
import { ThemeProvider } from '@/hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
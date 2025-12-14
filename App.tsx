import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DocumentsPage from './pages/Documents';
import EditorPage from './pages/Editor';
import SharedPage from './pages/Shared';
import FavoritesPage from './pages/Favorites';
import SettingsPage from './pages/Settings';
import HelpPage from './pages/Help';
import Sidebar from './components/Sidebar';
import { TableTools, ImageTools, ChartTools } from './pages/Tools';
import { ShareOverlay, ExportOverlay } from './components/Overlays';

// Wrapper for pages that only have Trash/Empty states mocked inline
const TrashPage = () => (
    <div className="flex flex-1 overflow-hidden h-full">
        <Sidebar />
        <main className="flex-1 p-8 text-center text-slate-500 dark:text-slate-400 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-6xl mb-4 opacity-50">delete_outline</span>
                <p>Çöp kutusu boş.</p>
            </div>
        </main>
    </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Main Dashboard Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/trash" element={<TrashPage />} />
        
        {/* Editor & Tools */}
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/table-tools" element={<TableTools />} />
        <Route path="/image-tools" element={<ImageTools />} />
        <Route path="/chart-tools" element={<ChartTools />} />
        
        {/* Overlays - Using Route nesting or parallel routes simulated by simply rendering the Editor + Overlay */}
        <Route path="/share" element={<><EditorPage /><ShareOverlay /></>} />
        <Route path="/export" element={<><EditorPage /><ExportOverlay /></>} />
      </Routes>
    </HashRouter>
  );
};

export default App;

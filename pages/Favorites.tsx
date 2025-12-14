import React from 'react';
import Sidebar from '../components/Sidebar';

const FavoritesPage: React.FC = () => (
    <div className="flex flex-1 overflow-hidden h-full">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
             <div className="max-w-[1600px] mx-auto w-full">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">Favori Belgeler</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="group relative bg-white dark:bg-[#1a202c] rounded-xl shadow-sm hover:shadow-lg border border-transparent hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col h-[280px]">
                            <div className="absolute top-3 left-3 z-10"><button className="bg-white/90 p-1.5 rounded-full shadow-sm text-primary"><span className="material-symbols-outlined filled text-[18px]">star</span></button></div>
                            <div className="h-40 w-full bg-slate-100 dark:bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm z-10"><span className="material-symbols-outlined text-blue-600 text-3xl">description</span></div>
                            </div>
                            <div className="p-4 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-1 truncate">Doktora Tezi_Son_v{i}.docx</h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-500"><span>2 saat önce</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </main>
    </div>
);

export default FavoritesPage;

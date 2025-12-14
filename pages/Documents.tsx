import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DocumentsPage: React.FC = () => {
    return (
        <div className="flex flex-1 overflow-hidden h-full">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
                <div className="max-w-6xl mx-auto flex flex-col gap-6 w-full">
                    <div className="flex items-center gap-2 text-sm text-[#616f89] dark:text-slate-400">
                        <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-[#111318] dark:text-white font-medium">Benim Belgelerim</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Benim Belgelerim</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Toplam 24 belge</p>
                        </div>
                        <Link to="/editor" className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm shadow-primary/20 transition-all font-medium text-sm">
                            <span className="material-symbols-outlined text-xl">add</span>
                            Yeni Belge
                        </Link>
                    </div>

                    {/* Search & Filter */}
                    <div className="bg-white dark:bg-slate-800/50 rounded-xl p-2 shadow-sm border border-slate-200 dark:border-slate-700/50 flex flex-wrap gap-3 items-center justify-between">
                        <div className="relative flex-1 min-w-[240px] max-w-md">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input className="w-full bg-slate-50 dark:bg-slate-900/50 border-none rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 transition-all outline-none" placeholder="Belgelerde ara..." type="text"/>
                        </div>
                        <div className="flex items-center gap-3 ml-auto">
                            <div className="flex items-center gap-2 border-r border-slate-200 dark:border-slate-700 pr-3">
                                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">sort</span>
                                    Sırala
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                                    Filtrele
                                </button>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-900/50 p-1 rounded-lg flex items-center">
                                <button className="p-1.5 rounded bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-white transition-all"><span className="material-symbols-outlined text-[20px]">view_list</span></button>
                                <button className="p-1.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all"><span className="material-symbols-outlined text-[20px]">grid_view</span></button>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                                    <th className="py-3 px-4 w-10"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/></th>
                                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Ad</th>
                                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Değiştirilme</th>
                                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Boyut</th>
                                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase text-right"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                                {[
                                    {name: "Tez Taslağı v2.docx", time: "2 saat önce", size: "2.4 MB", icon: "description", color: "text-blue-600"},
                                    {name: "Araştırma Notları - Tarih.docx", time: "Dün", size: "850 KB", icon: "description", color: "text-blue-600"},
                                    {name: "Proje Teklifi 2024.pdf", time: "12 Ekim 2023", size: "1.1 MB", icon: "picture_as_pdf", color: "text-red-600"},
                                    {name: "Gider Tablosu.xlsx", time: "10 Ekim 2023", size: "15 KB", icon: "table_view", color: "text-emerald-600"},
                                ].map((file, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                                        <td className="py-4 px-4"><input className="rounded border-slate-300 text-primary opacity-0 group-hover:opacity-100 focus:ring-primary" type="checkbox"/></td>
                                        <td className="py-4 px-4">
                                            <Link to="/editor" className="flex items-center gap-3">
                                                <div className={`size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center ${file.color} flex-shrink-0`}>
                                                    <span className="material-symbols-outlined">{file.icon}</span>
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{file.name}</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-300">{file.time}</td>
                                        <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-300">{file.size}</td>
                                        <td className="py-4 px-4 text-right">
                                            <button className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600 opacity-0 group-hover:opacity-100"><span className="material-symbols-outlined">more_vert</span></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DocumentsPage;

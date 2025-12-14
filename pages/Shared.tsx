import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SharedPage: React.FC = () => (
    <div className="flex flex-1 overflow-hidden h-full">
       <Sidebar />
       <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
           <div className="max-w-6xl mx-auto flex flex-col gap-6 w-full">
               <div className="flex items-center gap-2 text-sm text-[#616f89] dark:text-slate-400">
                   <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                   <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                   <span className="text-[#111318] dark:text-white font-medium">Paylaşılan Belgeler</span>
               </div>
               <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Paylaşılan Belgeler</h1>
               
               <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-[#dbdfe6] dark:border-slate-700 overflow-hidden">
                   <table className="w-full text-left border-collapse">
                       <thead>
                           <tr className="bg-[#f8f9fa] dark:bg-slate-900/50 border-b border-[#dbdfe6] dark:border-slate-700">
                               <th className="py-3 px-4 text-xs font-semibold text-[#616f89] dark:text-slate-400 uppercase w-[40%]">Belge Adı</th>
                               <th className="py-3 px-4 text-xs font-semibold text-[#616f89] dark:text-slate-400 uppercase w-[20%]">Paylaşan</th>
                               <th className="py-3 px-4 text-xs font-semibold text-[#616f89] dark:text-slate-400 uppercase w-[15%]">Tarih</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-[#f0f2f4] dark:divide-slate-700">
                           <tr className="group hover:bg-[#f6f8fb] dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                               <td className="py-3 px-4 flex items-center gap-3">
                                   <div className="size-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined">description</span></div>
                                   <div className="flex flex-col"><span className="text-sm font-medium text-[#111318] dark:text-white">Tez Taslağı v2.docx</span></div>
                               </td>
                               <td className="py-3 px-4"><span className="text-sm text-[#111318] dark:text-slate-300">Prof. Dr. Ahmet Y.</span></td>
                               <td className="py-3 px-4"><span className="text-sm text-[#616f89] dark:text-slate-400">2 gün önce</span></td>
                           </tr>
                           <tr className="group hover:bg-[#f6f8fb] dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                               <td className="py-3 px-4 flex items-center gap-3">
                                   <div className="size-9 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined">table_chart</span></div>
                                   <div className="flex flex-col"><span className="text-sm font-medium text-[#111318] dark:text-white">Araştırma Verileri 2023.xlsx</span></div>
                               </td>
                               <td className="py-3 px-4"><span className="text-sm text-[#111318] dark:text-slate-300">Mehmet T.</span></td>
                               <td className="py-3 px-4"><span className="text-sm text-[#616f89] dark:text-slate-400">3 hafta önce</span></td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </main>
    </div>
);

export default SharedPage;

import React from 'react';
import { Link } from 'react-router-dom';

export const TableTools: React.FC = () => (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
        <header className="bg-white dark:bg-surface-dark border-b border-[#dbdfe6] dark:border-slate-700 px-6 py-3 flex justify-between items-center">
           <div className="flex items-center gap-2">
               <Link to="/editor" className="text-slate-500 hover:text-primary"><span className="material-symbols-outlined">arrow_back</span></Link>
               <h2 className="font-bold dark:text-white">Tablo Araçları</h2>
           </div>
           <button className="bg-primary hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-bold transition-colors">Uygula</button>
        </header>
        <main className="flex-1 p-8 flex justify-center overflow-y-auto">
            <div className="bg-white dark:bg-surface-dark p-12 shadow-sm max-w-[800px] w-full min-h-[500px]">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Verim Analizi Tablosu</h3>
                <table className="w-full border-collapse text-sm text-left ring-2 ring-primary rounded-sm dark:text-slate-300">
                   <thead>
                       <tr className="border-b-2 border-slate-800 dark:border-slate-500 bg-slate-50 dark:bg-slate-800">
                           <th className="p-3">Yıl</th><th className="p-3">Sıcaklık</th><th className="p-3">Verim</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="border-b dark:border-slate-700"><td className="p-3">2020</td><td className="p-3">14.8</td><td className="p-3">-1.4%</td></tr>
                       <tr className="border-b dark:border-slate-700"><td className="p-3">2021</td><td className="p-3">15.1</td><td className="p-3">-3.2%</td></tr>
                   </tbody>
                </table>
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-100 dark:border-blue-800">
                    <p className="text-sm font-bold text-primary mb-2 flex gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> AI Önerisi</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">Verilere dayanarak 2024 projeksiyonu ekleyebilirim.</p>
                </div>
            </div>
        </main>
    </div>
)

export const ImageTools: React.FC = () => (
   <div className="flex h-full bg-background-light dark:bg-background-dark">
       <main className="flex-1 p-8 flex justify-center overflow-y-auto">
           <div className="bg-white dark:bg-surface-dark p-12 shadow-sm max-w-[800px] w-full h-fit">
                <h3 className="font-bold text-lg mb-4 dark:text-white">Görsel Düzenleme</h3>
                <div className="relative group border-2 border-primary rounded p-1">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB52_FjaCIGDo8ZXWHXsLscFFD_mf6EnL0NMnVAcu6ai64jbG6qa3BsqY5C22e-bqlgRq-2gtvu5Frb1jTV3rpMeVrE-sElanoDAYoFI4Zj-yQbgB6fXz9Ojg8lsx5K9AVx9zuCu84ld_TGr9opmE2MqyGH65Y9X_XxqkYgZEry_IXN4UspCCbiz5OGndfQ4mmku5rq07fJKrZoPz8j2vCJYt_B1WdlT-GfSjp2re3zUv1OtroKHZGG5AWTtnqVPq-K0zDyyhhW5_-m" className="w-full rounded"/>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-surface-dark shadow-lg rounded border dark:border-slate-600 p-1 flex gap-2">
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white rounded"><span className="material-symbols-outlined text-sm">crop</span></button>
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white rounded"><span className="material-symbols-outlined text-sm">auto_fix_high</span></button>
                    </div>
                </div>
           </div>
       </main>
       <aside className="w-80 bg-white dark:bg-surface-dark border-l dark:border-slate-700 p-6">
           <h3 className="font-bold mb-4 dark:text-white">Ayarlar</h3>
           <div className="space-y-4">
               <div><label className="text-xs font-bold dark:text-slate-300">Parlaklık</label><input type="range" className="w-full"/></div>
               <div><label className="text-xs font-bold dark:text-slate-300">Kontrast</label><input type="range" className="w-full"/></div>
               <div className="pt-4 border-t dark:border-slate-700 flex gap-2">
                   <Link to="/editor" className="flex-1 py-2 text-center border dark:border-slate-600 dark:text-white rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-800">İptal</Link>
                   <Link to="/editor" className="flex-1 py-2 text-center bg-primary hover:bg-blue-700 text-white rounded text-sm font-bold">Kaydet</Link>
               </div>
           </div>
       </aside>
   </div>
)

export const ChartTools: React.FC = () => (
   <div className="flex h-full bg-background-light dark:bg-background-dark">
        <div className="w-80 bg-white dark:bg-surface-dark border-r dark:border-slate-700 p-6">
            <h3 className="font-bold mb-4 dark:text-white">Grafik Türü</h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="p-2 border-2 border-primary rounded bg-blue-50 dark:bg-blue-900/20 text-center cursor-pointer"><span className="material-symbols-outlined text-3xl text-primary">bar_chart</span><p className="text-xs font-bold mt-1 dark:text-white">Sütun</p></div>
                <div className="p-2 border dark:border-slate-600 rounded hover:bg-gray-50 dark:hover:bg-slate-700 text-center cursor-pointer"><span className="material-symbols-outlined text-3xl text-gray-400">show_chart</span><p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Çizgi</p></div>
            </div>
            <Link to="/editor" className="block w-full py-2 bg-primary hover:bg-blue-700 text-white text-center rounded font-bold transition-colors">Ekle</Link>
        </div>
        <main className="flex-1 p-8 flex items-center justify-center">
            <div className="bg-white dark:bg-surface-dark p-12 shadow-sm border dark:border-slate-700 w-full max-w-2xl aspect-video flex items-end justify-around pb-8 relative">
                <h4 className="absolute top-4 left-0 w-full text-center font-bold dark:text-white">2023 Performans</h4>
                <div className="w-[10%] h-[40%] bg-blue-500"></div>
                <div className="w-[10%] h-[70%] bg-blue-500"></div>
                <div className="w-[10%] h-[50%] bg-blue-500"></div>
                <div className="w-[10%] h-[90%] bg-blue-500"></div>
            </div>
        </main>
   </div>
)

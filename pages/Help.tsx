import React from 'react';
import Sidebar from '../components/Sidebar';

const HelpPage: React.FC = () => (
    <div className="flex flex-1 overflow-hidden h-full">
       <Sidebar />
       <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
           <div className="max-w-[800px] mx-auto w-full">
               <h1 className="text-3xl font-bold mb-4 dark:text-white">Yardım Merkezi</h1>
               <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-slate-700 mb-6">
                   <h2 className="text-xl font-bold mb-4 dark:text-white">Klavye Kısayolları</h2>
                   <div className="grid grid-cols-2 gap-4">
                       <div className="flex justify-between border-b dark:border-slate-700 pb-2 dark:text-slate-300"><span>Kalın</span><span className="kbd-key">Ctrl+B</span></div>
                       <div className="flex justify-between border-b dark:border-slate-700 pb-2 dark:text-slate-300"><span>İtalik</span><span className="kbd-key">Ctrl+I</span></div>
                       <div className="flex justify-between border-b dark:border-slate-700 pb-2 dark:text-slate-300"><span>Kaydet</span><span className="kbd-key">Ctrl+S</span></div>
                       <div className="flex justify-between border-b dark:border-slate-700 pb-2 dark:text-slate-300"><span>AI Asistan</span><span className="kbd-key">Ctrl+Space</span></div>
                   </div>
               </div>
               <h2 className="text-xl font-bold mb-4 dark:text-white">Sıkça Sorulan Sorular</h2>
               <div className="space-y-4">
                   <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-slate-700">
                       <h3 className="font-bold dark:text-white">PDF olarak indirebilir miyim?</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Evet, Dışa Aktar menüsünden PDF formatını seçebilirsiniz.</p>
                   </div>
               </div>
           </div>
       </main>
    </div>
);

export default HelpPage;

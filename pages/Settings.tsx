import React from 'react';
import Sidebar from '../components/Sidebar';

const SettingsPage: React.FC = () => (
    <div className="flex flex-1 overflow-hidden h-full">
       <Sidebar />
       <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
           <div className="max-w-[800px] mx-auto w-full bg-white dark:bg-[#1e2732] rounded-xl border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm p-6">
                <h1 className="text-2xl font-bold mb-6 dark:text-white">Hesap Ayarları</h1>
                <div className="flex items-center gap-6 mb-8">
                   <div className="size-24 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlC6SKQ3sVjKaMZMQEo0ARdfT_NbA-KgK4GtzAun6nGpiWMNnybOY___wfoDeBW68wQi_NswXWhJlbgoBPY4F3fsQjKyfj947wpFcr9s4pVlXkGJXnf6rdTP2ZySBbk-ZBrfQN7kvze1CagvjqXqG07i3fJSiD0Q6GDbj_yrspSY2eUJLr87pg6w2KqE_WQs7IApUi4NGZXF4S8ObYMm_sT_kTcTNH424_XT-EAmzA2SE0zM0SWww7F4sHxkQsgA0aCMs47ZxIV0vT")'}}></div>
                   <div>
                       <h3 className="text-lg font-bold dark:text-white">Ahmet Yılmaz</h3>
                       <p className="text-slate-500 dark:text-slate-400 text-sm">Akademik Üye</p>
                       <button className="mt-2 text-primary text-sm font-semibold hover:underline">Fotoğrafı Değiştir</button>
                   </div>
                </div>
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium block mb-1 dark:text-slate-300">Ad</label>
                            <input type="text" defaultValue="Ahmet" className="w-full rounded-lg border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1 dark:text-slate-300">Soyad</label>
                            <input type="text" defaultValue="Yılmaz" className="w-full rounded-lg border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white"/>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1 dark:text-slate-300">E-posta</label>
                        <input type="email" defaultValue="ahmet@uni.edu" disabled className="w-full rounded-lg border-gray-300 bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"/>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg">Kaydet</button>
                    </div>
                </form>
           </div>
       </main>
    </div>
);

export default SettingsPage;

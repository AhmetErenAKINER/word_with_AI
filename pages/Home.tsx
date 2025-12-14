import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-1 overflow-hidden h-full">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
                <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
                     {/* Header */}
                     <div className="flex flex-col gap-2">
                        <h1 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight tracking-tight">
                            Yeni Bir Belge Başlatın
                        </h1>
                        <p className="text-[#616f89] dark:text-slate-400 text-base font-normal leading-normal">
                            Boş bir sayfa ile başlayın veya yapay zeka asistanından yardım isteyin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Link to="/editor" className="group flex flex-col gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-slate-700 bg-white dark:bg-surface-dark hover:border-primary hover:shadow-md transition-all text-left">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">add</span>
                            </div>
                            <div>
                                <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-1">Boş Belge</h2>
                                <p className="text-[#616f89] dark:text-slate-400 text-sm font-normal">Sıfırdan yazmaya başlayın.</p>
                            </div>
                        </Link>
                        <Link to="/editor" className="group flex flex-col gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-slate-700 bg-gradient-to-br from-white to-purple-50 dark:from-surface-dark dark:to-slate-800 hover:border-purple-500 hover:shadow-md transition-all text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <span className="material-symbols-outlined text-6xl">auto_awesome</span>
                            </div>
                            <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <div>
                                <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-1">AI ile Taslak</h2>
                                <p className="text-[#616f89] dark:text-slate-400 text-sm font-normal">Konuyu yazın, taslak oluşsun.</p>
                            </div>
                        </Link>
                    </div>

                     {/* Templates */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Önerilen Şablonlar</h2>
                            <a href="#" className="text-primary text-sm font-semibold hover:underline">Tümünü Gör</a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div onClick={() => navigate('/editor')} className="group cursor-pointer flex flex-col gap-3">
                                <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg aspect-[3/4] border border-[#dbdfe6] dark:border-slate-700 group-hover:border-primary group-hover:shadow-lg transition-all relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg-Wg9oaFzBxjSgRkIHR1pp4XKLGpYIV8sr6eTqQxYgO3T8lAeIfSyP3B4_AZ29laq4Xd07Wl5j_3dp_NT-slLCy3yVcNFlkGpLhVpccF5zgY4G-ulCHM5jXEfjTXLs89lsUbN40lESBPm8Qcoo04OO2FiXBK3IjiRJdf45NJpybY5drekzdswvmYhN_B-r6ughXjey9t_MYMO6bMp32ZzoCETVIE6ohiCworAYqd9nf1HsTlOo-azt8Ryh92baPkO5fIqwZNlmkWH")'}}></div>
                                <div>
                                    <p className="text-[#111318] dark:text-white text-sm font-semibold leading-normal group-hover:text-primary transition-colors">Akademik Makale</p>
                                    <p className="text-[#616f89] dark:text-slate-400 text-xs font-normal leading-normal">APA formatında</p>
                                </div>
                            </div>
                            <div onClick={() => navigate('/editor')} className="group cursor-pointer flex flex-col gap-3">
                                <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg aspect-[3/4] border border-[#dbdfe6] dark:border-slate-700 group-hover:border-primary group-hover:shadow-lg transition-all relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNTgQbAYgAPzGelmrXnIxGco0GrNK-7de_zZ05pIK9EABadS9IMFNHSzjOA3JbHhj2DqIjADdg3TvPULk47MiIyyoEe3IxtI8uCuYA52cYnGVPl0SqCkJ8ksIpAqjbkDv_qKx3Mv4J7PFdYLgJoQAnHyJ1Gf3Dem1MzTrYpOzPNz_6QeqBZcjEL3DqPfdeGr95knmF3q-cZNTGdK2Ge_7lwSRTnQs0N5Cz5m1QRph5uF0a12Dq6mAZQSkm1TFRKB4Rztd27jr9sZyD")'}}></div>
                                <div>
                                    <p className="text-[#111318] dark:text-white text-sm font-semibold leading-normal group-hover:text-primary transition-colors">Proje Raporu</p>
                                    <p className="text-[#616f89] dark:text-slate-400 text-xs font-normal leading-normal">Kapak ve içindekiler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ShareOverlay: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-2xl w-full max-w-[640px] overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#dbdfe6] dark:border-slate-700">
                    <h2 className="text-xl font-bold dark:text-white">Belgeyi Paylaş</h2>
                    <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><span className="material-symbols-outlined">close</span></button>
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <input className="w-full h-12 rounded-lg border border-[#dbdfe6] dark:border-slate-600 dark:bg-slate-800 dark:text-white px-4" placeholder="Kişi veya e-posta ekle" />
                    <div className="flex justify-end">
                        <button onClick={() => navigate(-1)} className="px-6 h-10 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg">Davet Gönder</button>
                    </div>
                    <div className="h-px bg-[#dbdfe6] dark:bg-slate-700 my-2"></div>
                    <h3 className="text-sm font-bold dark:text-white">Erişimi olanlar</h3>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">ES</div>
                            <div><p className="text-sm font-medium dark:text-white">Elif Şahin</p><p className="text-xs text-slate-500">elif@uni.edu</p></div>
                        </div>
                        <span className="text-sm text-slate-500">Düzenleyen</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const ExportOverlay: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white dark:bg-surface-dark w-full max-w-5xl h-[700px] rounded-xl shadow-2xl flex overflow-hidden">
                <div className="w-72 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-4">
                    <h2 className="text-lg font-bold mb-4 flex gap-2 dark:text-white"><span className="material-symbols-outlined text-primary">output</span> Dışa Aktar</h2>
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-600 shadow-sm text-primary mb-2">
                        <span className="material-symbols-outlined">picture_as_pdf</span>
                        <div className="text-left"><span className="block text-sm font-semibold">PDF Belgesi</span><span className="text-xs text-slate-500">.pdf</span></div>
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
                        <span className="material-symbols-outlined">description</span>
                        <div className="text-left"><span className="block text-sm font-medium">Word</span><span className="text-xs text-slate-400">.docx</span></div>
                    </button>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-700">
                        <h1 className="text-2xl font-bold dark:text-white">PDF Ayarları</h1>
                        <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-slate-400">close</span></button>
                    </div>
                    <div className="p-8 flex-1 overflow-y-auto">
                        <div className="max-w-2xl mx-auto space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-32 h-44 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 shadow-sm rounded-lg relative">
                                    <div className="absolute inset-0 flex items-center justify-center"><span className="material-symbols-outlined text-4xl text-slate-300">visibility</span></div>
                                </div>
                                <div><h3 className="font-semibold dark:text-white">Belge Önizlemesi</h3><p className="text-sm text-slate-500">A4, Dikey</p></div>
                            </div>
                            <button onClick={() => navigate(-1)} className="w-full py-2.5 bg-primary hover:bg-blue-700 text-white rounded-lg font-bold transition-colors">Dışa Aktar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

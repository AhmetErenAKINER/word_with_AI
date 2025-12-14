import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EditorHeader: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbdfe6] dark:border-slate-700 bg-white dark:bg-surface-dark px-6 py-3 shrink-0 z-20">
            <div className="flex items-center gap-4 text-[#111318] dark:text-white">
                <div onClick={() => navigate('/')} className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary cursor-pointer hover:bg-primary/20">
                    <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                    <h2 className="text-[#111318] dark:text-white text-base font-bold leading-tight tracking-[-0.015em]">Tez Taslağı v2.docx</h2>
                    <div className="flex gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        <button className="hover:text-primary transition-colors">Dosya</button>
                        <button className="hover:text-primary transition-colors">Düzenle</button>
                        <button className="hover:text-primary transition-colors">Görünüm</button>
                        <button className="hover:text-primary transition-colors">Ekle</button>
                        <button className="text-primary font-bold border-b-2 border-primary pb-0.5">Araçlar</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
                    <div className="flex gap-2">
                        <Link to="/share" className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition hover:bg-blue-700 shadow-sm">
                            <span className="truncate">Paylaş</span>
                        </Link>
                        <Link to="/export" className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-[#f0f2f4] dark:bg-slate-700 text-[#111318] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition text-sm font-semibold">
                            <span className="material-symbols-outlined text-[18px] mr-1">download</span>
                            İndir
                        </Link>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full h-9 w-9 ring-2 ring-slate-100 dark:ring-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiJjPjfizWlAKU1YqU4mm2aCQfEuBzo3NThWJNF0gmce3xeinpV0dPwtiuqS49JcWaqNTutTz2pVHF-OK9Lalz0MdUHt2J77KWbFcYuLgy_vkh21d7SobFUKM3JdwsTfeAYfpuqP5RkCTmYttC129zqIwk3e_tFVMtDWAfZvxQFnFR9WBKRB0IKMZrQKY5tNXy10NHnzLDsEw64Z15FxdcXPKlyk8SSmi--b9iurB47zyp5ZznQTH-n3PYnOIoScKvju2N3HXEOViX")'}}></div>
            </div>
        </header>
    );
}

const EditorPage: React.FC = () => {
    const [showToc, setShowToc] = useState(false);
    const [showRef, setShowRef] = useState(false);

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
            <EditorHeader />
            
            {/* Toolbar */}
            <div className="bg-white dark:bg-surface-dark border-b border-[#dbdfe6] dark:border-slate-700 px-6 py-2 shadow-sm shrink-0 z-10 flex items-center gap-4 overflow-x-auto">
                <div className="flex items-center gap-1 border-r border-slate-100 dark:border-slate-700 pr-4">
                    <button className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined">undo</span></button>
                    <button className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined">redo</span></button>
                </div>
                <div className="flex items-center gap-2 border-r border-slate-100 dark:border-slate-700 pr-4">
                    <select className="bg-transparent text-sm border-none p-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 rounded dark:text-white outline-none"><option>Normal Metin</option></select>
                    <select className="bg-transparent text-sm border-none p-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 rounded w-24 dark:text-white outline-none"><option>Inter</option></select>
                    <select className="bg-transparent text-sm border-none p-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 rounded w-16 dark:text-white outline-none"><option>11</option></select>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined">format_bold</span></button>
                    <button className="p-1.5 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined">format_italic</span></button>
                    <button className="p-1.5 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined">format_underlined</span></button>
                    <div className="h-4 w-[1px] bg-gray-200 dark:bg-slate-700 mx-2"></div>
                        <Link to="/table-tools" className="p-1.5 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined">table_chart</span></Link>
                        <Link to="/image-tools" className="p-1.5 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined">image</span></Link>
                        <Link to="/chart-tools" className="p-1.5 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined">bar_chart</span></Link>
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setShowToc(!showToc)} className={`p-1.5 rounded transition-colors ${showToc ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white'}`} title="İçindekiler"><span className="material-symbols-outlined">toc</span></button>
                    <button onClick={() => setShowRef(!showRef)} className={`p-1.5 rounded transition-colors ${showRef ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white'}`} title="Referanslar"><span className="material-symbols-outlined">menu_book</span></button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden relative">
                    {/* TOC Sidebar */}
                {showToc && (
                        <aside className="w-64 bg-white dark:bg-surface-dark border-r border-[#e5e7eb] dark:border-slate-700 hidden md:flex flex-col flex-shrink-0 z-10 overflow-y-auto">
                        <div className="p-4 border-b border-gray-100 dark:border-slate-700">
                            <h3 className="font-bold text-sm dark:text-white">İçindekiler</h3>
                        </div>
                        <div className="p-2">
                            <button className="w-full text-left px-3 py-2 text-sm font-medium text-primary bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-1">1. Giriş</button>
                            <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg mb-1">2. Literatür Taraması</button>
                            <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg pl-6">2.1. Tarihsel Gelişim</button>
                            <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg mb-1">3. Metodoloji</button>
                        </div>
                        </aside>
                )}

                <main className="flex-1 overflow-y-auto bg-[#f0f2f4] dark:bg-background-dark flex justify-center p-8 relative custom-scrollbar">
                    <div className="bg-white dark:bg-surface-light text-slate-900 w-full max-w-[816px] min-h-[1100px] shadow-sm p-[96px]">
                        <h1 className="text-3xl font-bold mb-6">Yapay Zeka Etiği Üzerine Bir İnceleme</h1>
                        <p className="text-lg italic text-slate-600 mb-8">Dr. Ahmet Yılmaz, Teknoloji Enstitüsü</p>
                        
                        <h2 className="text-xl font-bold mb-3 border-b border-gray-200 pb-1">1. Giriş</h2>
                        <p className="text-[11pt] leading-relaxed text-justify font-serif mb-6">
                            Yapay zeka (YZ) sistemlerinin toplumsal yaşamın her alanına nüfuz etmesiyle birlikte, bu teknolojilerin etik boyutları akademi ve endüstri dünyasında yoğun bir tartışma konusu haline gelmiştir. Bu çalışma, otonom sistemlerin karar alma süreçlerindeki ahlaki sorumluluklarını ele almaktadır.
                        </p>
                        
                        <h2 className="text-xl font-bold mb-3 border-b border-gray-200 pb-1">2. Literatür Taraması</h2>
                        <p className="text-[11pt] leading-relaxed text-justify font-serif mb-6">
                            Literatürde, YZ etiği genellikle üç ana başlık altında incelenmektedir: şeffaflık, hesap verebilirlik ve adalet. Bostrom (2014), süper zekanın getirebileceği varoluşsal risklere dikkat çekerken, diğer araştırmacılar mevcut dar yapay zeka uygulamalarının toplumsal eşitsizlikleri nasıl derinleştirebileceğine odaklanmaktadır.
                        </p>
                        <p className="text-[11pt] leading-relaxed text-justify font-serif mb-6">
                             Ayrıca, otonom araçlar ve silah sistemleri gibi kritik alanlarda etik algoritmaların nasıl kodlanacağı sorunu (Wallach & Allen, 2009) henüz tam olarak çözülememiştir.
                        </p>
                    </div>
                </main>

                    {/* References Sidebar */}
                    {showRef && (
                        <aside className="w-80 bg-white dark:bg-surface-dark border-l border-[#e5e7eb] dark:border-slate-700 flex flex-col flex-shrink-0 z-10 shadow-xl">
                        <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex justify-between">
                            <h3 className="font-bold text-sm dark:text-white">Kaynak Yönetimi</h3>
                            <button onClick={() => setShowRef(false)} className="dark:text-slate-400"><span className="material-symbols-outlined text-sm">close</span></button>
                        </div>
                        <div className="p-4 flex-1 overflow-y-auto">
                            <div className="bg-gray-50 dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-600 mb-4">
                                <div className="flex gap-2 items-center mb-2">
                                    <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                                    <span className="text-xs font-bold text-primary">AI Önerisi</span>
                                </div>
                                <p className="text-xs text-slate-700 dark:text-slate-300">Bu paragraf için (Bostrom, 2014) referansı eklemeniz öneriliyor.</p>
                                <button className="mt-2 text-xs text-primary font-bold hover:underline">Ekle</button>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 border dark:border-slate-600 rounded-lg hover:border-primary/50 cursor-pointer dark:bg-slate-800/50">
                                    <h4 className="text-sm font-bold dark:text-white">Superintelligence</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Bostrom, N. (2014)</p>
                                </div>
                                <div className="p-3 border dark:border-slate-600 rounded-lg hover:border-primary/50 cursor-pointer dark:bg-slate-800/50">
                                    <h4 className="text-sm font-bold dark:text-white">Moral Machines</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Wallach, W. & Allen, C. (2009)</p>
                                </div>
                            </div>
                        </div>
                        </aside>
                    )}
            </div>
        </div>
    );
};

export default EditorPage;

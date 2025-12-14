import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinkProps } from '../types';

const NavLinkItem: React.FC<NavLinkProps> = ({ to, icon, label, onClick }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link 
            to={to} 
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                active 
                ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
        >
            <span className={`material-symbols-outlined ${active ? 'icon-filled' : 'text-slate-500 group-hover:text-primary'}`}>
                {icon}
            </span>
            <span className="text-sm font-medium">{label}</span>
        </Link>
    );
};

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 transition-colors duration-200 hidden md:flex">
            <div className="p-5 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2hB6cj-9xTqvfUuQZD7Ys8s73bRGSDGWZDKJNliH4mWJbWJJixcFvQfcAUUEnsgY5kc36iYJZV2rV0AnFFUS2xMZGI7An8LZ2ZxiHD90ADGGOIoVWN8QQRHgNSNpc3Azk9Lj9LtrRp3XEpXTCrrAX4IEKlUV2FSfHDxAnOHc5DiIFmuvjyNJtKHIUcuefi4qnF6W_vLtYPySmsSyuyBNEmHKONzM6YMpZF0YaIfgT-LQVKjjIJNJFQdPfpNLzK26x8RIHMxhFA7Cs")'}}></div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">DocuEditor</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Akademik Sürüm</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-1 flex-1">
                    <NavLinkItem to="/" icon="home" label="Ana Sayfa" />
                    <NavLinkItem to="/documents" icon="folder_open" label="Benim Belgelerim" />
                    <NavLinkItem to="/shared" icon="group" label="Paylaşılanlar" />
                    <NavLinkItem to="/favorites" icon="star" label="Favoriler" />
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-2 mx-3"></div>
                    <NavLinkItem to="/trash" icon="delete" label="Çöp Kutusu" />
                    <NavLinkItem to="/settings" icon="settings" label="Ayarlar" />
                    <NavLinkItem to="/help" icon="help" label="Yardım" />
                </nav>
                <div className="px-3 pb-2">
                    <div className="flex justify-between text-xs mb-2 text-slate-500 dark:text-slate-400">
                        <span>Depolama</span>
                        <span>75%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-primary h-1.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">15 GB / 20 GB kullanıldı</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

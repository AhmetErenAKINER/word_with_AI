export interface FileItem {
    name: string;
    time: string;
    size: string;
    icon: string;
    color: string;
}

export interface NavLinkProps {
    to: string;
    icon: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

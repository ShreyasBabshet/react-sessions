 export interface SideNavProps {} 
export interface MenuItem {
    id: string;
    name: string;
}

export interface SideNavProps {
    menuItems: MenuItem[];
    onNavigate: (id: string) => void;
}
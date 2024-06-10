import styles from "./SideNav.module.scss"; 
import { SideNavProps } from "./SideNav.types.ts" 
 
const SideNav = ({ menuItems, onNavigate }: SideNavProps) => { 
    return (
        <div>
            {
                menuItems.map(item => {
                    return <div 
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                    >{item.name}</div>
                })
            }
        </div>
    )
} 
 
export default SideNav 

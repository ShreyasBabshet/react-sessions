import { withAuth } from "../../Auth.context.tsx";
import styles from "./Dashboard.module.scss"; 
import { DashboardProps } from "./Dashboard.types.ts" 
 
const Dashboard = ({}: DashboardProps) => {
    return <>Dashboard</> 
} 
 
export default  withAuth(Dashboard) 

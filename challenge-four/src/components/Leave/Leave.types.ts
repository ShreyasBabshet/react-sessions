import { ReactNode } from "react";

export interface ILeave {
    date: string;
}

export interface LeaveProps extends ILeave {
    children: ReactNode;
} 

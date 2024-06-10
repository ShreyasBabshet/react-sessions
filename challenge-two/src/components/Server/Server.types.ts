type Status = "ONLINE" | "OFFLINE"

export interface Server {
    name: string;
    status: Status;
}

export interface ServerProps extends Server {
    on: () => void;
    off: () => void;
} 

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AppState {
    rows: User[];
    showLoader: boolean;
    showDeleteModal: boolean;
    showEditModal: boolean;
    selectedUser: User | null;
    pageNumber: number;
    pageSize: number;
}

export interface Action {
    type: string;
    data?: any;
}

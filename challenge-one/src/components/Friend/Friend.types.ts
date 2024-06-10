interface Address {
    city: string;
    country: string;
}

export interface FriendProps {
    name: string;
    age: number;
    address: Address;
    hobbies: string[];
    // incrementAge: () => void;
    incrementAge(): void
}
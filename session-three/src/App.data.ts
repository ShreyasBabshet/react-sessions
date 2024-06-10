import { User } from "./App.types";
import { Column } from "./components/Table/Table.types";

export const columns: Column<User>[] = [
    { id: "name", displayText: 'Name' },
    { id: "email", displayText: "Email" },
];
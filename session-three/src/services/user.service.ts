import { User } from "../App.types";
import axios from "../axios.service";


export const getUsersAPI = async () => {
    try {
        const { status, data } = await axios.get("/users");
        if(status !== 200) throw "";

        return data;
    } catch(e) {
        throw Error("could not feth users");
    }
}

export const deleteUserAPI = async (id: number) => {
    try {
        const { status, data } = await axios.delete(`/users/${id}`);
        if(status !== 200) throw "";

        return data;
    } catch(e) {
        throw Error("could not feth users");
    }
}

export const updateUserAPI = async (user: User) => {
    try {
        const { status, data } = await axios.put(`/users/${user.id}`, user);
        if(status !== 200) throw "";

        return data;
    } catch(e) {
        throw Error("could not feth users");
    }
}
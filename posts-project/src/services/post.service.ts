import axios from "../../axios.instance.ts";

const getPosts = async () => {
    try {
        const { data, status } = await axios.get("/posts");
        if(status !== 200) throw "";

        return data;
    } catch (e) {
        throw new Error("Could not fetch posts");
    }
}

export default {
    getPosts
}
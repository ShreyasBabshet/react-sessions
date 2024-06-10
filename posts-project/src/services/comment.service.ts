import axios from "../../axios.instance.ts";

const getComments = async (postId: string) => {
    try {
        const { data, status } = await axios.get(`/comments?postId=${postId}`);
        if(status !== 200) throw "";

        return data;
    } catch (e) {
        throw new Error("Could not fetch posts");
    }
}

export default {
    getComments
}
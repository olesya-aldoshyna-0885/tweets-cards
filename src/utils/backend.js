import axios from "axios";

const BASE_URL = "https://64243f43d6152a4d480a4f40.mockapi.io";

export const getUsers = async (page) => {
     const response = await axios.get(`${BASE_URL}/users?page=${page}&limit=3`);
    return response.data;
}

export async function updateFollowers(userId, action) {
    const url = `${BASE_URL}/users/${userId}`;

    try {
        const response = await axios.get(url);
        const user = response.data;

        const updatedFollowers = action === "increment" ? user.followers - 1 : user.followers + 1;
        const data = await axios.put(url, { ...user, followers: updatedFollowers });
        return data.data;
    } catch (err) { 
        console.error(err);
    }
}
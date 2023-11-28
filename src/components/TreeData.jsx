import axios from "../utils/axiosInstance";

export const TreeData = async (limit,skip) => {
  try {
    const response = await axios.get(`/api/tree/get?limit=${limit}&skip=${skip}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching Trees:", error.message);
    throw error;
  }
};
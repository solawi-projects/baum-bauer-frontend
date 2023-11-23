import axios from "../utils/axiosInstance";

export const TreeData = async () => {
  try {
    const response = await axios.get("/api/Tree/get");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching Trees:", error.message);
    throw error;
  }
};
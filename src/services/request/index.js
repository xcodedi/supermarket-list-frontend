import api from "../api";

export const getList = async () => {
  try {
    const response = await api.get("/list-items");
    return response.data;
  } catch (erro) {
    alert("Error to get list");
  }
};

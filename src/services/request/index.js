import api from "../api";

export const getList = async () => {
  try {
    const response = await api.get("/list-items");
    return response.data;
  } catch (error) {
    alert("Error to get list");
  }
};

export const createItem = async (item) => {
  try {
    const response = await api.post("/list-item", item);
    return response.data;
  } catch (error) {
    alert("Error to create item");
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await api.put(`/list-item/${id}`, item);
    return response.data;
  } catch (error) {
    alert("Error to update item");
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/list-item/${id}`);
    return response.data;
  } catch (error) {
    alert("Error to delete item");
  }
};

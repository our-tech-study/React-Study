import { API_URL, http } from "./http"

export const fetchUsers = async () => {
  const response = await http.get(`${API_URL}/users`)
  return response.data
}

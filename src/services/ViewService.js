const API_URL = 'http://localhost:3001/api';
export const viewUserService = async () => {
  try {
    const response = await fetch(`${API_URL}/userserviceslist/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const viewClientRequest = async () => {
  try {
    const response = await fetch(`${API_URL}/clientrequest/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

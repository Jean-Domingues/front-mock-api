import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000"
});

const apiMock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

apiMock.onGet("/users").reply(200, {
  users: [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Jean Domingues" },
    { id: 3, name: "Clark Kent" },
    { id: 4, name: "Peter Parker" },
    { id: 5, name: "Bruce Wayne" },
    { id: 6, name: "Bruce Wayne" },
    { id: 7, name: "Bruce Wayne" },
    { id: 8, name: "Bruce Wayne" },
    { id: 9, name: "Bruce Wayne" },
  ],
});

export async function getUsers() {
  const response = await axiosInstance.get("/users");
  return response.data
}



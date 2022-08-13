import axios from "axios";

export async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function postUser(name: string) {
  axios
    .post("/user", {
      firstName: name,
      lastName: name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

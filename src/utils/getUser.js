function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user
    ? user
    : {
        loggedIn: false,
        role: "anonymous",
      };
}

export default getUser;

function getCookies() {
  const cookiesString = document.cookie;
  const cookiesArray = cookiesString.split("; ");

  const cookiesObject = {};

  cookiesArray.forEach((cookie) => {
    const [name, value] = cookie.split("=");
    cookiesObject[name] = value;
  });
  return cookiesObject;
}

export default getCookies
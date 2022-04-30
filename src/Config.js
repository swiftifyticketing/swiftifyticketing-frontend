export const apiEndPoint = () => {
  return "https://swiftifyticketing-backend.herokuapp.com";
};

export const configHeader = () => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return config;
};

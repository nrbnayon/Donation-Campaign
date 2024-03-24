export const saveToLocalStorage = (data) => {
  // Check if the localStorage item is present and not null
  const savedDataStr = localStorage.getItem("donation");
  const savedData = savedDataStr ? JSON.parse(savedDataStr) : [];

  const existedData = savedData.find((item) => item.id === parseInt(data.id));
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("donation", JSON.stringify(savedData));
  }
  //   else {
  //     alert("This Data Already Existed");
  //   }
};

export const getFromLocalStoredData = () => {
  const storedDataStr = localStorage.getItem("donation");
  if (storedDataStr) {
    const savedStoredData = storedDataStr ? JSON.parse(storedDataStr) : [];
    return savedStoredData;
  } else {
    return [];
  }
};

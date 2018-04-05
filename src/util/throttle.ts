const throttle = (inputFunction: () => void, wait: number) => {
  let time = Date.now();
  return () => {
    if (time + wait - Date.now() < 0) {
      inputFunction();
      time = Date.now();
    }
  };
};

export default throttle;

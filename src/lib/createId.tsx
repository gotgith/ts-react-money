let id = 0;

const createID = () => {
  id += 1;
  return id;
};

export {createID};

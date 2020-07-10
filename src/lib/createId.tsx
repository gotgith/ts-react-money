let id = parseInt(window.localStorage.getItem('idMax') || '0');

const createID = () => {
  id += 1;
  window.localStorage.setItem('idMax', id.toString());
  return id;
};

export {createID};

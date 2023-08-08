const storage = {
  save: (name: string, data: any): void => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(name, dataJSON);
  },
  get: (name: string): any => {
    if (localStorage.getItem(name)) {
      const strResult: string | null | any = localStorage.getItem(name);
      return JSON.parse(strResult);
    }
    return undefined;
  },
  set: (name: string, data: any): void => {
    const strJSON = JSON.stringify(data);
    localStorage.setItem(name, strJSON);
  },
  clear: (name: string) => {
    localStorage.removeItem(name);
  },
};
export default storage;

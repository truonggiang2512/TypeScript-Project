const storage = {
  save: (name: string, data: any) => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(name, dataJSON);
  },
  get: (name: string) => {
    if (localStorage.getItem(name)) {
      const dataJSON: string | null | any = localStorage.getItem(name);
      const data = JSON.parse(dataJSON);
      return data;
    }
    return undefined;
  },
  clear: (name: string) => {
    localStorage.removeItem(name);
  },
};
export default storage;

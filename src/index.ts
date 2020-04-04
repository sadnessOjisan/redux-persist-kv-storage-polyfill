export default function createWebStorage(type: string) {
  return {
    getItem: (key: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        console.log("getItem fire");
        // TODO: impl
        resolve();
      });
    },
    setItem: (key: string, item: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        console.log("setItem fire");
        // TODO: impl
        resolve();
      });
    },
    removeItem: (key: string): Promise<void> => {
      console.log("removeItem fire");
      return new Promise((resolve, reject) => {
        // TODO: impl
        resolve();
      });
    },
  };
}

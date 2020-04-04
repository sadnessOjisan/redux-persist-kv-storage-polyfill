export default function createWebStorage(type: string) {
  return {
    getItem: (key: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        // TODO: impl
        resolve();
      });
    },
    setItem: (key: string, item: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // TODO: impl
        resolve();
      });
    },
    removeItem: (key: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // TODO: impl
        resolve();
      });
    },
  };
}

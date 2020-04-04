import storage from "kv-storage-polyfill";

export default function createWebStorage(type: string) {
  return {
    getItem: async (key: string): Promise<string> => {
      console.log("getItem fire");
      return storage.default.get(key);
    },
    setItem: async (key: string, item: string): Promise<void> => {
      storage.default.set(key, item);
    },
    removeItem: async (key: string): Promise<void> => {
      storage.default.delete(key);
    },
  };
}

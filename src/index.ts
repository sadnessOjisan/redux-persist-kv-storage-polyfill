// import { storage } from "std:kv-storage";
import { StorageArea } from "kv-storage-polyfill";
const storage = new StorageArea("unique string");
export default function createWebStorage() {
  return {
    getItem: async (key: string): Promise<string> => {
      console.log("key", key);
      return await storage.getItem(key);
    },
    setItem: async (key: string, item: string): Promise<void> => {
      console.log("storage", storage);
      await storage.set(key, item);
    },
    removeItem: async (key: string): Promise<void> => {
      await storage.delete(key);
    },
  };
}

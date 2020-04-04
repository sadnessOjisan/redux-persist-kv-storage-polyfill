// import { storage } from "std:kv-storage";
import { StorageArea } from "kv-storage-polyfill";
const storage = new StorageArea("kv");

export default function createWebStorage() {
  return {
    getItem: async (key: string): Promise<string> => {
      return await storage.get(key);
    },
    setItem: async (key: string, item: string): Promise<void> => {
      await storage.set(key, item);
    },
    removeItem: async (key: string): Promise<void> => {
      await storage.delete(key);
    },
  };
}

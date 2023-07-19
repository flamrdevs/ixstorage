type IXStorage<T extends any> = {
  set: (value: T) => T;
  get: () => T;
  del: () => void;
};

const ixstorage = <T extends any>(key: string, initialValue: T, storage: globalThis.Storage = localStorage): IXStorage<T> => {
  return {
    set: (value: T): T => {
      try {
        storage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
      return value;
    },
    get: (): T => {
      try {
        let item = storage.getItem(key);
        if (item) return JSON.parse(item);
      } catch (error) {
        console.error(error);
      }
      return initialValue;
    },
    del: (): void => {
      try {
        storage.removeItem(key);
      } catch (error) {
        console.error(error);
      }
    },
  };
};

export type { IXStorage };
export default ixstorage;

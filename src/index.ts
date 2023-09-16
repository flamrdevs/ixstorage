type IXStorage<T extends any> = {
  /**
   * @description set value
   *
   * @param value new value
   * @returns value
   */
  set: (value: T) => T;
  /**
   * @description get value
   *
   * @returns value
   */
  get: () => T;
  /**
   * @description delete value
   *
   * @returns void
   */
  del: () => void;
};

/**
 *
 * @param key storage key
 * @param initialValue initial value
 * @param storage storage
 * @returns storage actions
 */
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

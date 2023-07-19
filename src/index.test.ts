import { describe, expect, it } from "vitest";

import ixstorage from ".";

describe("ixstorage", () => {
  it("With localStorage", () => {
    type State = "light" | "dark";

    const KEY = "local";

    const storage = ixstorage<State>(KEY, "light");

    const expects = (equalStorageGet: State, equalStorageGetItem: string | null) => {
      expect(storage.get()).toEqual(equalStorageGet);
      expect(localStorage.getItem(KEY)).toEqual(equalStorageGetItem);
    };

    expects("light", null);

    storage.set("dark");

    expects("dark", `"dark"`);

    storage.del();

    expects("light", null);
  });

  it("With sessionStorage", () => {
    type State = "light" | "dark";

    const KEY = "session";

    const storage = ixstorage<State>(KEY, "light", sessionStorage);

    const expects = (equalStorageGet: State, equalStorageGetItem: string | null) => {
      expect(storage.get()).toEqual(equalStorageGet);
      expect(sessionStorage.getItem(KEY)).toEqual(equalStorageGetItem);
    };

    expects("light", null);

    storage.set("dark");

    expects("dark", `"dark"`);

    storage.del();

    expects("light", null);
  });
});

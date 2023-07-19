# ixstorage

simple storage

## Usage

```ts
import ixstorage from "ixstorage";

const storage = ixstorage("hello", "world");

storage.get(); // world

storage.set("ixstorage");

storage.get(); // ixstorage

storage.del();

storage.get(); // world
```

## License

MIT

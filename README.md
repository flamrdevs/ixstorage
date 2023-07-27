<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstorage/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="license" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixstorage">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/npm/version?t=dark&n=ixstorage">
      <img alt="version" src="https://flamrdevs.cyclic.app/npm/version?t=light&n=ixstorage" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixstorage">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixstorage">
      <img alt="size" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixstorage" hspace="1">
    </picture>
  </a>
</p>

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

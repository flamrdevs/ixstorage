<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstorage/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/ixstorage?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/ixstorage?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixstorage">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/ixstorage?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/ixstorage?t=light" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixstorage">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz/ixstorage?t=dark">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz/ixstorage?t=light" hspace="1">
    </picture>
  </a>
</p>

<h1 id="ixstorage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=rocket">
    <img alt="lucide rocket" src="https://none.deno.dev/ui/icon/lucide?t=light&i=rocket" hspace="1">
  </picture>
  <span>
    ixstorage
  </span>
</h1>

simple storage

<h2 id="usage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=code">
    <img alt="lucide code" src="https://none.deno.dev/ui/icon/lucide?t=light&i=code" hspace="1">
  </picture>
  <span>
    usage
  </span>
</h2>

```ts
import ixstorage from "ixstorage";

const storage = ixstorage("hello", "world");

storage.get(); // world

storage.set("ixstorage");

storage.get(); // ixstorage

storage.del();

storage.get(); // world
```

<h2 id="license">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=scale">
    <img alt="lucide scale" src="https://none.deno.dev/ui/icon/lucide?t=light&i=scale" hspace="1">
  </picture>
  <span>
    license
  </span>
</h2>

MIT

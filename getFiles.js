async function* getFiles(dir) {
    const dirEntries = await readdir(dir, { withFileTypes: true });
    for (const dirEntry of dirEntries) {
      const res = resolve(dir, dirEntry.name);
      if (dirEntry.isDirectory()) {
        yield* getFiles(res);
      } else {
        yield res;
      }
    }
  }
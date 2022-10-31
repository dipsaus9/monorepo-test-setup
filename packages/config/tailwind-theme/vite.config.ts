import path from "path"

import { defineConfig } from "vite"

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id)

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "tailwind-theme",
    },
    rollupOptions: {
      external: isExternal,
    },
  },
})

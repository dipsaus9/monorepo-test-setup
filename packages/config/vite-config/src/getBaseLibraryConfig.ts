import path from "path"

import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { PluginOption, UserConfigExport } from "vite"

export function getBaseLibraryConfig(dirname: string): UserConfigExport {
  const isExternal = (id: string) => {
    if (id.includes("tailwind")) {
      return false
    }

    return !id.startsWith(".") && !path.isAbsolute(id)
  }

  return {
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    build: {
      lib: {
        entry: path.resolve(dirname, "src/main.ts"),
        formats: ["es"],
      },
      rollupOptions: {
        external: isExternal,
      },
    },
    plugins: [
      peerDepsExternal({
        packageJsonPath: path.resolve(dirname, "./package.json"),
      }) as unknown as PluginOption,
    ],
  }
}

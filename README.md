# Nodejs  CLI template

nodejs + typescript + commander + clack + tsup nodejs CLI template

##  Getting started 
- modify the  [package.json](./package.json)
  
  - rebrand it 
  ```json

  "author": {
    "name": "tigawanna"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tigawanna/cli-template.git"
  },
  ```
  - modify your final binary name
   ```json
  "bin": {
    "cli-template": "dist/index.js"
  },
  ```
- modify the  [LICENSE](./LICENSE)

## adding commands 

- define your command
    
```ts
    import { loadingSpinner } from "#/src/utils/helpers/clack/spinner";
import { Command } from "commander";

const program = new Command();
export const defaultCommand = program.command('404', { isDefault: true })
  .argument('[args...]', 'Catch all arguments/flags provided.')
  // .argument("[inputs...]", "string to split")
  .option('-y, --yes', 'Accept all defaults', true)
  .allowUnknownOption()
  .action((args) => {
    // // maybe show help as fallback.
    // program.help();
    console.log("catch all command ", args)
    const spinner = loadingSpinner();
    spinner.add("main", { text: "task success" });
    setTimeout(() => {
      spinner.succeed("main", { text: "task success" });
    }, 3000);
    
  });

  ```

  add it to the root command
  
  ```ts
  #!/usr/bin/env node

import { Command } from "commander";
import { addCommand } from "./commands/add/add";
import { getPkgJson } from "@/utils/helpers/pkg-json";
import { printHelpers } from "@/utils/helpers/print-tools";
import { testCommand } from "./commands/test/test";


const program = new Command();

program.name("okcli").description("cli toolkit for frontend development");
program.hook("preSubcommand", async(_) => {
const pkg_json = await getPkgJson();
  if (!pkg_json) {
    return
  }
if(pkg_json.workspaces){
    printHelpers.warning("You appear to be in a workspace , \n consider running this command in your web project's root directory");
    process.exit(1)
  }
})
program.addCommand(addCommand);
program.addCommand(testCommand);

// program.addCommand(defaultCommand);
program.command('404', { isDefault: true })
    .description("catch all command")
    .argument('[args...]', 'Catch all arguments/flags provided.')
    .allowUnknownOption()
    .action(() => {
        program.help();
     });


program.parse();

```

to test your commands you can
- yarn/npm link it to your working directory 
or run pnpm install with the path to your cli-tool

while inside the directory you want to test it in.
ex: `C:/Users/admin/Desktop/code/react/nextjs/my-app
`
```sh
pwd 
C:/Users/admin/Desktop/code/react/nextjs/my-app
```

```sh
pnpm install C:/Users/admin/Desktop/code/npm/cli-template
```


Then you can run it like any other package defined in your package.json

```sh
pnpm cli-template
```

or do a global install 
```sh
pnpm install -g C:/Users/admin/Desktop/code/npm/cli-template
```
```sh
cli-template
```

Running `pnpm dev` will re-build your CLI on every change

And when you are ready to release you can run `pnpm release` or `pnpm release-it`

tip:
- use tsx to run any typescript files directly instad of ts-node
- run pretty to format your code
- you can disable sourcemaps , dts and only output esm on tsup since this is s CLI tool andthe end user won't be directly interacting with it's code and have a final smaller output
```ts
import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  // dts: true,
  sourcemap: true,
  treeshake: true,
  splitting: true,
  clean: true,
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm"],
});

```

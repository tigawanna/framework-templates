# okcli-app-templates

Sipmle project to get all the frontend framwork templates in one diretory 

why: I use it for testing 

## commands

- fresh
```sh
npx okcli-app-templates fresh
```
Creates the templates using the framework's cli scripts.

⚠️ This command can take a while since Nextjs has 4 possible folder structures and doesn't inject the`package.json` dependancies until it has installed everything.
the node_modules directories are removed after the install

options

```ts
  .option("-fw, --frameworks <frameworks...>", "frameworks to  scaffold")
  .option("-r, --react <react_frameworks...>", "react frameworks to  scaffold")
  .option("-d, --dir <dir>", "path to add to")
 ```
ex:
```sh
npx okcli-app-templates fresh --frameworks react --react nextjs vite-react-spa rakkas --dir src/test-apps
```

This vcan be used to narrow down the projects to be scaffolded , providing none will get everything



- clone
  
```sh
  npx okcli-app-templates clone
  ```
This will do a git clone from the repository
```sh
https://github.com/tigawanna/framework-templates.git
```





## scripts used
```ts
export const next_apps_script = [
    "npx --yes create-next-app app-dir-with-src --typescript --tailwind --eslint --app --src-dir --import-alias '@/' --use-pnpm",
    "npx --yes create-next-app app-dir-no-src --typescript --tailwind --eslint --app --src-dir false --import-alias '@/' --use-pnpm",
    "npx --yes  create-next-app pages-dir-with-src --typescript --tailwind --eslint --app false --src-dir --import-alias '@/' --use-pnpm",
    "npx --yes create-next-app pages-dir-no-src --typescript --tailwind --eslint --app false --src-dir false --import-alias '@/' --use-pnpm",
]
export const rakkas_apps_script = [
    "npx --yes create-rakkas-app@latest rakkas-app -y",
]
export const vite_app_script = [
    "npm create --yes vite@latest my-react-app -- --template react-ts",
]

export const framework_enums = ["react"] as const;
export const react_framework_enums = ["nextjs", "rakkas", "vite-react-spa"] as const;

```

# create-app-template

Sipmle project to get all the frontend framwork templates in one diretory 

why: I use it for testing 

## commands

- fresh
```sh
npx create-app-template fresh
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
npx create-app-template fresh --frameworks react --react nextjs vite-react-spa rakkas --dir src/test-apps
```

This vcan be used to narrow down the projects to be scaffolded , providing none will get everything



- clone
  
```sh
  npx create-app-template clone
  ```
This will do a git clone from the repository
```sh
https://github.com/tigawanna/framework-templates.git
```




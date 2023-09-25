
import { Command } from "commander";
import { printHelpers } from "#/src/utils/helpers/print-tools";
import { TFreshOptions, fresh_command_options } from "./fresh-commnad-args";
import { createViteSpaApp, createRakkasApp, createNextApps } from "#/src/utils/installers/create-react-apps";


const program = new Command();

export const freshCommand = program
  .command("fresh")
  .description("fresh install from with framework install scripts , might take a while")
// .argument("[inputs...]", "string to split")
  .option("-fw, --frameworks <frameworks...>", "frameworks to  scaffold")
  .option("-r, --react <react_frameworks...>", "react frameworks to  scaffold")
  .option("-d, --dir <dir>", "path to add to")
  .option('-y, --yes', 'Accept all defaults', false)
  .action(async (options) => {
    try {
      const fresh_options = await fresh_command_options(options);
      
      if (!fresh_options || !fresh_options?.frameworks){
        await freshInstallReactTemplates(fresh_options)
        return
      }
      if(fresh_options.frameworks.includes("react")){
        await freshInstallReactTemplates(fresh_options)
      }


    } catch (error: any) {
      printHelpers.error("error scaffolding: "+ error.message);
      process.exit(1);
      
    }

  });

  async function freshInstallReactTemplates(options?:TFreshOptions){
    try {
      
      if (!options || (options&&!options?.react)){
        await createViteSpaApp(options?.dir)
        await createRakkasApp(options?.dir)
        await createNextApps(options?.dir)
        return
      }

      if (options?.react?.includes("nextjs")){
        await createNextApps(options?.dir)
      }
      if(options?.react?.includes("rakkas")){
        await createRakkasApp(options?.dir)
      }
      if(options?.react?.includes("vite-react-spa")){
        await createViteSpaApp(options?.dir)
      }
   
    } catch (error:any) {
      printHelpers.error("error scaffolding react templates: "+ error.message);
    }
  }



//   export async function listfreshablePackages(config: TOkCliConfigSchema,fresh_options?:TAddOptions) {
//   const result = await multiselectPrompt<TAddArgs[number]>({
//     /* REQUIRED OPTIONS */
//     message: "Which packages would you like to add?", // The message that the user will read
//     options: [
//       { label: "TailwindCSS", value: "tailwind" },
//       { label: "PandaCSS", value: "panda" },
//       { label: "Tanstack", value: "tanstack" },
//     ]
//   });

//   const packages = result && result;
//   if (packages) {
//     // if (packages.includes("tailwind")) {
//     //   await installTailwind(config);
//     // }
//     // if (packages.includes("panda")) {
//     //   await installPanda(config);
//     // }
//     // if (packages.includes("tanstack")) {
//     //   await installTanstack(config,add_options);
//     // }
//     await promptToInstall(add_options)
//   }
// }

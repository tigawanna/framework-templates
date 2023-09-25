
import { Command } from "commander";
import { printHelpers } from "#/src/utils/helpers/print-tools";


const program = new Command();

export const addCommand = program
  .command("add")
  .description("add packages to your project")
  // .argument("[inputs...]", "string to split")
  .option("-fw, --framework <framework...>", "frameworks to add")
  .option('-y, --yes', 'Accept all defaults', false)
  .action(async (options) => {
    // const config = await getBonitaConfig();
    printHelpers.success("add command with options", options)
  // printHelpers.debug("add command with options", options)
  


  });



//   export async function listAddablePackages(config: TOkCliConfigSchema,add_options?:TAddOptions) {
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

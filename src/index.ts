#!/usr/bin/env node

import { Command } from "commander";
import { getPkgJson } from "@/utils/helpers/pkg-json";
import { printHelpers } from "@/utils/helpers/print-tools";
import { freshCommand } from "./commands/fresh/fresh";
import { cloneCommand } from "./commands/clone/clone";




const program = new Command();

program
.name("create-framework-template")
.description("cli tool for creating scaffolding javascript frameworks , for testing purposes")

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

program.addCommand(freshCommand);
program.addCommand(cloneCommand);

program.command('404', { isDefault: true })
    .description("catch all command")
    .argument('[args...]', 'Catch all arguments/flags provided.')
    .allowUnknownOption()
    .action(() => {
        program.help();
     });


program.parse();

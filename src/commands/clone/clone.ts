import { cloneRepository } from "#/src/utils/helpers/repos/get-repo";
import { Command } from "commander";

const program = new Command();

export const cloneCommand = program
  .command("clone")
  .description("clone the framework templates from github")
  // .argument("[inputs...]", "string to split")
  .option("-fw, --framework <framework...>", "frameworks to clone")
  .option('-y, --yes', 'Accept all defaults', false)
  .action(async (options) => {
    await cloneRepository("https://github.com/tigawanna/framework-templates.git","fw-templates")

  });





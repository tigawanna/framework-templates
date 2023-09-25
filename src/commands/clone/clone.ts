import { cloneRepository, getRepoAndExtractADirectory } from "#/src/utils/helpers/repos/get-repo";
import { Command } from "commander";

const program = new Command();

export const cloneCommand = program
  .command("clone")
  .description("clone the framework templates from github")
  // .argument("[inputs...]", "string to split")
  .option("-fw, --framework <framework...>", "frameworks to clone")
  .option('-y, --yes', 'Accept all defaults', false)
  .action(async (options) => {
    // await cloneRepository("https://github.com/tigawanna/framework-templates.git","fw-templates")
    await getRepoAndExtractADirectory(
      {url:"https://github.com/tigawanna/framework-templates.git",
      project_name:"fw-temp",
      dir_to_extract:"templates",
      path_to_extract_to:"test-templates"})
  });





import { execa } from "execa";
import { cwd } from "process";
import { loadingSpinner } from "../clack/spinner";
import {cp, readdir} from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { removeDirectory } from "../fs/directories";
import { printHelpers } from "../print-tools";

export async function cloneRepository(url: string, name: string) {
  try {
    const destination = path.resolve(name);
    if (existsSync(destination)) {
      await removeDirectory(destination)
    }
    await execa("git", ["clone", url, name]);
    return cwd();
  } catch (error: any) {
    throw new Error("error cloning repository " + error.message);
  }
}

interface IGetRepoAndExtractADirectory{
  url: string,
  project_name: string,
  dir_to_extract: string,
  path_to_extract_to: string
}

export async function getRepoAndExtractADirectory({url, project_name, dir_to_extract, path_to_extract_to}: IGetRepoAndExtractADirectory){
  const spinner = loadingSpinner()
  try {
    spinner.add("clone", { text: "Getting templates " + url });
    const cloned_repo =  await cloneRepository(url, project_name);
    const desired_dir = path.resolve(project_name + "/" + dir_to_extract)
    const destination = path.resolve(path_to_extract_to)
    if(existsSync(desired_dir)){
      if(existsSync(destination)){
       await removeDirectory(destination)
      }

        await cp(desired_dir, destination, { recursive: true })
   
    }
    
    spinner.succeed("success ", { text: "successfully added templates to "  + destination });

  return cwd();
  } catch (error: any) {
    spinner.fail("error getting templates", { text: error.message });
    throw new Error("error getting templates " + error.message);
  }
}

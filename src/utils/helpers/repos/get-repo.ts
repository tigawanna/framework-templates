import { execa } from "execa";
import { cwd } from "process";
import { loadingSpinner } from "../clack/spinner";
import {cp, readdir} from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function cloneRepository(url: string, name: string) {
  try {
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
    spinner.add("clone", { text: "cloning " + url });
    const cloned_repo =  await cloneRepository(url, project_name);
    const desired_dir = path.resolve(cloned_repo + "/" + dir_to_extract)
    if(existsSync(desired_dir)){
      const destination = path.resolve(path_to_extract_to)
      await cp(desired_dir, destination)
    }
    
  spinner.succeed("successful clone", { text: "successfully cloned" + url });

  return cwd();
  } catch (error: any) {
    spinner.succeed("error cloning", { text: error.message });
    throw new Error("error cloning repository " + error.message);
  }
}

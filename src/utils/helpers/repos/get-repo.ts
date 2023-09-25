import { execa } from "execa";
import { cwd } from "process";

export async function cloneRepository(url: string, name: string) {
  try {
    await execa("git", ["clone", url, name]);
    return cwd();
  } catch (error: any) {
    throw new Error("error cloning repository " + error.message);
  }
}


export async function getRepoAndExtractADirectory(url: string, name: string) {
  try {
    const cloned_repo =  await cloneRepository(url, name);
  return cwd();
  } catch (error: any) {
    throw new Error("error cloning repository " + error.message);
  }
}

import { loadingSpinner } from "#/src/utils/helpers/clack/spinner";
import { removeDirectory } from "#/src/utils/helpers/fs/directories";
import { printHelpers } from "#/src/utils/helpers/print-tools";
import { execa } from "execa";
import { existsSync, mkdirSync } from "fs";
import path from "path";


export async function createViteSpaApp(dir_path = "templates/vite") {
  try {
    const template_path = path.resolve(dir_path);
    if (existsSync(template_path)) {
      // printHelpers.info("cleaning directory");
      await removeDirectory(template_path);
    }
    mkdirSync(template_path, { recursive: true });

    const spinner = loadingSpinner();
    spinner.add("main", { text: "adding vite app " });

    await execa(
      "npm create --yes vite@latest my-react-app -- --template react-ts",
      [""],
      { cwd: template_path }
    )
      .then((res) => {
        spinner.succeed("main", { text: res.command + "\n added vite-react-spa" });

      })

      .catch((error) => {
        spinner.fail("main", { text: "error adding  vite spa" });
        printHelpers.error(error);
        throw error
      });


    // await execCommandWithliveStdio("pnpm create vite vite-app  --template react-ts", { cwd: template_path })

  }
  catch (error: any) {
    throw error
  }
}
export async function createRakkasApp(dir_path = "templates/rakkas") {
  try {
    const template_path = path.resolve(dir_path);
    if (existsSync(template_path)) {
      // printHelpers.info("cleaning directory");
      await removeDirectory(template_path);
    }

    mkdirSync(template_path, { recursive: true });

    const spinner = loadingSpinner();
    spinner.add("main", { text: "adding rakkas app " });
    await execa(
      "npx",
      ["create-rakkas-app@latest", template_path + "/rakkas-app", "-y"],
      {}
    )
      .then((res) => {
        spinner.succeed("main", { text: res.command + "\n added rakkas app" });
      })
      .catch((error) => {
        spinner.fail("main", { text: "error adding  rakkas" });
        printHelpers.error(error);
      });

    // await execCommandWithliveStdio("pnpm dlx create-rakkas-app@latest rakkas-app -y", { cwd: template_path })

  } catch (error: any) {
    throw error
  }
}

export async function createNextApps(dir_path="templates/nextjs") {
  try {
    const nextjs_templates_path = path.resolve(dir_path);
    if (existsSync(nextjs_templates_path)) {
      // printHelpers.info("cleaning directory");
      await removeDirectory(nextjs_templates_path);
    }
    mkdirSync(nextjs_templates_path, { recursive: true });
    const spinner = loadingSpinner();
    spinner.add("main", { text: "adding nextjs app-dir-with-src" });
    await execa(
      "pnpm dlx",
      [
        "create-next-app", nextjs_templates_path + "/app_dir_with_src", "--ts", "--tailwind",
        "--eslint", "--app", "--src-dir", "--import-alias", "'@/'", "--use-pnpm",
      ],
      {}
    )
      .then(async (res) => {
        spinner.succeed("main", { text: res.command + "\n added next app-dir-with-src" });
        await removeDirectory(nextjs_templates_path + "/app_dir_with_src/node_modules");
      })
      .catch((error) => {
        spinner.fail("main", { text: "error adding  nextjs app-dir-with-src" });

        printHelpers.error(error);
      });

    spinner.add("main", { text: "adding nextjs app-dir-no-src" });
    await execa("pnpm dlx", [
      "create-next-app",
      nextjs_templates_path + "/app_dir_no_src",
      "--ts",
      "--tailwind",
      "--eslint",
      "--app",
      "--src-dir",
      "false",
      "--import-alias",
      "'@/'",
      "--use-pnpm",
    ])
      .then(async (res) => {
        spinner.succeed("main", { text: res.command + "\n added next app-dir-no-src" });
        await removeDirectory(nextjs_templates_path + "/app_dir_no_src/node_modules");
      })
      .catch((error) => {
        spinner.fail("main", { text: "error adding  nextjs app-dir-no-src" });
        printHelpers.error(error.message);
      });

    spinner.add("main", { text: "adding nextjs pages-dir-with-src" });

    await execa("pnpm dlx", [
      "create-next-app",
      nextjs_templates_path + "/pages_dir_with_src",
      "--ts",
      "--tailwind",
      "--eslint",
      "--app",
      "false",
      "--src-dir",
      "--import-alias",
      "'@/'",
      "--use-pnpm",
    ])
      .then(async (res) => {
        spinner.succeed("main", { text: res.command + "\n added next pages-dir-with-src" });
        await removeDirectory(nextjs_templates_path + "/pages_dir_with_src/node_modules");
      })
      .catch((error) => {
        spinner.fail("main", { text: "error adding  nextjs pages_with_src" });
        printHelpers.error(error.message);
      });

    await execa("pnpm dlx", [
      "create-next-app",
      nextjs_templates_path + "/pages_dir_no_src",
      "--ts",
      "--tailwind",
      "--eslint",
      "--app",
      "false",
      "--src-dir",
      "false",
      "--import-alias",
      "'@/'",
      "--use-pnpm",
    ])
      .then(async (res) => {
        spinner.succeed("main", { text: res.command + "\n added next pages-dir-no-src" });
        await removeDirectory(nextjs_templates_path + "/pages_dir_no_src/node_modules");
      })
      .catch((error) => {
        spinner.fail("main", { text: "error adding  nextjs pages-dir-no-src" });
        printHelpers.error(error.message);
      });
  } catch (error: any) {
    throw error;
  }
}




// createNextApps()
// createRakkasApp()
//   .then((res) => {
//     printHelpers.success("succesfully created  apps");
//   })
//   .catch((error) => {
//     printHelpers.error(error);
//   });



// installAll().then((res) => {
//   printHelpers.success("succesfully created  apps");
// }).catch((error) => {
//   printHelpers.error(error);
// })

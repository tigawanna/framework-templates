import { framework_enums,react_framework_enums } from "#/src/utils/installers/config";
import { printHelpers } from "@/utils/helpers/print-tools";
import { z } from "zod";


const fresh_args = [""] as const;
const freshArgsShema = z.array(z.enum(fresh_args));
export type TfreshArgs = z.infer<typeof freshArgsShema>;

export async function fresh_command_args(args: any) {
  try {
    const parsed_args = await freshArgsShema.parse(args);
    return parsed_args;
  } catch (error: any) {
    printHelpers.error("invalid arguments: " + error.message);
    process.exit(1);
  }
}

const freshOptionsShema = z.object({
  react: z.array(z.enum(react_framework_enums)).optional(),
  frameworks: z.array(z.enum(framework_enums)).optional(),
  yes:z.boolean().default(false),
  dir: z.string().optional(),
});

export type TFreshOptions = z.infer<typeof freshOptionsShema>;
export async function fresh_command_options(options: any) {
  try {
    const parsed_options = await freshOptionsShema.parse(options);
    return parsed_options;
  } catch (error: any) {
    printHelpers.error("invalid arguments: " + error.message);
    return
    // process.exit(1);
  }
}

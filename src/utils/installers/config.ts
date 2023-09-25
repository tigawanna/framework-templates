export const next_apps_script = [
    "npx --yes create-next-app app-dir-with-src --typescript --tailwind --eslint --app --src-dir --import-alias '@/' --use-pnpm",
    "npx --yes create-next-app app-dir-no-src --typescript --tailwind --eslint --app --src-dir false --import-alias '@/' --use-pnpm",
    "npx --yes  create-next-app pages-dir-with-src --typescript --tailwind --eslint --app false --src-dir --import-alias '@/' --use-pnpm",
    "npx --yes create-next-app pages-dir-no-src --typescript --tailwind --eslint --app false --src-dir false --import-alias '@/' --use-pnpm",
]
export const rakkas_apps_script = [
    "npx --yes create-rakkas-app@latest rakkas-app -y",
]
export const vite_app_script = [
    "npm create --yes vite@latest my-react-app -- --template react-ts",
]

export const framework_enums = ["react"] as const;
export const react_framework_enums = ["nextjs", "rakkas", "vite-react-spa"] as const;

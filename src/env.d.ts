/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "@fontsource/space-mono";
declare module "@fontsource/monoton";
declare module "@fontsource-variable/lexend-deca";

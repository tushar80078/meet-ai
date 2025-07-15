import { Polar } from "@polar-sh/sdk";

export const polarClient = new Polar({
  accessToken: process.env.POLAR_ACESS_TOKEN,
  server: "sandbox",
});

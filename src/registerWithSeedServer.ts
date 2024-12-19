import fetch from "cross-fetch";
export function registerWithSeedServer(uri: string) {
  return fetch(`${uri}/register`, {
    method: "POST",
    body: JSON.stringify({
      user: process.env.USER_NAME,
      uri: `http://${process.env.USER_NAME}:${process.env.PORT}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

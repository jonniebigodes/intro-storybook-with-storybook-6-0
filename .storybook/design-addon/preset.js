// .storybook/my-addon/preset.js

/* export function config(entry = []) {
  return [...entry, require.resolve("./defaultParameters")];
} */

export function managerEntries(entries) {
  console.log(`managerEntries:${JSON.stringify(entries, null, 2)}`);
  return [...entries, require.resolve("./register")];
}

// export const parameters = {
//   backgrounds: {
//     values: [
//       { name: "light", value: "#F8F8F8" },
//       { name: "dark", value: "#333333" },
//     ],
//   },
// };

import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/v1/graphql",
  documents: ["**/*.{ts,tsx}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

"use client";

import { type PropsWithChildren } from "react";
import { ApolloProvider as Provider } from "@apollo/client";
import { client } from "./apollo";

const ApolloProvider = ({ children }: PropsWithChildren<{}>) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;

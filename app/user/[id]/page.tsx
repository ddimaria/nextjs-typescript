"use client";

import { ApolloError, useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import { type Users_Set_Input as User } from "@/__generated__/graphql"; // feels hacky

type PageParams = { params: { id: string } };

function getUser(id: string): [User | null, boolean, ApolloError | undefined] {
  const GET_USER = gql(`
    query User($id: uuid!) {
      users_by_pk(id: $id) {
        id
        first_name
        last_name
        email
      }
    }
  `);

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
  });

  const user = data?.users_by_pk ? data.users_by_pk : null;

  return [user, loading, error];
}

export default function PageUser({ params }: PageParams) {
  const [user, loading, _error] = getUser(params.id);

  return (
    <>
      <h1 className="text-3xl font-bold">User</h1>
      {!loading && (
        <>
          <div>ID: {user?.id}</div>
          <div>
            Name: {user?.first_name} {user?.last_name}
          </div>
          <div>Email: {user?.email}</div>
        </>
      )}
    </>
  );
}

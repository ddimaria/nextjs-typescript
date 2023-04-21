"use client";

import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import Link from "next/link";

export default function PageUsers() {
  const GET_USERS = gql(`
    query GetUsers {
      users(limit: 10) {
        id
        first_name
        last_name
        email
      }
    }
  `);

  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return `Error! ${error}`;

  return (
    <>
      <h1 className="text-3xl font-bold">Users</h1>
      {!loading &&
        data?.users.map((user: any) => (
          <div key={user.id}>
            <Link href={`user/${user.id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </div>
        ))}
    </>
  );
}

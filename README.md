# nextjs-typescript

## Installation

First, install dependencies:

```shell
nvm use 16
npx playwright install
npm i
```

Copy the `.env.example` file and configure to your own environment:

```shell
cp .env.example .env
```

## Development

### Dependent Services

First, start the Postgres and Hasura Docker container:

```shell
docker compose up -d
```

Now you can access the Hasura Console at http://localhost:8080/console.

Click on the `Data` tab, select the `Environment Variable` option in the `Connect Database Via` section and enter `PG_DATABASE_URL` as the environment variable name.  Now, click on the `Connect Database` button.

### NextJS Development Server

To start the development server:

```shell
npm run dev
```

### Auto Generating Apollo GraphQL Types

For type safety, we can generate TypeScript types for every GraphQL query.  These types need to be regenerated anytime the GraphQL schema changes.

```shell
npm run compile:graphql
```

## Testing

### Unit

To kickoff the Jest tests:

```shell
npm run test
```

### E2E

To kickoff the Playwright e2e tests:

```shell
npm run test:e2e
```

## SQL

_TODO(ddimaria): actually create migrations in Hasura or some other migration tool_

```sql
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id uuid PRIMARY KEY,
  name varchar(100) NOT NULL,
  quantity integer NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL,
  order_date timestamptz NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS order_detail (
  id uuid PRIMARY KEY,
  order_id uuid NOT NULL,
  item_id uuid NOT NULL,
  quantity integer NOT NULL DEFAULT 0,
  CONSTRAINT fk_order FOREIGN KEY(order_id) REFERENCES orders(id),
  CONSTRAINT fk_item FOREIGN KEY(item_id) REFERENCES items(id)
);

insert into users (id, first_name, last_name, email)
values ('00000000-0000-0000-0000-000000000000', 'David', 'DiMaria', 'david@littlebearlabs.io');

insert into items (id, name, quantity)
values 
('10000000-0000-0000-0000-000000000000', 'widget 1', 99),
('20000000-0000-0000-0000-000000000000', 'widget 2', 98),
('30000000-0000-0000-0000-000000000000', 'widget 3', 97);


insert into orders (id, user_id)
values ('11000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000');

insert into order_detail (id, order_id, item_id, quantity)
values 
('11100000-0000-0000-0000-000000000000', '11000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000000', 1),
('11200000-0000-0000-0000-000000000000', '11000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000000', 2),
('11300000-0000-0000-0000-000000000000', '11000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000000', 3);
```
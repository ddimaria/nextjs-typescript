/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  order_details: Array<Order_Detail>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Detail_Aggregate;
  quantity: Scalars['Int'];
};


/** columns and relationships of "items" */
export type ItemsOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


/** columns and relationships of "items" */
export type ItemsOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  avg?: Maybe<Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
  stddev?: Maybe<Items_Stddev_Fields>;
  stddev_pop?: Maybe<Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Items_Stddev_Samp_Fields>;
  sum?: Maybe<Items_Sum_Fields>;
  var_pop?: Maybe<Items_Var_Pop_Fields>;
  var_samp?: Maybe<Items_Var_Samp_Fields>;
  variance?: Maybe<Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Items_Avg_Fields = {
  __typename?: 'items_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: InputMaybe<Array<Items_Bool_Exp>>;
  _not?: InputMaybe<Items_Bool_Exp>;
  _or?: InputMaybe<Array<Items_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_details?: InputMaybe<Order_Detail_Bool_Exp>;
  order_details_aggregate?: InputMaybe<Order_Detail_Aggregate_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemsPkey = 'items_pkey'
}

/** input type for incrementing numeric columns in table "items" */
export type Items_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  order_details?: InputMaybe<Order_Detail_Arr_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Items_On_Conflict>;
};

/** on_conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns?: Array<Items_Update_Column>;
  where?: InputMaybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_details_aggregate?: InputMaybe<Order_Detail_Aggregate_Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Items_Stddev_Fields = {
  __typename?: 'items_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Items_Stddev_Pop_Fields = {
  __typename?: 'items_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Items_Stddev_Samp_Fields = {
  __typename?: 'items_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "items" */
export type Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Items_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Items_Sum_Fields = {
  __typename?: 'items_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Quantity = 'quantity'
}

export type Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Items_Var_Pop_Fields = {
  __typename?: 'items_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Items_Var_Samp_Fields = {
  __typename?: 'items_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Items_Variance_Fields = {
  __typename?: 'items_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "order_detail" */
  delete_order_detail?: Maybe<Order_Detail_Mutation_Response>;
  /** delete single row from the table: "order_detail" */
  delete_order_detail_by_pk?: Maybe<Order_Detail>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "order_detail" */
  insert_order_detail?: Maybe<Order_Detail_Mutation_Response>;
  /** insert a single row into the table: "order_detail" */
  insert_order_detail_one?: Maybe<Order_Detail>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update multiples rows of table: "items" */
  update_items_many?: Maybe<Array<Maybe<Items_Mutation_Response>>>;
  /** update data of the table: "order_detail" */
  update_order_detail?: Maybe<Order_Detail_Mutation_Response>;
  /** update single row of the table: "order_detail" */
  update_order_detail_by_pk?: Maybe<Order_Detail>;
  /** update multiples rows of table: "order_detail" */
  update_order_detail_many?: Maybe<Array<Maybe<Order_Detail_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_DetailArgs = {
  where: Order_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Detail_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_DetailArgs = {
  objects: Array<Order_Detail_Insert_Input>;
  on_conflict?: InputMaybe<Order_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Detail_OneArgs = {
  object: Order_Detail_Insert_Input;
  on_conflict?: InputMaybe<Order_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _inc?: InputMaybe<Items_Inc_Input>;
  _set?: InputMaybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _inc?: InputMaybe<Items_Inc_Input>;
  _set?: InputMaybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Items_ManyArgs = {
  updates: Array<Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_DetailArgs = {
  _inc?: InputMaybe<Order_Detail_Inc_Input>;
  _set?: InputMaybe<Order_Detail_Set_Input>;
  where: Order_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Detail_By_PkArgs = {
  _inc?: InputMaybe<Order_Detail_Inc_Input>;
  _set?: InputMaybe<Order_Detail_Set_Input>;
  pk_columns: Order_Detail_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Detail_ManyArgs = {
  updates: Array<Order_Detail_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_detail" */
export type Order_Detail = {
  __typename?: 'order_detail';
  id: Scalars['uuid'];
  /** An object relationship */
  item: Items;
  item_id: Scalars['uuid'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['uuid'];
  quantity: Scalars['Int'];
};

/** aggregated selection of "order_detail" */
export type Order_Detail_Aggregate = {
  __typename?: 'order_detail_aggregate';
  aggregate?: Maybe<Order_Detail_Aggregate_Fields>;
  nodes: Array<Order_Detail>;
};

export type Order_Detail_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Detail_Aggregate_Bool_Exp_Count>;
};

export type Order_Detail_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Detail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Order_Detail_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_detail" */
export type Order_Detail_Aggregate_Fields = {
  __typename?: 'order_detail_aggregate_fields';
  avg?: Maybe<Order_Detail_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Detail_Max_Fields>;
  min?: Maybe<Order_Detail_Min_Fields>;
  stddev?: Maybe<Order_Detail_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Detail_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Detail_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Detail_Sum_Fields>;
  var_pop?: Maybe<Order_Detail_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Detail_Var_Samp_Fields>;
  variance?: Maybe<Order_Detail_Variance_Fields>;
};


/** aggregate fields of "order_detail" */
export type Order_Detail_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Detail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_detail" */
export type Order_Detail_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Detail_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Detail_Max_Order_By>;
  min?: InputMaybe<Order_Detail_Min_Order_By>;
  stddev?: InputMaybe<Order_Detail_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Detail_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Detail_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Detail_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Detail_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Detail_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Detail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_detail" */
export type Order_Detail_Arr_Rel_Insert_Input = {
  data: Array<Order_Detail_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Detail_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Detail_Avg_Fields = {
  __typename?: 'order_detail_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_detail" */
export type Order_Detail_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_detail". All fields are combined with a logical 'AND'. */
export type Order_Detail_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Detail_Bool_Exp>>;
  _not?: InputMaybe<Order_Detail_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Detail_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Items_Bool_Exp>;
  item_id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_detail" */
export enum Order_Detail_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderDetailPkey = 'order_detail_pkey'
}

/** input type for incrementing numeric columns in table "order_detail" */
export type Order_Detail_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_detail" */
export type Order_Detail_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  item?: InputMaybe<Items_Obj_Rel_Insert_Input>;
  item_id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Detail_Max_Fields = {
  __typename?: 'order_detail_max_fields';
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_detail" */
export type Order_Detail_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Detail_Min_Fields = {
  __typename?: 'order_detail_min_fields';
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_detail" */
export type Order_Detail_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_detail" */
export type Order_Detail_Mutation_Response = {
  __typename?: 'order_detail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Detail>;
};

/** on_conflict condition type for table "order_detail" */
export type Order_Detail_On_Conflict = {
  constraint: Order_Detail_Constraint;
  update_columns?: Array<Order_Detail_Update_Column>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};

/** Ordering options when selecting data from "order_detail". */
export type Order_Detail_Order_By = {
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Items_Order_By>;
  item_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_detail */
export type Order_Detail_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_detail" */
export enum Order_Detail_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "order_detail" */
export type Order_Detail_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  order_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Detail_Stddev_Fields = {
  __typename?: 'order_detail_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_detail" */
export type Order_Detail_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Detail_Stddev_Pop_Fields = {
  __typename?: 'order_detail_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_detail" */
export type Order_Detail_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Detail_Stddev_Samp_Fields = {
  __typename?: 'order_detail_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_detail" */
export type Order_Detail_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_detail" */
export type Order_Detail_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Detail_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Detail_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  order_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Order_Detail_Sum_Fields = {
  __typename?: 'order_detail_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_detail" */
export type Order_Detail_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_detail" */
export enum Order_Detail_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity'
}

export type Order_Detail_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Detail_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Detail_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Detail_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Detail_Var_Pop_Fields = {
  __typename?: 'order_detail_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_detail" */
export type Order_Detail_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Detail_Var_Samp_Fields = {
  __typename?: 'order_detail_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_detail" */
export type Order_Detail_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Detail_Variance_Fields = {
  __typename?: 'order_detail_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_detail" */
export type Order_Detail_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  id: Scalars['uuid'];
  order_date: Scalars['timestamptz'];
  /** An array relationship */
  order_details: Array<Order_Detail>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Detail_Aggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_details?: InputMaybe<Order_Detail_Bool_Exp>;
  order_details_aggregate?: InputMaybe<Order_Detail_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  order_details?: InputMaybe<Order_Detail_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  id?: Maybe<Scalars['uuid']>;
  order_date?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  id?: Maybe<Scalars['uuid']>;
  order_date?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_details_aggregate?: InputMaybe<Order_Detail_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UserId = 'user_id'
}

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "order_detail" */
  order_detail: Array<Order_Detail>;
  /** fetch aggregated fields from the table: "order_detail" */
  order_detail_aggregate: Order_Detail_Aggregate;
  /** fetch data from the table: "order_detail" using primary key columns */
  order_detail_by_pk?: Maybe<Order_Detail>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrder_DetailArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


export type Query_RootOrder_Detail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


export type Query_RootOrder_Detail_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table in a streaming manner: "items" */
  items_stream: Array<Items>;
  /** fetch data from the table: "order_detail" */
  order_detail: Array<Order_Detail>;
  /** fetch aggregated fields from the table: "order_detail" */
  order_detail_aggregate: Order_Detail_Aggregate;
  /** fetch data from the table: "order_detail" using primary key columns */
  order_detail_by_pk?: Maybe<Order_Detail>;
  /** fetch data from the table in a streaming manner: "order_detail" */
  order_detail_stream: Array<Order_Detail>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootItems_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootOrder_DetailArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


export type Subscription_RootOrder_Detail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Detail_Order_By>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


export type Subscription_RootOrder_Detail_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_Detail_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Detail_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Detail_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, first_name: string, last_name: string, email: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, first_name: string, last_name: string, email: string }> };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
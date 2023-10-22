
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Accepted
 * 
 */
export type Accepted = $Result.DefaultSelection<Prisma.$AcceptedPayload>
/**
 * Model Agile
 * 
 */
export type Agile = $Result.DefaultSelection<Prisma.$AgilePayload>
/**
 * Model All
 * 
 */
export type All = $Result.DefaultSelection<Prisma.$AllPayload>
/**
 * Model DevOps_Deployment_Methodology
 * 
 */
export type DevOps_Deployment_Methodology = $Result.DefaultSelection<Prisma.$DevOps_Deployment_MethodologyPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model Scrum_Methodology
 * 
 */
export type Scrum_Methodology = $Result.DefaultSelection<Prisma.$Scrum_MethodologyPayload>
/**
 * Model Test_Driven_Development
 * 
 */
export type Test_Driven_Development = $Result.DefaultSelection<Prisma.$Test_Driven_DevelopmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accepteds
 * const accepteds = await prisma.accepted.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accepteds
   * const accepteds = await prisma.accepted.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accepted`: Exposes CRUD operations for the **Accepted** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accepteds
    * const accepteds = await prisma.accepted.findMany()
    * ```
    */
  get accepted(): Prisma.AcceptedDelegate<ExtArgs>;

  /**
   * `prisma.agile`: Exposes CRUD operations for the **Agile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agiles
    * const agiles = await prisma.agile.findMany()
    * ```
    */
  get agile(): Prisma.AgileDelegate<ExtArgs>;

  /**
   * `prisma.all`: Exposes CRUD operations for the **All** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alls
    * const alls = await prisma.all.findMany()
    * ```
    */
  get all(): Prisma.AllDelegate<ExtArgs>;

  /**
   * `prisma.devOps_Deployment_Methodology`: Exposes CRUD operations for the **DevOps_Deployment_Methodology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DevOps_Deployment_Methodologies
    * const devOps_Deployment_Methodologies = await prisma.devOps_Deployment_Methodology.findMany()
    * ```
    */
  get devOps_Deployment_Methodology(): Prisma.DevOps_Deployment_MethodologyDelegate<ExtArgs>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs>;

  /**
   * `prisma.scrum_Methodology`: Exposes CRUD operations for the **Scrum_Methodology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scrum_Methodologies
    * const scrum_Methodologies = await prisma.scrum_Methodology.findMany()
    * ```
    */
  get scrum_Methodology(): Prisma.Scrum_MethodologyDelegate<ExtArgs>;

  /**
   * `prisma.test_Driven_Development`: Exposes CRUD operations for the **Test_Driven_Development** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_Driven_Developments
    * const test_Driven_Developments = await prisma.test_Driven_Development.findMany()
    * ```
    */
  get test_Driven_Development(): Prisma.Test_Driven_DevelopmentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Accepted: 'Accepted',
    Agile: 'Agile',
    All: 'All',
    DevOps_Deployment_Methodology: 'DevOps_Deployment_Methodology',
    Form: 'Form',
    Scrum_Methodology: 'Scrum_Methodology',
    Test_Driven_Development: 'Test_Driven_Development'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'accepted' | 'agile' | 'all' | 'devOps_Deployment_Methodology' | 'form' | 'scrum_Methodology' | 'test_Driven_Development'
      txIsolationLevel: never
    },
    model: {
      Accepted: {
        payload: Prisma.$AcceptedPayload<ExtArgs>
        fields: Prisma.AcceptedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcceptedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcceptedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>
          }
          findFirst: {
            args: Prisma.AcceptedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcceptedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>
          }
          findMany: {
            args: Prisma.AcceptedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>[]
          }
          create: {
            args: Prisma.AcceptedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>
          }
          createMany: {
            args: Prisma.AcceptedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AcceptedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>
          }
          update: {
            args: Prisma.AcceptedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>
          }
          deleteMany: {
            args: Prisma.AcceptedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AcceptedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AcceptedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcceptedPayload>
          }
          aggregate: {
            args: Prisma.AcceptedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccepted>
          }
          groupBy: {
            args: Prisma.AcceptedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AcceptedGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AcceptedFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AcceptedAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AcceptedCountArgs<ExtArgs>,
            result: $Utils.Optional<AcceptedCountAggregateOutputType> | number
          }
        }
      }
      Agile: {
        payload: Prisma.$AgilePayload<ExtArgs>
        fields: Prisma.AgileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>
          }
          findFirst: {
            args: Prisma.AgileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>
          }
          findMany: {
            args: Prisma.AgileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>[]
          }
          create: {
            args: Prisma.AgileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>
          }
          createMany: {
            args: Prisma.AgileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AgileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>
          }
          update: {
            args: Prisma.AgileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>
          }
          deleteMany: {
            args: Prisma.AgileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AgileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AgileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgilePayload>
          }
          aggregate: {
            args: Prisma.AgileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAgile>
          }
          groupBy: {
            args: Prisma.AgileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AgileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AgileFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AgileAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AgileCountArgs<ExtArgs>,
            result: $Utils.Optional<AgileCountAggregateOutputType> | number
          }
        }
      }
      All: {
        payload: Prisma.$AllPayload<ExtArgs>
        fields: Prisma.AllFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>
          }
          findFirst: {
            args: Prisma.AllFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>
          }
          findMany: {
            args: Prisma.AllFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>[]
          }
          create: {
            args: Prisma.AllCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>
          }
          createMany: {
            args: Prisma.AllCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AllDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>
          }
          update: {
            args: Prisma.AllUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>
          }
          deleteMany: {
            args: Prisma.AllDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AllUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AllUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllPayload>
          }
          aggregate: {
            args: Prisma.AllAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAll>
          }
          groupBy: {
            args: Prisma.AllGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AllGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AllFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AllAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AllCountArgs<ExtArgs>,
            result: $Utils.Optional<AllCountAggregateOutputType> | number
          }
        }
      }
      DevOps_Deployment_Methodology: {
        payload: Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>
        fields: Prisma.DevOps_Deployment_MethodologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevOps_Deployment_MethodologyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevOps_Deployment_MethodologyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>
          }
          findFirst: {
            args: Prisma.DevOps_Deployment_MethodologyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevOps_Deployment_MethodologyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>
          }
          findMany: {
            args: Prisma.DevOps_Deployment_MethodologyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>[]
          }
          create: {
            args: Prisma.DevOps_Deployment_MethodologyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>
          }
          createMany: {
            args: Prisma.DevOps_Deployment_MethodologyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DevOps_Deployment_MethodologyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>
          }
          update: {
            args: Prisma.DevOps_Deployment_MethodologyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>
          }
          deleteMany: {
            args: Prisma.DevOps_Deployment_MethodologyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DevOps_Deployment_MethodologyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DevOps_Deployment_MethodologyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevOps_Deployment_MethodologyPayload>
          }
          aggregate: {
            args: Prisma.DevOps_Deployment_MethodologyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDevOps_Deployment_Methodology>
          }
          groupBy: {
            args: Prisma.DevOps_Deployment_MethodologyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DevOps_Deployment_MethodologyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DevOps_Deployment_MethodologyFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DevOps_Deployment_MethodologyAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DevOps_Deployment_MethodologyCountArgs<ExtArgs>,
            result: $Utils.Optional<DevOps_Deployment_MethodologyCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FormFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FormAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>,
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      Scrum_Methodology: {
        payload: Prisma.$Scrum_MethodologyPayload<ExtArgs>
        fields: Prisma.Scrum_MethodologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Scrum_MethodologyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Scrum_MethodologyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>
          }
          findFirst: {
            args: Prisma.Scrum_MethodologyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Scrum_MethodologyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>
          }
          findMany: {
            args: Prisma.Scrum_MethodologyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>[]
          }
          create: {
            args: Prisma.Scrum_MethodologyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>
          }
          createMany: {
            args: Prisma.Scrum_MethodologyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Scrum_MethodologyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>
          }
          update: {
            args: Prisma.Scrum_MethodologyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>
          }
          deleteMany: {
            args: Prisma.Scrum_MethodologyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Scrum_MethodologyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Scrum_MethodologyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Scrum_MethodologyPayload>
          }
          aggregate: {
            args: Prisma.Scrum_MethodologyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScrum_Methodology>
          }
          groupBy: {
            args: Prisma.Scrum_MethodologyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Scrum_MethodologyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Scrum_MethodologyFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Scrum_MethodologyAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Scrum_MethodologyCountArgs<ExtArgs>,
            result: $Utils.Optional<Scrum_MethodologyCountAggregateOutputType> | number
          }
        }
      }
      Test_Driven_Development: {
        payload: Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>
        fields: Prisma.Test_Driven_DevelopmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Test_Driven_DevelopmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Test_Driven_DevelopmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>
          }
          findFirst: {
            args: Prisma.Test_Driven_DevelopmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Test_Driven_DevelopmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>
          }
          findMany: {
            args: Prisma.Test_Driven_DevelopmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>[]
          }
          create: {
            args: Prisma.Test_Driven_DevelopmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>
          }
          createMany: {
            args: Prisma.Test_Driven_DevelopmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Test_Driven_DevelopmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>
          }
          update: {
            args: Prisma.Test_Driven_DevelopmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>
          }
          deleteMany: {
            args: Prisma.Test_Driven_DevelopmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Test_Driven_DevelopmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Test_Driven_DevelopmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Test_Driven_DevelopmentPayload>
          }
          aggregate: {
            args: Prisma.Test_Driven_DevelopmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest_Driven_Development>
          }
          groupBy: {
            args: Prisma.Test_Driven_DevelopmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Test_Driven_DevelopmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Test_Driven_DevelopmentFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Test_Driven_DevelopmentAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Test_Driven_DevelopmentCountArgs<ExtArgs>,
            result: $Utils.Optional<Test_Driven_DevelopmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Accepted
   */

  export type AggregateAccepted = {
    _count: AcceptedCountAggregateOutputType | null
    _min: AcceptedMinAggregateOutputType | null
    _max: AcceptedMaxAggregateOutputType | null
  }

  export type AcceptedMinAggregateOutputType = {
    id: string | null
  }

  export type AcceptedMaxAggregateOutputType = {
    id: string | null
  }

  export type AcceptedCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type AcceptedMinAggregateInputType = {
    id?: true
  }

  export type AcceptedMaxAggregateInputType = {
    id?: true
  }

  export type AcceptedCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type AcceptedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accepted to aggregate.
     */
    where?: AcceptedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accepteds to fetch.
     */
    orderBy?: AcceptedOrderByWithRelationInput | AcceptedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcceptedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accepteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accepteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accepteds
    **/
    _count?: true | AcceptedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcceptedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcceptedMaxAggregateInputType
  }

  export type GetAcceptedAggregateType<T extends AcceptedAggregateArgs> = {
        [P in keyof T & keyof AggregateAccepted]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccepted[P]>
      : GetScalarType<T[P], AggregateAccepted[P]>
  }




  export type AcceptedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedWhereInput
    orderBy?: AcceptedOrderByWithAggregationInput | AcceptedOrderByWithAggregationInput[]
    by: AcceptedScalarFieldEnum[] | AcceptedScalarFieldEnum
    having?: AcceptedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcceptedCountAggregateInputType | true
    _min?: AcceptedMinAggregateInputType
    _max?: AcceptedMaxAggregateInputType
  }

  export type AcceptedGroupByOutputType = {
    id: string
    _count: AcceptedCountAggregateOutputType | null
    _min: AcceptedMinAggregateOutputType | null
    _max: AcceptedMaxAggregateOutputType | null
  }

  type GetAcceptedGroupByPayload<T extends AcceptedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcceptedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcceptedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcceptedGroupByOutputType[P]>
            : GetScalarType<T[P], AcceptedGroupByOutputType[P]>
        }
      >
    >


  export type AcceptedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["accepted"]>

  export type AcceptedSelectScalar = {
    id?: boolean
  }


  export type $AcceptedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accepted"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["accepted"]>
    composites: {}
  }


  type AcceptedGetPayload<S extends boolean | null | undefined | AcceptedDefaultArgs> = $Result.GetResult<Prisma.$AcceptedPayload, S>

  type AcceptedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AcceptedFindManyArgs, 'select' | 'include'> & {
      select?: AcceptedCountAggregateInputType | true
    }

  export interface AcceptedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accepted'], meta: { name: 'Accepted' } }
    /**
     * Find zero or one Accepted that matches the filter.
     * @param {AcceptedFindUniqueArgs} args - Arguments to find a Accepted
     * @example
     * // Get one Accepted
     * const accepted = await prisma.accepted.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AcceptedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AcceptedFindUniqueArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Accepted that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AcceptedFindUniqueOrThrowArgs} args - Arguments to find a Accepted
     * @example
     * // Get one Accepted
     * const accepted = await prisma.accepted.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AcceptedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AcceptedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Accepted that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedFindFirstArgs} args - Arguments to find a Accepted
     * @example
     * // Get one Accepted
     * const accepted = await prisma.accepted.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AcceptedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AcceptedFindFirstArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Accepted that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedFindFirstOrThrowArgs} args - Arguments to find a Accepted
     * @example
     * // Get one Accepted
     * const accepted = await prisma.accepted.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AcceptedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AcceptedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accepteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accepteds
     * const accepteds = await prisma.accepted.findMany()
     * 
     * // Get first 10 Accepteds
     * const accepteds = await prisma.accepted.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acceptedWithIdOnly = await prisma.accepted.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AcceptedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcceptedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Accepted.
     * @param {AcceptedCreateArgs} args - Arguments to create a Accepted.
     * @example
     * // Create one Accepted
     * const Accepted = await prisma.accepted.create({
     *   data: {
     *     // ... data to create a Accepted
     *   }
     * })
     * 
    **/
    create<T extends AcceptedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AcceptedCreateArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accepteds.
     *     @param {AcceptedCreateManyArgs} args - Arguments to create many Accepteds.
     *     @example
     *     // Create many Accepteds
     *     const accepted = await prisma.accepted.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AcceptedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcceptedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accepted.
     * @param {AcceptedDeleteArgs} args - Arguments to delete one Accepted.
     * @example
     * // Delete one Accepted
     * const Accepted = await prisma.accepted.delete({
     *   where: {
     *     // ... filter to delete one Accepted
     *   }
     * })
     * 
    **/
    delete<T extends AcceptedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AcceptedDeleteArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Accepted.
     * @param {AcceptedUpdateArgs} args - Arguments to update one Accepted.
     * @example
     * // Update one Accepted
     * const accepted = await prisma.accepted.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AcceptedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AcceptedUpdateArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accepteds.
     * @param {AcceptedDeleteManyArgs} args - Arguments to filter Accepteds to delete.
     * @example
     * // Delete a few Accepteds
     * const { count } = await prisma.accepted.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AcceptedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcceptedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accepteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accepteds
     * const accepted = await prisma.accepted.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AcceptedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AcceptedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accepted.
     * @param {AcceptedUpsertArgs} args - Arguments to update or create a Accepted.
     * @example
     * // Update or create a Accepted
     * const accepted = await prisma.accepted.upsert({
     *   create: {
     *     // ... data to create a Accepted
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accepted we want to update
     *   }
     * })
    **/
    upsert<T extends AcceptedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AcceptedUpsertArgs<ExtArgs>>
    ): Prisma__AcceptedClient<$Result.GetResult<Prisma.$AcceptedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Accepteds that matches the filter.
     * @param {AcceptedFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accepted = await prisma.accepted.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AcceptedFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Accepted.
     * @param {AcceptedAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accepted = await prisma.accepted.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AcceptedAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Accepteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedCountArgs} args - Arguments to filter Accepteds to count.
     * @example
     * // Count the number of Accepteds
     * const count = await prisma.accepted.count({
     *   where: {
     *     // ... the filter for the Accepteds we want to count
     *   }
     * })
    **/
    count<T extends AcceptedCountArgs>(
      args?: Subset<T, AcceptedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcceptedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accepted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcceptedAggregateArgs>(args: Subset<T, AcceptedAggregateArgs>): Prisma.PrismaPromise<GetAcceptedAggregateType<T>>

    /**
     * Group by Accepted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcceptedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcceptedGroupByArgs['orderBy'] }
        : { orderBy?: AcceptedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcceptedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcceptedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accepted model
   */
  readonly fields: AcceptedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accepted.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcceptedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Accepted model
   */ 
  interface AcceptedFieldRefs {
    readonly id: FieldRef<"Accepted", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Accepted findUnique
   */
  export type AcceptedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * Filter, which Accepted to fetch.
     */
    where: AcceptedWhereUniqueInput
  }


  /**
   * Accepted findUniqueOrThrow
   */
  export type AcceptedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * Filter, which Accepted to fetch.
     */
    where: AcceptedWhereUniqueInput
  }


  /**
   * Accepted findFirst
   */
  export type AcceptedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * Filter, which Accepted to fetch.
     */
    where?: AcceptedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accepteds to fetch.
     */
    orderBy?: AcceptedOrderByWithRelationInput | AcceptedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accepteds.
     */
    cursor?: AcceptedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accepteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accepteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accepteds.
     */
    distinct?: AcceptedScalarFieldEnum | AcceptedScalarFieldEnum[]
  }


  /**
   * Accepted findFirstOrThrow
   */
  export type AcceptedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * Filter, which Accepted to fetch.
     */
    where?: AcceptedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accepteds to fetch.
     */
    orderBy?: AcceptedOrderByWithRelationInput | AcceptedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accepteds.
     */
    cursor?: AcceptedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accepteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accepteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accepteds.
     */
    distinct?: AcceptedScalarFieldEnum | AcceptedScalarFieldEnum[]
  }


  /**
   * Accepted findMany
   */
  export type AcceptedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * Filter, which Accepteds to fetch.
     */
    where?: AcceptedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accepteds to fetch.
     */
    orderBy?: AcceptedOrderByWithRelationInput | AcceptedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accepteds.
     */
    cursor?: AcceptedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accepteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accepteds.
     */
    skip?: number
    distinct?: AcceptedScalarFieldEnum | AcceptedScalarFieldEnum[]
  }


  /**
   * Accepted create
   */
  export type AcceptedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * The data needed to create a Accepted.
     */
    data?: XOR<AcceptedCreateInput, AcceptedUncheckedCreateInput>
  }


  /**
   * Accepted createMany
   */
  export type AcceptedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accepteds.
     */
    data: AcceptedCreateManyInput | AcceptedCreateManyInput[]
  }


  /**
   * Accepted update
   */
  export type AcceptedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * The data needed to update a Accepted.
     */
    data: XOR<AcceptedUpdateInput, AcceptedUncheckedUpdateInput>
    /**
     * Choose, which Accepted to update.
     */
    where: AcceptedWhereUniqueInput
  }


  /**
   * Accepted updateMany
   */
  export type AcceptedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accepteds.
     */
    data: XOR<AcceptedUpdateManyMutationInput, AcceptedUncheckedUpdateManyInput>
    /**
     * Filter which Accepteds to update
     */
    where?: AcceptedWhereInput
  }


  /**
   * Accepted upsert
   */
  export type AcceptedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * The filter to search for the Accepted to update in case it exists.
     */
    where: AcceptedWhereUniqueInput
    /**
     * In case the Accepted found by the `where` argument doesn't exist, create a new Accepted with this data.
     */
    create: XOR<AcceptedCreateInput, AcceptedUncheckedCreateInput>
    /**
     * In case the Accepted was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcceptedUpdateInput, AcceptedUncheckedUpdateInput>
  }


  /**
   * Accepted delete
   */
  export type AcceptedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
    /**
     * Filter which Accepted to delete.
     */
    where: AcceptedWhereUniqueInput
  }


  /**
   * Accepted deleteMany
   */
  export type AcceptedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accepteds to delete
     */
    where?: AcceptedWhereInput
  }


  /**
   * Accepted findRaw
   */
  export type AcceptedFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Accepted aggregateRaw
   */
  export type AcceptedAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Accepted without action
   */
  export type AcceptedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accepted
     */
    select?: AcceptedSelect<ExtArgs> | null
  }



  /**
   * Model Agile
   */

  export type AggregateAgile = {
    _count: AgileCountAggregateOutputType | null
    _avg: AgileAvgAggregateOutputType | null
    _sum: AgileSumAggregateOutputType | null
    _min: AgileMinAggregateOutputType | null
    _max: AgileMaxAggregateOutputType | null
  }

  export type AgileAvgAggregateOutputType = {
    volume: number | null
  }

  export type AgileSumAggregateOutputType = {
    volume: number | null
  }

  export type AgileMinAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type AgileMaxAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type AgileCountAggregateOutputType = {
    id: number
    authorname: number
    extraInformation: number
    title: number
    volume: number
    yearOfPublication: number
    _all: number
  }


  export type AgileAvgAggregateInputType = {
    volume?: true
  }

  export type AgileSumAggregateInputType = {
    volume?: true
  }

  export type AgileMinAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type AgileMaxAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type AgileCountAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
    _all?: true
  }

  export type AgileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agile to aggregate.
     */
    where?: AgileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agiles to fetch.
     */
    orderBy?: AgileOrderByWithRelationInput | AgileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agiles
    **/
    _count?: true | AgileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgileMaxAggregateInputType
  }

  export type GetAgileAggregateType<T extends AgileAggregateArgs> = {
        [P in keyof T & keyof AggregateAgile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgile[P]>
      : GetScalarType<T[P], AggregateAgile[P]>
  }




  export type AgileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgileWhereInput
    orderBy?: AgileOrderByWithAggregationInput | AgileOrderByWithAggregationInput[]
    by: AgileScalarFieldEnum[] | AgileScalarFieldEnum
    having?: AgileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgileCountAggregateInputType | true
    _avg?: AgileAvgAggregateInputType
    _sum?: AgileSumAggregateInputType
    _min?: AgileMinAggregateInputType
    _max?: AgileMaxAggregateInputType
  }

  export type AgileGroupByOutputType = {
    id: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
    _count: AgileCountAggregateOutputType | null
    _avg: AgileAvgAggregateOutputType | null
    _sum: AgileSumAggregateOutputType | null
    _min: AgileMinAggregateOutputType | null
    _max: AgileMaxAggregateOutputType | null
  }

  type GetAgileGroupByPayload<T extends AgileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgileGroupByOutputType[P]>
            : GetScalarType<T[P], AgileGroupByOutputType[P]>
        }
      >
    >


  export type AgileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }, ExtArgs["result"]["agile"]>

  export type AgileSelectScalar = {
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }


  export type $AgilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorname: string
      extraInformation: string
      title: string
      volume: number
      yearOfPublication: string
    }, ExtArgs["result"]["agile"]>
    composites: {}
  }


  type AgileGetPayload<S extends boolean | null | undefined | AgileDefaultArgs> = $Result.GetResult<Prisma.$AgilePayload, S>

  type AgileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgileFindManyArgs, 'select' | 'include'> & {
      select?: AgileCountAggregateInputType | true
    }

  export interface AgileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agile'], meta: { name: 'Agile' } }
    /**
     * Find zero or one Agile that matches the filter.
     * @param {AgileFindUniqueArgs} args - Arguments to find a Agile
     * @example
     * // Get one Agile
     * const agile = await prisma.agile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AgileFindUniqueArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Agile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgileFindUniqueOrThrowArgs} args - Arguments to find a Agile
     * @example
     * // Get one Agile
     * const agile = await prisma.agile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Agile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileFindFirstArgs} args - Arguments to find a Agile
     * @example
     * // Get one Agile
     * const agile = await prisma.agile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AgileFindFirstArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Agile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileFindFirstOrThrowArgs} args - Arguments to find a Agile
     * @example
     * // Get one Agile
     * const agile = await prisma.agile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Agiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agiles
     * const agiles = await prisma.agile.findMany()
     * 
     * // Get first 10 Agiles
     * const agiles = await prisma.agile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agileWithIdOnly = await prisma.agile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AgileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Agile.
     * @param {AgileCreateArgs} args - Arguments to create a Agile.
     * @example
     * // Create one Agile
     * const Agile = await prisma.agile.create({
     *   data: {
     *     // ... data to create a Agile
     *   }
     * })
     * 
    **/
    create<T extends AgileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AgileCreateArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Agiles.
     *     @param {AgileCreateManyArgs} args - Arguments to create many Agiles.
     *     @example
     *     // Create many Agiles
     *     const agile = await prisma.agile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AgileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agile.
     * @param {AgileDeleteArgs} args - Arguments to delete one Agile.
     * @example
     * // Delete one Agile
     * const Agile = await prisma.agile.delete({
     *   where: {
     *     // ... filter to delete one Agile
     *   }
     * })
     * 
    **/
    delete<T extends AgileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AgileDeleteArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Agile.
     * @param {AgileUpdateArgs} args - Arguments to update one Agile.
     * @example
     * // Update one Agile
     * const agile = await prisma.agile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AgileUpdateArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Agiles.
     * @param {AgileDeleteManyArgs} args - Arguments to filter Agiles to delete.
     * @example
     * // Delete a few Agiles
     * const { count } = await prisma.agile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agiles
     * const agile = await prisma.agile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AgileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agile.
     * @param {AgileUpsertArgs} args - Arguments to update or create a Agile.
     * @example
     * // Update or create a Agile
     * const agile = await prisma.agile.upsert({
     *   create: {
     *     // ... data to create a Agile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agile we want to update
     *   }
     * })
    **/
    upsert<T extends AgileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AgileUpsertArgs<ExtArgs>>
    ): Prisma__AgileClient<$Result.GetResult<Prisma.$AgilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Agiles that matches the filter.
     * @param {AgileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const agile = await prisma.agile.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AgileFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Agile.
     * @param {AgileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const agile = await prisma.agile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AgileAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Agiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileCountArgs} args - Arguments to filter Agiles to count.
     * @example
     * // Count the number of Agiles
     * const count = await prisma.agile.count({
     *   where: {
     *     // ... the filter for the Agiles we want to count
     *   }
     * })
    **/
    count<T extends AgileCountArgs>(
      args?: Subset<T, AgileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgileAggregateArgs>(args: Subset<T, AgileAggregateArgs>): Prisma.PrismaPromise<GetAgileAggregateType<T>>

    /**
     * Group by Agile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgileGroupByArgs['orderBy'] }
        : { orderBy?: AgileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agile model
   */
  readonly fields: AgileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Agile model
   */ 
  interface AgileFieldRefs {
    readonly id: FieldRef<"Agile", 'String'>
    readonly authorname: FieldRef<"Agile", 'String'>
    readonly extraInformation: FieldRef<"Agile", 'String'>
    readonly title: FieldRef<"Agile", 'String'>
    readonly volume: FieldRef<"Agile", 'Int'>
    readonly yearOfPublication: FieldRef<"Agile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Agile findUnique
   */
  export type AgileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * Filter, which Agile to fetch.
     */
    where: AgileWhereUniqueInput
  }


  /**
   * Agile findUniqueOrThrow
   */
  export type AgileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * Filter, which Agile to fetch.
     */
    where: AgileWhereUniqueInput
  }


  /**
   * Agile findFirst
   */
  export type AgileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * Filter, which Agile to fetch.
     */
    where?: AgileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agiles to fetch.
     */
    orderBy?: AgileOrderByWithRelationInput | AgileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agiles.
     */
    cursor?: AgileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agiles.
     */
    distinct?: AgileScalarFieldEnum | AgileScalarFieldEnum[]
  }


  /**
   * Agile findFirstOrThrow
   */
  export type AgileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * Filter, which Agile to fetch.
     */
    where?: AgileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agiles to fetch.
     */
    orderBy?: AgileOrderByWithRelationInput | AgileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agiles.
     */
    cursor?: AgileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agiles.
     */
    distinct?: AgileScalarFieldEnum | AgileScalarFieldEnum[]
  }


  /**
   * Agile findMany
   */
  export type AgileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * Filter, which Agiles to fetch.
     */
    where?: AgileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agiles to fetch.
     */
    orderBy?: AgileOrderByWithRelationInput | AgileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agiles.
     */
    cursor?: AgileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agiles.
     */
    skip?: number
    distinct?: AgileScalarFieldEnum | AgileScalarFieldEnum[]
  }


  /**
   * Agile create
   */
  export type AgileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * The data needed to create a Agile.
     */
    data: XOR<AgileCreateInput, AgileUncheckedCreateInput>
  }


  /**
   * Agile createMany
   */
  export type AgileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agiles.
     */
    data: AgileCreateManyInput | AgileCreateManyInput[]
  }


  /**
   * Agile update
   */
  export type AgileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * The data needed to update a Agile.
     */
    data: XOR<AgileUpdateInput, AgileUncheckedUpdateInput>
    /**
     * Choose, which Agile to update.
     */
    where: AgileWhereUniqueInput
  }


  /**
   * Agile updateMany
   */
  export type AgileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agiles.
     */
    data: XOR<AgileUpdateManyMutationInput, AgileUncheckedUpdateManyInput>
    /**
     * Filter which Agiles to update
     */
    where?: AgileWhereInput
  }


  /**
   * Agile upsert
   */
  export type AgileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * The filter to search for the Agile to update in case it exists.
     */
    where: AgileWhereUniqueInput
    /**
     * In case the Agile found by the `where` argument doesn't exist, create a new Agile with this data.
     */
    create: XOR<AgileCreateInput, AgileUncheckedCreateInput>
    /**
     * In case the Agile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgileUpdateInput, AgileUncheckedUpdateInput>
  }


  /**
   * Agile delete
   */
  export type AgileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
    /**
     * Filter which Agile to delete.
     */
    where: AgileWhereUniqueInput
  }


  /**
   * Agile deleteMany
   */
  export type AgileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agiles to delete
     */
    where?: AgileWhereInput
  }


  /**
   * Agile findRaw
   */
  export type AgileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Agile aggregateRaw
   */
  export type AgileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Agile without action
   */
  export type AgileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agile
     */
    select?: AgileSelect<ExtArgs> | null
  }



  /**
   * Model All
   */

  export type AggregateAll = {
    _count: AllCountAggregateOutputType | null
    _avg: AllAvgAggregateOutputType | null
    _sum: AllSumAggregateOutputType | null
    _min: AllMinAggregateOutputType | null
    _max: AllMaxAggregateOutputType | null
  }

  export type AllAvgAggregateOutputType = {
    volume: number | null
  }

  export type AllSumAggregateOutputType = {
    volume: number | null
  }

  export type AllMinAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type AllMaxAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type AllCountAggregateOutputType = {
    id: number
    authorname: number
    extraInformation: number
    title: number
    volume: number
    yearOfPublication: number
    _all: number
  }


  export type AllAvgAggregateInputType = {
    volume?: true
  }

  export type AllSumAggregateInputType = {
    volume?: true
  }

  export type AllMinAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type AllMaxAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type AllCountAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
    _all?: true
  }

  export type AllAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which All to aggregate.
     */
    where?: AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alls to fetch.
     */
    orderBy?: AllOrderByWithRelationInput | AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alls
    **/
    _count?: true | AllCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllMaxAggregateInputType
  }

  export type GetAllAggregateType<T extends AllAggregateArgs> = {
        [P in keyof T & keyof AggregateAll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAll[P]>
      : GetScalarType<T[P], AggregateAll[P]>
  }




  export type AllGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllWhereInput
    orderBy?: AllOrderByWithAggregationInput | AllOrderByWithAggregationInput[]
    by: AllScalarFieldEnum[] | AllScalarFieldEnum
    having?: AllScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllCountAggregateInputType | true
    _avg?: AllAvgAggregateInputType
    _sum?: AllSumAggregateInputType
    _min?: AllMinAggregateInputType
    _max?: AllMaxAggregateInputType
  }

  export type AllGroupByOutputType = {
    id: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
    _count: AllCountAggregateOutputType | null
    _avg: AllAvgAggregateOutputType | null
    _sum: AllSumAggregateOutputType | null
    _min: AllMinAggregateOutputType | null
    _max: AllMaxAggregateOutputType | null
  }

  type GetAllGroupByPayload<T extends AllGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllGroupByOutputType[P]>
            : GetScalarType<T[P], AllGroupByOutputType[P]>
        }
      >
    >


  export type AllSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }, ExtArgs["result"]["all"]>

  export type AllSelectScalar = {
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }


  export type $AllPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "All"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorname: string
      extraInformation: string
      title: string
      volume: number
      yearOfPublication: string
    }, ExtArgs["result"]["all"]>
    composites: {}
  }


  type AllGetPayload<S extends boolean | null | undefined | AllDefaultArgs> = $Result.GetResult<Prisma.$AllPayload, S>

  type AllCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AllFindManyArgs, 'select' | 'include'> & {
      select?: AllCountAggregateInputType | true
    }

  export interface AllDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['All'], meta: { name: 'All' } }
    /**
     * Find zero or one All that matches the filter.
     * @param {AllFindUniqueArgs} args - Arguments to find a All
     * @example
     * // Get one All
     * const all = await prisma.all.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AllFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AllFindUniqueArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one All that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AllFindUniqueOrThrowArgs} args - Arguments to find a All
     * @example
     * // Get one All
     * const all = await prisma.all.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AllFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AllFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first All that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllFindFirstArgs} args - Arguments to find a All
     * @example
     * // Get one All
     * const all = await prisma.all.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AllFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AllFindFirstArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first All that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllFindFirstOrThrowArgs} args - Arguments to find a All
     * @example
     * // Get one All
     * const all = await prisma.all.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AllFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AllFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Alls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alls
     * const alls = await prisma.all.findMany()
     * 
     * // Get first 10 Alls
     * const alls = await prisma.all.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allWithIdOnly = await prisma.all.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AllFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a All.
     * @param {AllCreateArgs} args - Arguments to create a All.
     * @example
     * // Create one All
     * const All = await prisma.all.create({
     *   data: {
     *     // ... data to create a All
     *   }
     * })
     * 
    **/
    create<T extends AllCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AllCreateArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Alls.
     *     @param {AllCreateManyArgs} args - Arguments to create many Alls.
     *     @example
     *     // Create many Alls
     *     const all = await prisma.all.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AllCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a All.
     * @param {AllDeleteArgs} args - Arguments to delete one All.
     * @example
     * // Delete one All
     * const All = await prisma.all.delete({
     *   where: {
     *     // ... filter to delete one All
     *   }
     * })
     * 
    **/
    delete<T extends AllDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AllDeleteArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one All.
     * @param {AllUpdateArgs} args - Arguments to update one All.
     * @example
     * // Update one All
     * const all = await prisma.all.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AllUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AllUpdateArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Alls.
     * @param {AllDeleteManyArgs} args - Arguments to filter Alls to delete.
     * @example
     * // Delete a few Alls
     * const { count } = await prisma.all.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AllDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alls
     * const all = await prisma.all.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AllUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AllUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one All.
     * @param {AllUpsertArgs} args - Arguments to update or create a All.
     * @example
     * // Update or create a All
     * const all = await prisma.all.upsert({
     *   create: {
     *     // ... data to create a All
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the All we want to update
     *   }
     * })
    **/
    upsert<T extends AllUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AllUpsertArgs<ExtArgs>>
    ): Prisma__AllClient<$Result.GetResult<Prisma.$AllPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Alls that matches the filter.
     * @param {AllFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const all = await prisma.all.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AllFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a All.
     * @param {AllAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const all = await prisma.all.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AllAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Alls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllCountArgs} args - Arguments to filter Alls to count.
     * @example
     * // Count the number of Alls
     * const count = await prisma.all.count({
     *   where: {
     *     // ... the filter for the Alls we want to count
     *   }
     * })
    **/
    count<T extends AllCountArgs>(
      args?: Subset<T, AllCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a All.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllAggregateArgs>(args: Subset<T, AllAggregateArgs>): Prisma.PrismaPromise<GetAllAggregateType<T>>

    /**
     * Group by All.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllGroupByArgs['orderBy'] }
        : { orderBy?: AllGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the All model
   */
  readonly fields: AllFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for All.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the All model
   */ 
  interface AllFieldRefs {
    readonly id: FieldRef<"All", 'String'>
    readonly authorname: FieldRef<"All", 'String'>
    readonly extraInformation: FieldRef<"All", 'String'>
    readonly title: FieldRef<"All", 'String'>
    readonly volume: FieldRef<"All", 'Int'>
    readonly yearOfPublication: FieldRef<"All", 'String'>
  }
    

  // Custom InputTypes

  /**
   * All findUnique
   */
  export type AllFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * Filter, which All to fetch.
     */
    where: AllWhereUniqueInput
  }


  /**
   * All findUniqueOrThrow
   */
  export type AllFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * Filter, which All to fetch.
     */
    where: AllWhereUniqueInput
  }


  /**
   * All findFirst
   */
  export type AllFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * Filter, which All to fetch.
     */
    where?: AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alls to fetch.
     */
    orderBy?: AllOrderByWithRelationInput | AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alls.
     */
    cursor?: AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alls.
     */
    distinct?: AllScalarFieldEnum | AllScalarFieldEnum[]
  }


  /**
   * All findFirstOrThrow
   */
  export type AllFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * Filter, which All to fetch.
     */
    where?: AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alls to fetch.
     */
    orderBy?: AllOrderByWithRelationInput | AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alls.
     */
    cursor?: AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alls.
     */
    distinct?: AllScalarFieldEnum | AllScalarFieldEnum[]
  }


  /**
   * All findMany
   */
  export type AllFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * Filter, which Alls to fetch.
     */
    where?: AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alls to fetch.
     */
    orderBy?: AllOrderByWithRelationInput | AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alls.
     */
    cursor?: AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alls.
     */
    skip?: number
    distinct?: AllScalarFieldEnum | AllScalarFieldEnum[]
  }


  /**
   * All create
   */
  export type AllCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * The data needed to create a All.
     */
    data: XOR<AllCreateInput, AllUncheckedCreateInput>
  }


  /**
   * All createMany
   */
  export type AllCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alls.
     */
    data: AllCreateManyInput | AllCreateManyInput[]
  }


  /**
   * All update
   */
  export type AllUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * The data needed to update a All.
     */
    data: XOR<AllUpdateInput, AllUncheckedUpdateInput>
    /**
     * Choose, which All to update.
     */
    where: AllWhereUniqueInput
  }


  /**
   * All updateMany
   */
  export type AllUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alls.
     */
    data: XOR<AllUpdateManyMutationInput, AllUncheckedUpdateManyInput>
    /**
     * Filter which Alls to update
     */
    where?: AllWhereInput
  }


  /**
   * All upsert
   */
  export type AllUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * The filter to search for the All to update in case it exists.
     */
    where: AllWhereUniqueInput
    /**
     * In case the All found by the `where` argument doesn't exist, create a new All with this data.
     */
    create: XOR<AllCreateInput, AllUncheckedCreateInput>
    /**
     * In case the All was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllUpdateInput, AllUncheckedUpdateInput>
  }


  /**
   * All delete
   */
  export type AllDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
    /**
     * Filter which All to delete.
     */
    where: AllWhereUniqueInput
  }


  /**
   * All deleteMany
   */
  export type AllDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alls to delete
     */
    where?: AllWhereInput
  }


  /**
   * All findRaw
   */
  export type AllFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * All aggregateRaw
   */
  export type AllAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * All without action
   */
  export type AllDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the All
     */
    select?: AllSelect<ExtArgs> | null
  }



  /**
   * Model DevOps_Deployment_Methodology
   */

  export type AggregateDevOps_Deployment_Methodology = {
    _count: DevOps_Deployment_MethodologyCountAggregateOutputType | null
    _avg: DevOps_Deployment_MethodologyAvgAggregateOutputType | null
    _sum: DevOps_Deployment_MethodologySumAggregateOutputType | null
    _min: DevOps_Deployment_MethodologyMinAggregateOutputType | null
    _max: DevOps_Deployment_MethodologyMaxAggregateOutputType | null
  }

  export type DevOps_Deployment_MethodologyAvgAggregateOutputType = {
    volume: number | null
  }

  export type DevOps_Deployment_MethodologySumAggregateOutputType = {
    volume: number | null
  }

  export type DevOps_Deployment_MethodologyMinAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type DevOps_Deployment_MethodologyMaxAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type DevOps_Deployment_MethodologyCountAggregateOutputType = {
    id: number
    authorname: number
    extraInformation: number
    title: number
    volume: number
    yearOfPublication: number
    _all: number
  }


  export type DevOps_Deployment_MethodologyAvgAggregateInputType = {
    volume?: true
  }

  export type DevOps_Deployment_MethodologySumAggregateInputType = {
    volume?: true
  }

  export type DevOps_Deployment_MethodologyMinAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type DevOps_Deployment_MethodologyMaxAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type DevOps_Deployment_MethodologyCountAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
    _all?: true
  }

  export type DevOps_Deployment_MethodologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DevOps_Deployment_Methodology to aggregate.
     */
    where?: DevOps_Deployment_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevOps_Deployment_Methodologies to fetch.
     */
    orderBy?: DevOps_Deployment_MethodologyOrderByWithRelationInput | DevOps_Deployment_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevOps_Deployment_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevOps_Deployment_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevOps_Deployment_Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DevOps_Deployment_Methodologies
    **/
    _count?: true | DevOps_Deployment_MethodologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevOps_Deployment_MethodologyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevOps_Deployment_MethodologySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevOps_Deployment_MethodologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevOps_Deployment_MethodologyMaxAggregateInputType
  }

  export type GetDevOps_Deployment_MethodologyAggregateType<T extends DevOps_Deployment_MethodologyAggregateArgs> = {
        [P in keyof T & keyof AggregateDevOps_Deployment_Methodology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevOps_Deployment_Methodology[P]>
      : GetScalarType<T[P], AggregateDevOps_Deployment_Methodology[P]>
  }




  export type DevOps_Deployment_MethodologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevOps_Deployment_MethodologyWhereInput
    orderBy?: DevOps_Deployment_MethodologyOrderByWithAggregationInput | DevOps_Deployment_MethodologyOrderByWithAggregationInput[]
    by: DevOps_Deployment_MethodologyScalarFieldEnum[] | DevOps_Deployment_MethodologyScalarFieldEnum
    having?: DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevOps_Deployment_MethodologyCountAggregateInputType | true
    _avg?: DevOps_Deployment_MethodologyAvgAggregateInputType
    _sum?: DevOps_Deployment_MethodologySumAggregateInputType
    _min?: DevOps_Deployment_MethodologyMinAggregateInputType
    _max?: DevOps_Deployment_MethodologyMaxAggregateInputType
  }

  export type DevOps_Deployment_MethodologyGroupByOutputType = {
    id: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
    _count: DevOps_Deployment_MethodologyCountAggregateOutputType | null
    _avg: DevOps_Deployment_MethodologyAvgAggregateOutputType | null
    _sum: DevOps_Deployment_MethodologySumAggregateOutputType | null
    _min: DevOps_Deployment_MethodologyMinAggregateOutputType | null
    _max: DevOps_Deployment_MethodologyMaxAggregateOutputType | null
  }

  type GetDevOps_Deployment_MethodologyGroupByPayload<T extends DevOps_Deployment_MethodologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevOps_Deployment_MethodologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevOps_Deployment_MethodologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevOps_Deployment_MethodologyGroupByOutputType[P]>
            : GetScalarType<T[P], DevOps_Deployment_MethodologyGroupByOutputType[P]>
        }
      >
    >


  export type DevOps_Deployment_MethodologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }, ExtArgs["result"]["devOps_Deployment_Methodology"]>

  export type DevOps_Deployment_MethodologySelectScalar = {
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }


  export type $DevOps_Deployment_MethodologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DevOps_Deployment_Methodology"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorname: string
      extraInformation: string
      title: string
      volume: number
      yearOfPublication: string
    }, ExtArgs["result"]["devOps_Deployment_Methodology"]>
    composites: {}
  }


  type DevOps_Deployment_MethodologyGetPayload<S extends boolean | null | undefined | DevOps_Deployment_MethodologyDefaultArgs> = $Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload, S>

  type DevOps_Deployment_MethodologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DevOps_Deployment_MethodologyFindManyArgs, 'select' | 'include'> & {
      select?: DevOps_Deployment_MethodologyCountAggregateInputType | true
    }

  export interface DevOps_Deployment_MethodologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DevOps_Deployment_Methodology'], meta: { name: 'DevOps_Deployment_Methodology' } }
    /**
     * Find zero or one DevOps_Deployment_Methodology that matches the filter.
     * @param {DevOps_Deployment_MethodologyFindUniqueArgs} args - Arguments to find a DevOps_Deployment_Methodology
     * @example
     * // Get one DevOps_Deployment_Methodology
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DevOps_Deployment_MethodologyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DevOps_Deployment_MethodologyFindUniqueArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DevOps_Deployment_Methodology that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DevOps_Deployment_MethodologyFindUniqueOrThrowArgs} args - Arguments to find a DevOps_Deployment_Methodology
     * @example
     * // Get one DevOps_Deployment_Methodology
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DevOps_Deployment_MethodologyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DevOps_Deployment_MethodologyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DevOps_Deployment_Methodology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyFindFirstArgs} args - Arguments to find a DevOps_Deployment_Methodology
     * @example
     * // Get one DevOps_Deployment_Methodology
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DevOps_Deployment_MethodologyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DevOps_Deployment_MethodologyFindFirstArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DevOps_Deployment_Methodology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyFindFirstOrThrowArgs} args - Arguments to find a DevOps_Deployment_Methodology
     * @example
     * // Get one DevOps_Deployment_Methodology
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DevOps_Deployment_MethodologyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DevOps_Deployment_MethodologyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DevOps_Deployment_Methodologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DevOps_Deployment_Methodologies
     * const devOps_Deployment_Methodologies = await prisma.devOps_Deployment_Methodology.findMany()
     * 
     * // Get first 10 DevOps_Deployment_Methodologies
     * const devOps_Deployment_Methodologies = await prisma.devOps_Deployment_Methodology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devOps_Deployment_MethodologyWithIdOnly = await prisma.devOps_Deployment_Methodology.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DevOps_Deployment_MethodologyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DevOps_Deployment_MethodologyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DevOps_Deployment_Methodology.
     * @param {DevOps_Deployment_MethodologyCreateArgs} args - Arguments to create a DevOps_Deployment_Methodology.
     * @example
     * // Create one DevOps_Deployment_Methodology
     * const DevOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.create({
     *   data: {
     *     // ... data to create a DevOps_Deployment_Methodology
     *   }
     * })
     * 
    **/
    create<T extends DevOps_Deployment_MethodologyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DevOps_Deployment_MethodologyCreateArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DevOps_Deployment_Methodologies.
     *     @param {DevOps_Deployment_MethodologyCreateManyArgs} args - Arguments to create many DevOps_Deployment_Methodologies.
     *     @example
     *     // Create many DevOps_Deployment_Methodologies
     *     const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DevOps_Deployment_MethodologyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DevOps_Deployment_MethodologyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DevOps_Deployment_Methodology.
     * @param {DevOps_Deployment_MethodologyDeleteArgs} args - Arguments to delete one DevOps_Deployment_Methodology.
     * @example
     * // Delete one DevOps_Deployment_Methodology
     * const DevOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.delete({
     *   where: {
     *     // ... filter to delete one DevOps_Deployment_Methodology
     *   }
     * })
     * 
    **/
    delete<T extends DevOps_Deployment_MethodologyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DevOps_Deployment_MethodologyDeleteArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DevOps_Deployment_Methodology.
     * @param {DevOps_Deployment_MethodologyUpdateArgs} args - Arguments to update one DevOps_Deployment_Methodology.
     * @example
     * // Update one DevOps_Deployment_Methodology
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DevOps_Deployment_MethodologyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DevOps_Deployment_MethodologyUpdateArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DevOps_Deployment_Methodologies.
     * @param {DevOps_Deployment_MethodologyDeleteManyArgs} args - Arguments to filter DevOps_Deployment_Methodologies to delete.
     * @example
     * // Delete a few DevOps_Deployment_Methodologies
     * const { count } = await prisma.devOps_Deployment_Methodology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DevOps_Deployment_MethodologyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DevOps_Deployment_MethodologyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DevOps_Deployment_Methodologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DevOps_Deployment_Methodologies
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DevOps_Deployment_MethodologyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DevOps_Deployment_MethodologyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DevOps_Deployment_Methodology.
     * @param {DevOps_Deployment_MethodologyUpsertArgs} args - Arguments to update or create a DevOps_Deployment_Methodology.
     * @example
     * // Update or create a DevOps_Deployment_Methodology
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.upsert({
     *   create: {
     *     // ... data to create a DevOps_Deployment_Methodology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DevOps_Deployment_Methodology we want to update
     *   }
     * })
    **/
    upsert<T extends DevOps_Deployment_MethodologyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DevOps_Deployment_MethodologyUpsertArgs<ExtArgs>>
    ): Prisma__DevOps_Deployment_MethodologyClient<$Result.GetResult<Prisma.$DevOps_Deployment_MethodologyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more DevOps_Deployment_Methodologies that matches the filter.
     * @param {DevOps_Deployment_MethodologyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DevOps_Deployment_MethodologyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DevOps_Deployment_Methodology.
     * @param {DevOps_Deployment_MethodologyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const devOps_Deployment_Methodology = await prisma.devOps_Deployment_Methodology.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DevOps_Deployment_MethodologyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of DevOps_Deployment_Methodologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyCountArgs} args - Arguments to filter DevOps_Deployment_Methodologies to count.
     * @example
     * // Count the number of DevOps_Deployment_Methodologies
     * const count = await prisma.devOps_Deployment_Methodology.count({
     *   where: {
     *     // ... the filter for the DevOps_Deployment_Methodologies we want to count
     *   }
     * })
    **/
    count<T extends DevOps_Deployment_MethodologyCountArgs>(
      args?: Subset<T, DevOps_Deployment_MethodologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevOps_Deployment_MethodologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DevOps_Deployment_Methodology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevOps_Deployment_MethodologyAggregateArgs>(args: Subset<T, DevOps_Deployment_MethodologyAggregateArgs>): Prisma.PrismaPromise<GetDevOps_Deployment_MethodologyAggregateType<T>>

    /**
     * Group by DevOps_Deployment_Methodology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevOps_Deployment_MethodologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevOps_Deployment_MethodologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevOps_Deployment_MethodologyGroupByArgs['orderBy'] }
        : { orderBy?: DevOps_Deployment_MethodologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevOps_Deployment_MethodologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevOps_Deployment_MethodologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DevOps_Deployment_Methodology model
   */
  readonly fields: DevOps_Deployment_MethodologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DevOps_Deployment_Methodology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevOps_Deployment_MethodologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DevOps_Deployment_Methodology model
   */ 
  interface DevOps_Deployment_MethodologyFieldRefs {
    readonly id: FieldRef<"DevOps_Deployment_Methodology", 'String'>
    readonly authorname: FieldRef<"DevOps_Deployment_Methodology", 'String'>
    readonly extraInformation: FieldRef<"DevOps_Deployment_Methodology", 'String'>
    readonly title: FieldRef<"DevOps_Deployment_Methodology", 'String'>
    readonly volume: FieldRef<"DevOps_Deployment_Methodology", 'Int'>
    readonly yearOfPublication: FieldRef<"DevOps_Deployment_Methodology", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DevOps_Deployment_Methodology findUnique
   */
  export type DevOps_Deployment_MethodologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which DevOps_Deployment_Methodology to fetch.
     */
    where: DevOps_Deployment_MethodologyWhereUniqueInput
  }


  /**
   * DevOps_Deployment_Methodology findUniqueOrThrow
   */
  export type DevOps_Deployment_MethodologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which DevOps_Deployment_Methodology to fetch.
     */
    where: DevOps_Deployment_MethodologyWhereUniqueInput
  }


  /**
   * DevOps_Deployment_Methodology findFirst
   */
  export type DevOps_Deployment_MethodologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which DevOps_Deployment_Methodology to fetch.
     */
    where?: DevOps_Deployment_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevOps_Deployment_Methodologies to fetch.
     */
    orderBy?: DevOps_Deployment_MethodologyOrderByWithRelationInput | DevOps_Deployment_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DevOps_Deployment_Methodologies.
     */
    cursor?: DevOps_Deployment_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevOps_Deployment_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevOps_Deployment_Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DevOps_Deployment_Methodologies.
     */
    distinct?: DevOps_Deployment_MethodologyScalarFieldEnum | DevOps_Deployment_MethodologyScalarFieldEnum[]
  }


  /**
   * DevOps_Deployment_Methodology findFirstOrThrow
   */
  export type DevOps_Deployment_MethodologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which DevOps_Deployment_Methodology to fetch.
     */
    where?: DevOps_Deployment_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevOps_Deployment_Methodologies to fetch.
     */
    orderBy?: DevOps_Deployment_MethodologyOrderByWithRelationInput | DevOps_Deployment_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DevOps_Deployment_Methodologies.
     */
    cursor?: DevOps_Deployment_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevOps_Deployment_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevOps_Deployment_Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DevOps_Deployment_Methodologies.
     */
    distinct?: DevOps_Deployment_MethodologyScalarFieldEnum | DevOps_Deployment_MethodologyScalarFieldEnum[]
  }


  /**
   * DevOps_Deployment_Methodology findMany
   */
  export type DevOps_Deployment_MethodologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which DevOps_Deployment_Methodologies to fetch.
     */
    where?: DevOps_Deployment_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevOps_Deployment_Methodologies to fetch.
     */
    orderBy?: DevOps_Deployment_MethodologyOrderByWithRelationInput | DevOps_Deployment_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DevOps_Deployment_Methodologies.
     */
    cursor?: DevOps_Deployment_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevOps_Deployment_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevOps_Deployment_Methodologies.
     */
    skip?: number
    distinct?: DevOps_Deployment_MethodologyScalarFieldEnum | DevOps_Deployment_MethodologyScalarFieldEnum[]
  }


  /**
   * DevOps_Deployment_Methodology create
   */
  export type DevOps_Deployment_MethodologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * The data needed to create a DevOps_Deployment_Methodology.
     */
    data: XOR<DevOps_Deployment_MethodologyCreateInput, DevOps_Deployment_MethodologyUncheckedCreateInput>
  }


  /**
   * DevOps_Deployment_Methodology createMany
   */
  export type DevOps_Deployment_MethodologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DevOps_Deployment_Methodologies.
     */
    data: DevOps_Deployment_MethodologyCreateManyInput | DevOps_Deployment_MethodologyCreateManyInput[]
  }


  /**
   * DevOps_Deployment_Methodology update
   */
  export type DevOps_Deployment_MethodologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * The data needed to update a DevOps_Deployment_Methodology.
     */
    data: XOR<DevOps_Deployment_MethodologyUpdateInput, DevOps_Deployment_MethodologyUncheckedUpdateInput>
    /**
     * Choose, which DevOps_Deployment_Methodology to update.
     */
    where: DevOps_Deployment_MethodologyWhereUniqueInput
  }


  /**
   * DevOps_Deployment_Methodology updateMany
   */
  export type DevOps_Deployment_MethodologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DevOps_Deployment_Methodologies.
     */
    data: XOR<DevOps_Deployment_MethodologyUpdateManyMutationInput, DevOps_Deployment_MethodologyUncheckedUpdateManyInput>
    /**
     * Filter which DevOps_Deployment_Methodologies to update
     */
    where?: DevOps_Deployment_MethodologyWhereInput
  }


  /**
   * DevOps_Deployment_Methodology upsert
   */
  export type DevOps_Deployment_MethodologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * The filter to search for the DevOps_Deployment_Methodology to update in case it exists.
     */
    where: DevOps_Deployment_MethodologyWhereUniqueInput
    /**
     * In case the DevOps_Deployment_Methodology found by the `where` argument doesn't exist, create a new DevOps_Deployment_Methodology with this data.
     */
    create: XOR<DevOps_Deployment_MethodologyCreateInput, DevOps_Deployment_MethodologyUncheckedCreateInput>
    /**
     * In case the DevOps_Deployment_Methodology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevOps_Deployment_MethodologyUpdateInput, DevOps_Deployment_MethodologyUncheckedUpdateInput>
  }


  /**
   * DevOps_Deployment_Methodology delete
   */
  export type DevOps_Deployment_MethodologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
    /**
     * Filter which DevOps_Deployment_Methodology to delete.
     */
    where: DevOps_Deployment_MethodologyWhereUniqueInput
  }


  /**
   * DevOps_Deployment_Methodology deleteMany
   */
  export type DevOps_Deployment_MethodologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DevOps_Deployment_Methodologies to delete
     */
    where?: DevOps_Deployment_MethodologyWhereInput
  }


  /**
   * DevOps_Deployment_Methodology findRaw
   */
  export type DevOps_Deployment_MethodologyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DevOps_Deployment_Methodology aggregateRaw
   */
  export type DevOps_Deployment_MethodologyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DevOps_Deployment_Methodology without action
   */
  export type DevOps_Deployment_MethodologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevOps_Deployment_Methodology
     */
    select?: DevOps_Deployment_MethodologySelect<ExtArgs> | null
  }



  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    volume: number | null
  }

  export type FormSumAggregateOutputType = {
    volume: bigint | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    responseEmail: string | null
    title: string | null
    volume: bigint | null
    yearOfPublication: string | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    responseEmail: string | null
    title: string | null
    volume: bigint | null
    yearOfPublication: string | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    authorname: number
    extraInformation: number
    responseEmail: number
    title: number
    volume: number
    yearOfPublication: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    volume?: true
  }

  export type FormSumAggregateInputType = {
    volume?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    responseEmail?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    responseEmail?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    responseEmail?: true
    title?: true
    volume?: true
    yearOfPublication?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    authorname: string
    extraInformation: string
    responseEmail: string
    title: string
    volume: bigint
    yearOfPublication: string
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    responseEmail?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    responseEmail?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }


  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorname: string
      extraInformation: string
      responseEmail: string
      title: string
      volume: bigint
      yearOfPublication: string
    }, ExtArgs["result"]["form"]>
    composites: {}
  }


  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormFindManyArgs, 'select' | 'include'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Form that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
    **/
    create<T extends FormCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FormCreateArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Forms.
     *     @param {FormCreateManyArgs} args - Arguments to create many Forms.
     *     @example
     *     // Create many Forms
     *     const form = await prisma.form.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
    **/
    delete<T extends FormDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FormDeleteArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FormUpdateArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
    **/
    upsert<T extends FormUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FormUpsertArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Forms that matches the filter.
     * @param {FormFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const form = await prisma.form.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FormFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Form.
     * @param {FormAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const form = await prisma.form.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FormAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Form model
   */ 
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly authorname: FieldRef<"Form", 'String'>
    readonly extraInformation: FieldRef<"Form", 'String'>
    readonly responseEmail: FieldRef<"Form", 'String'>
    readonly title: FieldRef<"Form", 'String'>
    readonly volume: FieldRef<"Form", 'BigInt'>
    readonly yearOfPublication: FieldRef<"Form", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }


  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }


  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }


  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }


  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
  }


  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
  }


  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }


  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
  }


  /**
   * Form findRaw
   */
  export type FormFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Form aggregateRaw
   */
  export type FormAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
  }



  /**
   * Model Scrum_Methodology
   */

  export type AggregateScrum_Methodology = {
    _count: Scrum_MethodologyCountAggregateOutputType | null
    _avg: Scrum_MethodologyAvgAggregateOutputType | null
    _sum: Scrum_MethodologySumAggregateOutputType | null
    _min: Scrum_MethodologyMinAggregateOutputType | null
    _max: Scrum_MethodologyMaxAggregateOutputType | null
  }

  export type Scrum_MethodologyAvgAggregateOutputType = {
    volume: number | null
  }

  export type Scrum_MethodologySumAggregateOutputType = {
    volume: number | null
  }

  export type Scrum_MethodologyMinAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type Scrum_MethodologyMaxAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type Scrum_MethodologyCountAggregateOutputType = {
    id: number
    authorname: number
    extraInformation: number
    title: number
    volume: number
    yearOfPublication: number
    _all: number
  }


  export type Scrum_MethodologyAvgAggregateInputType = {
    volume?: true
  }

  export type Scrum_MethodologySumAggregateInputType = {
    volume?: true
  }

  export type Scrum_MethodologyMinAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type Scrum_MethodologyMaxAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type Scrum_MethodologyCountAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
    _all?: true
  }

  export type Scrum_MethodologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scrum_Methodology to aggregate.
     */
    where?: Scrum_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrum_Methodologies to fetch.
     */
    orderBy?: Scrum_MethodologyOrderByWithRelationInput | Scrum_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Scrum_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrum_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrum_Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scrum_Methodologies
    **/
    _count?: true | Scrum_MethodologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Scrum_MethodologyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Scrum_MethodologySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Scrum_MethodologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Scrum_MethodologyMaxAggregateInputType
  }

  export type GetScrum_MethodologyAggregateType<T extends Scrum_MethodologyAggregateArgs> = {
        [P in keyof T & keyof AggregateScrum_Methodology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrum_Methodology[P]>
      : GetScalarType<T[P], AggregateScrum_Methodology[P]>
  }




  export type Scrum_MethodologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Scrum_MethodologyWhereInput
    orderBy?: Scrum_MethodologyOrderByWithAggregationInput | Scrum_MethodologyOrderByWithAggregationInput[]
    by: Scrum_MethodologyScalarFieldEnum[] | Scrum_MethodologyScalarFieldEnum
    having?: Scrum_MethodologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Scrum_MethodologyCountAggregateInputType | true
    _avg?: Scrum_MethodologyAvgAggregateInputType
    _sum?: Scrum_MethodologySumAggregateInputType
    _min?: Scrum_MethodologyMinAggregateInputType
    _max?: Scrum_MethodologyMaxAggregateInputType
  }

  export type Scrum_MethodologyGroupByOutputType = {
    id: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
    _count: Scrum_MethodologyCountAggregateOutputType | null
    _avg: Scrum_MethodologyAvgAggregateOutputType | null
    _sum: Scrum_MethodologySumAggregateOutputType | null
    _min: Scrum_MethodologyMinAggregateOutputType | null
    _max: Scrum_MethodologyMaxAggregateOutputType | null
  }

  type GetScrum_MethodologyGroupByPayload<T extends Scrum_MethodologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Scrum_MethodologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Scrum_MethodologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Scrum_MethodologyGroupByOutputType[P]>
            : GetScalarType<T[P], Scrum_MethodologyGroupByOutputType[P]>
        }
      >
    >


  export type Scrum_MethodologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }, ExtArgs["result"]["scrum_Methodology"]>

  export type Scrum_MethodologySelectScalar = {
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }


  export type $Scrum_MethodologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scrum_Methodology"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorname: string
      extraInformation: string
      title: string
      volume: number
      yearOfPublication: string
    }, ExtArgs["result"]["scrum_Methodology"]>
    composites: {}
  }


  type Scrum_MethodologyGetPayload<S extends boolean | null | undefined | Scrum_MethodologyDefaultArgs> = $Result.GetResult<Prisma.$Scrum_MethodologyPayload, S>

  type Scrum_MethodologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Scrum_MethodologyFindManyArgs, 'select' | 'include'> & {
      select?: Scrum_MethodologyCountAggregateInputType | true
    }

  export interface Scrum_MethodologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scrum_Methodology'], meta: { name: 'Scrum_Methodology' } }
    /**
     * Find zero or one Scrum_Methodology that matches the filter.
     * @param {Scrum_MethodologyFindUniqueArgs} args - Arguments to find a Scrum_Methodology
     * @example
     * // Get one Scrum_Methodology
     * const scrum_Methodology = await prisma.scrum_Methodology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Scrum_MethodologyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Scrum_MethodologyFindUniqueArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Scrum_Methodology that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Scrum_MethodologyFindUniqueOrThrowArgs} args - Arguments to find a Scrum_Methodology
     * @example
     * // Get one Scrum_Methodology
     * const scrum_Methodology = await prisma.scrum_Methodology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Scrum_MethodologyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Scrum_MethodologyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Scrum_Methodology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyFindFirstArgs} args - Arguments to find a Scrum_Methodology
     * @example
     * // Get one Scrum_Methodology
     * const scrum_Methodology = await prisma.scrum_Methodology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Scrum_MethodologyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Scrum_MethodologyFindFirstArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Scrum_Methodology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyFindFirstOrThrowArgs} args - Arguments to find a Scrum_Methodology
     * @example
     * // Get one Scrum_Methodology
     * const scrum_Methodology = await prisma.scrum_Methodology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Scrum_MethodologyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Scrum_MethodologyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Scrum_Methodologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scrum_Methodologies
     * const scrum_Methodologies = await prisma.scrum_Methodology.findMany()
     * 
     * // Get first 10 Scrum_Methodologies
     * const scrum_Methodologies = await prisma.scrum_Methodology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrum_MethodologyWithIdOnly = await prisma.scrum_Methodology.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Scrum_MethodologyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Scrum_MethodologyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Scrum_Methodology.
     * @param {Scrum_MethodologyCreateArgs} args - Arguments to create a Scrum_Methodology.
     * @example
     * // Create one Scrum_Methodology
     * const Scrum_Methodology = await prisma.scrum_Methodology.create({
     *   data: {
     *     // ... data to create a Scrum_Methodology
     *   }
     * })
     * 
    **/
    create<T extends Scrum_MethodologyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Scrum_MethodologyCreateArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Scrum_Methodologies.
     *     @param {Scrum_MethodologyCreateManyArgs} args - Arguments to create many Scrum_Methodologies.
     *     @example
     *     // Create many Scrum_Methodologies
     *     const scrum_Methodology = await prisma.scrum_Methodology.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Scrum_MethodologyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Scrum_MethodologyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scrum_Methodology.
     * @param {Scrum_MethodologyDeleteArgs} args - Arguments to delete one Scrum_Methodology.
     * @example
     * // Delete one Scrum_Methodology
     * const Scrum_Methodology = await prisma.scrum_Methodology.delete({
     *   where: {
     *     // ... filter to delete one Scrum_Methodology
     *   }
     * })
     * 
    **/
    delete<T extends Scrum_MethodologyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Scrum_MethodologyDeleteArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Scrum_Methodology.
     * @param {Scrum_MethodologyUpdateArgs} args - Arguments to update one Scrum_Methodology.
     * @example
     * // Update one Scrum_Methodology
     * const scrum_Methodology = await prisma.scrum_Methodology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Scrum_MethodologyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Scrum_MethodologyUpdateArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Scrum_Methodologies.
     * @param {Scrum_MethodologyDeleteManyArgs} args - Arguments to filter Scrum_Methodologies to delete.
     * @example
     * // Delete a few Scrum_Methodologies
     * const { count } = await prisma.scrum_Methodology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Scrum_MethodologyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Scrum_MethodologyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scrum_Methodologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scrum_Methodologies
     * const scrum_Methodology = await prisma.scrum_Methodology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Scrum_MethodologyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Scrum_MethodologyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scrum_Methodology.
     * @param {Scrum_MethodologyUpsertArgs} args - Arguments to update or create a Scrum_Methodology.
     * @example
     * // Update or create a Scrum_Methodology
     * const scrum_Methodology = await prisma.scrum_Methodology.upsert({
     *   create: {
     *     // ... data to create a Scrum_Methodology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scrum_Methodology we want to update
     *   }
     * })
    **/
    upsert<T extends Scrum_MethodologyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Scrum_MethodologyUpsertArgs<ExtArgs>>
    ): Prisma__Scrum_MethodologyClient<$Result.GetResult<Prisma.$Scrum_MethodologyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Scrum_Methodologies that matches the filter.
     * @param {Scrum_MethodologyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scrum_Methodology = await prisma.scrum_Methodology.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Scrum_MethodologyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Scrum_Methodology.
     * @param {Scrum_MethodologyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scrum_Methodology = await prisma.scrum_Methodology.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Scrum_MethodologyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Scrum_Methodologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyCountArgs} args - Arguments to filter Scrum_Methodologies to count.
     * @example
     * // Count the number of Scrum_Methodologies
     * const count = await prisma.scrum_Methodology.count({
     *   where: {
     *     // ... the filter for the Scrum_Methodologies we want to count
     *   }
     * })
    **/
    count<T extends Scrum_MethodologyCountArgs>(
      args?: Subset<T, Scrum_MethodologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Scrum_MethodologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scrum_Methodology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Scrum_MethodologyAggregateArgs>(args: Subset<T, Scrum_MethodologyAggregateArgs>): Prisma.PrismaPromise<GetScrum_MethodologyAggregateType<T>>

    /**
     * Group by Scrum_Methodology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrum_MethodologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Scrum_MethodologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Scrum_MethodologyGroupByArgs['orderBy'] }
        : { orderBy?: Scrum_MethodologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Scrum_MethodologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrum_MethodologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scrum_Methodology model
   */
  readonly fields: Scrum_MethodologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scrum_Methodology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Scrum_MethodologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Scrum_Methodology model
   */ 
  interface Scrum_MethodologyFieldRefs {
    readonly id: FieldRef<"Scrum_Methodology", 'String'>
    readonly authorname: FieldRef<"Scrum_Methodology", 'String'>
    readonly extraInformation: FieldRef<"Scrum_Methodology", 'String'>
    readonly title: FieldRef<"Scrum_Methodology", 'String'>
    readonly volume: FieldRef<"Scrum_Methodology", 'Int'>
    readonly yearOfPublication: FieldRef<"Scrum_Methodology", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Scrum_Methodology findUnique
   */
  export type Scrum_MethodologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which Scrum_Methodology to fetch.
     */
    where: Scrum_MethodologyWhereUniqueInput
  }


  /**
   * Scrum_Methodology findUniqueOrThrow
   */
  export type Scrum_MethodologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which Scrum_Methodology to fetch.
     */
    where: Scrum_MethodologyWhereUniqueInput
  }


  /**
   * Scrum_Methodology findFirst
   */
  export type Scrum_MethodologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which Scrum_Methodology to fetch.
     */
    where?: Scrum_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrum_Methodologies to fetch.
     */
    orderBy?: Scrum_MethodologyOrderByWithRelationInput | Scrum_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scrum_Methodologies.
     */
    cursor?: Scrum_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrum_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrum_Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scrum_Methodologies.
     */
    distinct?: Scrum_MethodologyScalarFieldEnum | Scrum_MethodologyScalarFieldEnum[]
  }


  /**
   * Scrum_Methodology findFirstOrThrow
   */
  export type Scrum_MethodologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which Scrum_Methodology to fetch.
     */
    where?: Scrum_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrum_Methodologies to fetch.
     */
    orderBy?: Scrum_MethodologyOrderByWithRelationInput | Scrum_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scrum_Methodologies.
     */
    cursor?: Scrum_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrum_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrum_Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scrum_Methodologies.
     */
    distinct?: Scrum_MethodologyScalarFieldEnum | Scrum_MethodologyScalarFieldEnum[]
  }


  /**
   * Scrum_Methodology findMany
   */
  export type Scrum_MethodologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * Filter, which Scrum_Methodologies to fetch.
     */
    where?: Scrum_MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrum_Methodologies to fetch.
     */
    orderBy?: Scrum_MethodologyOrderByWithRelationInput | Scrum_MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scrum_Methodologies.
     */
    cursor?: Scrum_MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrum_Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrum_Methodologies.
     */
    skip?: number
    distinct?: Scrum_MethodologyScalarFieldEnum | Scrum_MethodologyScalarFieldEnum[]
  }


  /**
   * Scrum_Methodology create
   */
  export type Scrum_MethodologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * The data needed to create a Scrum_Methodology.
     */
    data: XOR<Scrum_MethodologyCreateInput, Scrum_MethodologyUncheckedCreateInput>
  }


  /**
   * Scrum_Methodology createMany
   */
  export type Scrum_MethodologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scrum_Methodologies.
     */
    data: Scrum_MethodologyCreateManyInput | Scrum_MethodologyCreateManyInput[]
  }


  /**
   * Scrum_Methodology update
   */
  export type Scrum_MethodologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * The data needed to update a Scrum_Methodology.
     */
    data: XOR<Scrum_MethodologyUpdateInput, Scrum_MethodologyUncheckedUpdateInput>
    /**
     * Choose, which Scrum_Methodology to update.
     */
    where: Scrum_MethodologyWhereUniqueInput
  }


  /**
   * Scrum_Methodology updateMany
   */
  export type Scrum_MethodologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scrum_Methodologies.
     */
    data: XOR<Scrum_MethodologyUpdateManyMutationInput, Scrum_MethodologyUncheckedUpdateManyInput>
    /**
     * Filter which Scrum_Methodologies to update
     */
    where?: Scrum_MethodologyWhereInput
  }


  /**
   * Scrum_Methodology upsert
   */
  export type Scrum_MethodologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * The filter to search for the Scrum_Methodology to update in case it exists.
     */
    where: Scrum_MethodologyWhereUniqueInput
    /**
     * In case the Scrum_Methodology found by the `where` argument doesn't exist, create a new Scrum_Methodology with this data.
     */
    create: XOR<Scrum_MethodologyCreateInput, Scrum_MethodologyUncheckedCreateInput>
    /**
     * In case the Scrum_Methodology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Scrum_MethodologyUpdateInput, Scrum_MethodologyUncheckedUpdateInput>
  }


  /**
   * Scrum_Methodology delete
   */
  export type Scrum_MethodologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
    /**
     * Filter which Scrum_Methodology to delete.
     */
    where: Scrum_MethodologyWhereUniqueInput
  }


  /**
   * Scrum_Methodology deleteMany
   */
  export type Scrum_MethodologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scrum_Methodologies to delete
     */
    where?: Scrum_MethodologyWhereInput
  }


  /**
   * Scrum_Methodology findRaw
   */
  export type Scrum_MethodologyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Scrum_Methodology aggregateRaw
   */
  export type Scrum_MethodologyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Scrum_Methodology without action
   */
  export type Scrum_MethodologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrum_Methodology
     */
    select?: Scrum_MethodologySelect<ExtArgs> | null
  }



  /**
   * Model Test_Driven_Development
   */

  export type AggregateTest_Driven_Development = {
    _count: Test_Driven_DevelopmentCountAggregateOutputType | null
    _avg: Test_Driven_DevelopmentAvgAggregateOutputType | null
    _sum: Test_Driven_DevelopmentSumAggregateOutputType | null
    _min: Test_Driven_DevelopmentMinAggregateOutputType | null
    _max: Test_Driven_DevelopmentMaxAggregateOutputType | null
  }

  export type Test_Driven_DevelopmentAvgAggregateOutputType = {
    volume: number | null
  }

  export type Test_Driven_DevelopmentSumAggregateOutputType = {
    volume: number | null
  }

  export type Test_Driven_DevelopmentMinAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type Test_Driven_DevelopmentMaxAggregateOutputType = {
    id: string | null
    authorname: string | null
    extraInformation: string | null
    title: string | null
    volume: number | null
    yearOfPublication: string | null
  }

  export type Test_Driven_DevelopmentCountAggregateOutputType = {
    id: number
    authorname: number
    extraInformation: number
    title: number
    volume: number
    yearOfPublication: number
    _all: number
  }


  export type Test_Driven_DevelopmentAvgAggregateInputType = {
    volume?: true
  }

  export type Test_Driven_DevelopmentSumAggregateInputType = {
    volume?: true
  }

  export type Test_Driven_DevelopmentMinAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type Test_Driven_DevelopmentMaxAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
  }

  export type Test_Driven_DevelopmentCountAggregateInputType = {
    id?: true
    authorname?: true
    extraInformation?: true
    title?: true
    volume?: true
    yearOfPublication?: true
    _all?: true
  }

  export type Test_Driven_DevelopmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test_Driven_Development to aggregate.
     */
    where?: Test_Driven_DevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Driven_Developments to fetch.
     */
    orderBy?: Test_Driven_DevelopmentOrderByWithRelationInput | Test_Driven_DevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Test_Driven_DevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Driven_Developments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Driven_Developments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Test_Driven_Developments
    **/
    _count?: true | Test_Driven_DevelopmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test_Driven_DevelopmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test_Driven_DevelopmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_Driven_DevelopmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_Driven_DevelopmentMaxAggregateInputType
  }

  export type GetTest_Driven_DevelopmentAggregateType<T extends Test_Driven_DevelopmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_Driven_Development]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_Driven_Development[P]>
      : GetScalarType<T[P], AggregateTest_Driven_Development[P]>
  }




  export type Test_Driven_DevelopmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test_Driven_DevelopmentWhereInput
    orderBy?: Test_Driven_DevelopmentOrderByWithAggregationInput | Test_Driven_DevelopmentOrderByWithAggregationInput[]
    by: Test_Driven_DevelopmentScalarFieldEnum[] | Test_Driven_DevelopmentScalarFieldEnum
    having?: Test_Driven_DevelopmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_Driven_DevelopmentCountAggregateInputType | true
    _avg?: Test_Driven_DevelopmentAvgAggregateInputType
    _sum?: Test_Driven_DevelopmentSumAggregateInputType
    _min?: Test_Driven_DevelopmentMinAggregateInputType
    _max?: Test_Driven_DevelopmentMaxAggregateInputType
  }

  export type Test_Driven_DevelopmentGroupByOutputType = {
    id: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
    _count: Test_Driven_DevelopmentCountAggregateOutputType | null
    _avg: Test_Driven_DevelopmentAvgAggregateOutputType | null
    _sum: Test_Driven_DevelopmentSumAggregateOutputType | null
    _min: Test_Driven_DevelopmentMinAggregateOutputType | null
    _max: Test_Driven_DevelopmentMaxAggregateOutputType | null
  }

  type GetTest_Driven_DevelopmentGroupByPayload<T extends Test_Driven_DevelopmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_Driven_DevelopmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_Driven_DevelopmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_Driven_DevelopmentGroupByOutputType[P]>
            : GetScalarType<T[P], Test_Driven_DevelopmentGroupByOutputType[P]>
        }
      >
    >


  export type Test_Driven_DevelopmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }, ExtArgs["result"]["test_Driven_Development"]>

  export type Test_Driven_DevelopmentSelectScalar = {
    id?: boolean
    authorname?: boolean
    extraInformation?: boolean
    title?: boolean
    volume?: boolean
    yearOfPublication?: boolean
  }


  export type $Test_Driven_DevelopmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test_Driven_Development"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorname: string
      extraInformation: string
      title: string
      volume: number
      yearOfPublication: string
    }, ExtArgs["result"]["test_Driven_Development"]>
    composites: {}
  }


  type Test_Driven_DevelopmentGetPayload<S extends boolean | null | undefined | Test_Driven_DevelopmentDefaultArgs> = $Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload, S>

  type Test_Driven_DevelopmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Test_Driven_DevelopmentFindManyArgs, 'select' | 'include'> & {
      select?: Test_Driven_DevelopmentCountAggregateInputType | true
    }

  export interface Test_Driven_DevelopmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test_Driven_Development'], meta: { name: 'Test_Driven_Development' } }
    /**
     * Find zero or one Test_Driven_Development that matches the filter.
     * @param {Test_Driven_DevelopmentFindUniqueArgs} args - Arguments to find a Test_Driven_Development
     * @example
     * // Get one Test_Driven_Development
     * const test_Driven_Development = await prisma.test_Driven_Development.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Test_Driven_DevelopmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Test_Driven_DevelopmentFindUniqueArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test_Driven_Development that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Test_Driven_DevelopmentFindUniqueOrThrowArgs} args - Arguments to find a Test_Driven_Development
     * @example
     * // Get one Test_Driven_Development
     * const test_Driven_Development = await prisma.test_Driven_Development.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Test_Driven_DevelopmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Test_Driven_DevelopmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test_Driven_Development that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentFindFirstArgs} args - Arguments to find a Test_Driven_Development
     * @example
     * // Get one Test_Driven_Development
     * const test_Driven_Development = await prisma.test_Driven_Development.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Test_Driven_DevelopmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Test_Driven_DevelopmentFindFirstArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test_Driven_Development that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentFindFirstOrThrowArgs} args - Arguments to find a Test_Driven_Development
     * @example
     * // Get one Test_Driven_Development
     * const test_Driven_Development = await prisma.test_Driven_Development.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Test_Driven_DevelopmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Test_Driven_DevelopmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Test_Driven_Developments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_Driven_Developments
     * const test_Driven_Developments = await prisma.test_Driven_Development.findMany()
     * 
     * // Get first 10 Test_Driven_Developments
     * const test_Driven_Developments = await prisma.test_Driven_Development.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_Driven_DevelopmentWithIdOnly = await prisma.test_Driven_Development.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Test_Driven_DevelopmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Test_Driven_DevelopmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test_Driven_Development.
     * @param {Test_Driven_DevelopmentCreateArgs} args - Arguments to create a Test_Driven_Development.
     * @example
     * // Create one Test_Driven_Development
     * const Test_Driven_Development = await prisma.test_Driven_Development.create({
     *   data: {
     *     // ... data to create a Test_Driven_Development
     *   }
     * })
     * 
    **/
    create<T extends Test_Driven_DevelopmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Test_Driven_DevelopmentCreateArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Test_Driven_Developments.
     *     @param {Test_Driven_DevelopmentCreateManyArgs} args - Arguments to create many Test_Driven_Developments.
     *     @example
     *     // Create many Test_Driven_Developments
     *     const test_Driven_Development = await prisma.test_Driven_Development.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Test_Driven_DevelopmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Test_Driven_DevelopmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test_Driven_Development.
     * @param {Test_Driven_DevelopmentDeleteArgs} args - Arguments to delete one Test_Driven_Development.
     * @example
     * // Delete one Test_Driven_Development
     * const Test_Driven_Development = await prisma.test_Driven_Development.delete({
     *   where: {
     *     // ... filter to delete one Test_Driven_Development
     *   }
     * })
     * 
    **/
    delete<T extends Test_Driven_DevelopmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Test_Driven_DevelopmentDeleteArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test_Driven_Development.
     * @param {Test_Driven_DevelopmentUpdateArgs} args - Arguments to update one Test_Driven_Development.
     * @example
     * // Update one Test_Driven_Development
     * const test_Driven_Development = await prisma.test_Driven_Development.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Test_Driven_DevelopmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Test_Driven_DevelopmentUpdateArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Test_Driven_Developments.
     * @param {Test_Driven_DevelopmentDeleteManyArgs} args - Arguments to filter Test_Driven_Developments to delete.
     * @example
     * // Delete a few Test_Driven_Developments
     * const { count } = await prisma.test_Driven_Development.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Test_Driven_DevelopmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Test_Driven_DevelopmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_Driven_Developments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_Driven_Developments
     * const test_Driven_Development = await prisma.test_Driven_Development.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Test_Driven_DevelopmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Test_Driven_DevelopmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_Driven_Development.
     * @param {Test_Driven_DevelopmentUpsertArgs} args - Arguments to update or create a Test_Driven_Development.
     * @example
     * // Update or create a Test_Driven_Development
     * const test_Driven_Development = await prisma.test_Driven_Development.upsert({
     *   create: {
     *     // ... data to create a Test_Driven_Development
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_Driven_Development we want to update
     *   }
     * })
    **/
    upsert<T extends Test_Driven_DevelopmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Test_Driven_DevelopmentUpsertArgs<ExtArgs>>
    ): Prisma__Test_Driven_DevelopmentClient<$Result.GetResult<Prisma.$Test_Driven_DevelopmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Test_Driven_Developments that matches the filter.
     * @param {Test_Driven_DevelopmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const test_Driven_Development = await prisma.test_Driven_Development.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Test_Driven_DevelopmentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Test_Driven_Development.
     * @param {Test_Driven_DevelopmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const test_Driven_Development = await prisma.test_Driven_Development.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Test_Driven_DevelopmentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Test_Driven_Developments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentCountArgs} args - Arguments to filter Test_Driven_Developments to count.
     * @example
     * // Count the number of Test_Driven_Developments
     * const count = await prisma.test_Driven_Development.count({
     *   where: {
     *     // ... the filter for the Test_Driven_Developments we want to count
     *   }
     * })
    **/
    count<T extends Test_Driven_DevelopmentCountArgs>(
      args?: Subset<T, Test_Driven_DevelopmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_Driven_DevelopmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_Driven_Development.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_Driven_DevelopmentAggregateArgs>(args: Subset<T, Test_Driven_DevelopmentAggregateArgs>): Prisma.PrismaPromise<GetTest_Driven_DevelopmentAggregateType<T>>

    /**
     * Group by Test_Driven_Development.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_Driven_DevelopmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Test_Driven_DevelopmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_Driven_DevelopmentGroupByArgs['orderBy'] }
        : { orderBy?: Test_Driven_DevelopmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Test_Driven_DevelopmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_Driven_DevelopmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test_Driven_Development model
   */
  readonly fields: Test_Driven_DevelopmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test_Driven_Development.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Test_Driven_DevelopmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Test_Driven_Development model
   */ 
  interface Test_Driven_DevelopmentFieldRefs {
    readonly id: FieldRef<"Test_Driven_Development", 'String'>
    readonly authorname: FieldRef<"Test_Driven_Development", 'String'>
    readonly extraInformation: FieldRef<"Test_Driven_Development", 'String'>
    readonly title: FieldRef<"Test_Driven_Development", 'String'>
    readonly volume: FieldRef<"Test_Driven_Development", 'Int'>
    readonly yearOfPublication: FieldRef<"Test_Driven_Development", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Test_Driven_Development findUnique
   */
  export type Test_Driven_DevelopmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * Filter, which Test_Driven_Development to fetch.
     */
    where: Test_Driven_DevelopmentWhereUniqueInput
  }


  /**
   * Test_Driven_Development findUniqueOrThrow
   */
  export type Test_Driven_DevelopmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * Filter, which Test_Driven_Development to fetch.
     */
    where: Test_Driven_DevelopmentWhereUniqueInput
  }


  /**
   * Test_Driven_Development findFirst
   */
  export type Test_Driven_DevelopmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * Filter, which Test_Driven_Development to fetch.
     */
    where?: Test_Driven_DevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Driven_Developments to fetch.
     */
    orderBy?: Test_Driven_DevelopmentOrderByWithRelationInput | Test_Driven_DevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test_Driven_Developments.
     */
    cursor?: Test_Driven_DevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Driven_Developments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Driven_Developments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test_Driven_Developments.
     */
    distinct?: Test_Driven_DevelopmentScalarFieldEnum | Test_Driven_DevelopmentScalarFieldEnum[]
  }


  /**
   * Test_Driven_Development findFirstOrThrow
   */
  export type Test_Driven_DevelopmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * Filter, which Test_Driven_Development to fetch.
     */
    where?: Test_Driven_DevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Driven_Developments to fetch.
     */
    orderBy?: Test_Driven_DevelopmentOrderByWithRelationInput | Test_Driven_DevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test_Driven_Developments.
     */
    cursor?: Test_Driven_DevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Driven_Developments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Driven_Developments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test_Driven_Developments.
     */
    distinct?: Test_Driven_DevelopmentScalarFieldEnum | Test_Driven_DevelopmentScalarFieldEnum[]
  }


  /**
   * Test_Driven_Development findMany
   */
  export type Test_Driven_DevelopmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * Filter, which Test_Driven_Developments to fetch.
     */
    where?: Test_Driven_DevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Driven_Developments to fetch.
     */
    orderBy?: Test_Driven_DevelopmentOrderByWithRelationInput | Test_Driven_DevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Test_Driven_Developments.
     */
    cursor?: Test_Driven_DevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Driven_Developments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Driven_Developments.
     */
    skip?: number
    distinct?: Test_Driven_DevelopmentScalarFieldEnum | Test_Driven_DevelopmentScalarFieldEnum[]
  }


  /**
   * Test_Driven_Development create
   */
  export type Test_Driven_DevelopmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * The data needed to create a Test_Driven_Development.
     */
    data: XOR<Test_Driven_DevelopmentCreateInput, Test_Driven_DevelopmentUncheckedCreateInput>
  }


  /**
   * Test_Driven_Development createMany
   */
  export type Test_Driven_DevelopmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Test_Driven_Developments.
     */
    data: Test_Driven_DevelopmentCreateManyInput | Test_Driven_DevelopmentCreateManyInput[]
  }


  /**
   * Test_Driven_Development update
   */
  export type Test_Driven_DevelopmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * The data needed to update a Test_Driven_Development.
     */
    data: XOR<Test_Driven_DevelopmentUpdateInput, Test_Driven_DevelopmentUncheckedUpdateInput>
    /**
     * Choose, which Test_Driven_Development to update.
     */
    where: Test_Driven_DevelopmentWhereUniqueInput
  }


  /**
   * Test_Driven_Development updateMany
   */
  export type Test_Driven_DevelopmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Test_Driven_Developments.
     */
    data: XOR<Test_Driven_DevelopmentUpdateManyMutationInput, Test_Driven_DevelopmentUncheckedUpdateManyInput>
    /**
     * Filter which Test_Driven_Developments to update
     */
    where?: Test_Driven_DevelopmentWhereInput
  }


  /**
   * Test_Driven_Development upsert
   */
  export type Test_Driven_DevelopmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * The filter to search for the Test_Driven_Development to update in case it exists.
     */
    where: Test_Driven_DevelopmentWhereUniqueInput
    /**
     * In case the Test_Driven_Development found by the `where` argument doesn't exist, create a new Test_Driven_Development with this data.
     */
    create: XOR<Test_Driven_DevelopmentCreateInput, Test_Driven_DevelopmentUncheckedCreateInput>
    /**
     * In case the Test_Driven_Development was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Test_Driven_DevelopmentUpdateInput, Test_Driven_DevelopmentUncheckedUpdateInput>
  }


  /**
   * Test_Driven_Development delete
   */
  export type Test_Driven_DevelopmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
    /**
     * Filter which Test_Driven_Development to delete.
     */
    where: Test_Driven_DevelopmentWhereUniqueInput
  }


  /**
   * Test_Driven_Development deleteMany
   */
  export type Test_Driven_DevelopmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test_Driven_Developments to delete
     */
    where?: Test_Driven_DevelopmentWhereInput
  }


  /**
   * Test_Driven_Development findRaw
   */
  export type Test_Driven_DevelopmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Test_Driven_Development aggregateRaw
   */
  export type Test_Driven_DevelopmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Test_Driven_Development without action
   */
  export type Test_Driven_DevelopmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Driven_Development
     */
    select?: Test_Driven_DevelopmentSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const AcceptedScalarFieldEnum: {
    id: 'id'
  };

  export type AcceptedScalarFieldEnum = (typeof AcceptedScalarFieldEnum)[keyof typeof AcceptedScalarFieldEnum]


  export const AgileScalarFieldEnum: {
    id: 'id',
    authorname: 'authorname',
    extraInformation: 'extraInformation',
    title: 'title',
    volume: 'volume',
    yearOfPublication: 'yearOfPublication'
  };

  export type AgileScalarFieldEnum = (typeof AgileScalarFieldEnum)[keyof typeof AgileScalarFieldEnum]


  export const AllScalarFieldEnum: {
    id: 'id',
    authorname: 'authorname',
    extraInformation: 'extraInformation',
    title: 'title',
    volume: 'volume',
    yearOfPublication: 'yearOfPublication'
  };

  export type AllScalarFieldEnum = (typeof AllScalarFieldEnum)[keyof typeof AllScalarFieldEnum]


  export const DevOps_Deployment_MethodologyScalarFieldEnum: {
    id: 'id',
    authorname: 'authorname',
    extraInformation: 'extraInformation',
    title: 'title',
    volume: 'volume',
    yearOfPublication: 'yearOfPublication'
  };

  export type DevOps_Deployment_MethodologyScalarFieldEnum = (typeof DevOps_Deployment_MethodologyScalarFieldEnum)[keyof typeof DevOps_Deployment_MethodologyScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    authorname: 'authorname',
    extraInformation: 'extraInformation',
    responseEmail: 'responseEmail',
    title: 'title',
    volume: 'volume',
    yearOfPublication: 'yearOfPublication'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const Scrum_MethodologyScalarFieldEnum: {
    id: 'id',
    authorname: 'authorname',
    extraInformation: 'extraInformation',
    title: 'title',
    volume: 'volume',
    yearOfPublication: 'yearOfPublication'
  };

  export type Scrum_MethodologyScalarFieldEnum = (typeof Scrum_MethodologyScalarFieldEnum)[keyof typeof Scrum_MethodologyScalarFieldEnum]


  export const Test_Driven_DevelopmentScalarFieldEnum: {
    id: 'id',
    authorname: 'authorname',
    extraInformation: 'extraInformation',
    title: 'title',
    volume: 'volume',
    yearOfPublication: 'yearOfPublication'
  };

  export type Test_Driven_DevelopmentScalarFieldEnum = (typeof Test_Driven_DevelopmentScalarFieldEnum)[keyof typeof Test_Driven_DevelopmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AcceptedWhereInput = {
    AND?: AcceptedWhereInput | AcceptedWhereInput[]
    OR?: AcceptedWhereInput[]
    NOT?: AcceptedWhereInput | AcceptedWhereInput[]
    id?: StringFilter<"Accepted"> | string
  }

  export type AcceptedOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type AcceptedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcceptedWhereInput | AcceptedWhereInput[]
    OR?: AcceptedWhereInput[]
    NOT?: AcceptedWhereInput | AcceptedWhereInput[]
  }, "id">

  export type AcceptedOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: AcceptedCountOrderByAggregateInput
    _max?: AcceptedMaxOrderByAggregateInput
    _min?: AcceptedMinOrderByAggregateInput
  }

  export type AcceptedScalarWhereWithAggregatesInput = {
    AND?: AcceptedScalarWhereWithAggregatesInput | AcceptedScalarWhereWithAggregatesInput[]
    OR?: AcceptedScalarWhereWithAggregatesInput[]
    NOT?: AcceptedScalarWhereWithAggregatesInput | AcceptedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accepted"> | string
  }

  export type AgileWhereInput = {
    AND?: AgileWhereInput | AgileWhereInput[]
    OR?: AgileWhereInput[]
    NOT?: AgileWhereInput | AgileWhereInput[]
    id?: StringFilter<"Agile"> | string
    authorname?: StringFilter<"Agile"> | string
    extraInformation?: StringFilter<"Agile"> | string
    title?: StringFilter<"Agile"> | string
    volume?: IntFilter<"Agile"> | number
    yearOfPublication?: StringFilter<"Agile"> | string
  }

  export type AgileOrderByWithRelationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AgileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgileWhereInput | AgileWhereInput[]
    OR?: AgileWhereInput[]
    NOT?: AgileWhereInput | AgileWhereInput[]
    authorname?: StringFilter<"Agile"> | string
    extraInformation?: StringFilter<"Agile"> | string
    title?: StringFilter<"Agile"> | string
    volume?: IntFilter<"Agile"> | number
    yearOfPublication?: StringFilter<"Agile"> | string
  }, "id">

  export type AgileOrderByWithAggregationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
    _count?: AgileCountOrderByAggregateInput
    _avg?: AgileAvgOrderByAggregateInput
    _max?: AgileMaxOrderByAggregateInput
    _min?: AgileMinOrderByAggregateInput
    _sum?: AgileSumOrderByAggregateInput
  }

  export type AgileScalarWhereWithAggregatesInput = {
    AND?: AgileScalarWhereWithAggregatesInput | AgileScalarWhereWithAggregatesInput[]
    OR?: AgileScalarWhereWithAggregatesInput[]
    NOT?: AgileScalarWhereWithAggregatesInput | AgileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agile"> | string
    authorname?: StringWithAggregatesFilter<"Agile"> | string
    extraInformation?: StringWithAggregatesFilter<"Agile"> | string
    title?: StringWithAggregatesFilter<"Agile"> | string
    volume?: IntWithAggregatesFilter<"Agile"> | number
    yearOfPublication?: StringWithAggregatesFilter<"Agile"> | string
  }

  export type AllWhereInput = {
    AND?: AllWhereInput | AllWhereInput[]
    OR?: AllWhereInput[]
    NOT?: AllWhereInput | AllWhereInput[]
    id?: StringFilter<"All"> | string
    authorname?: StringFilter<"All"> | string
    extraInformation?: StringFilter<"All"> | string
    title?: StringFilter<"All"> | string
    volume?: IntFilter<"All"> | number
    yearOfPublication?: StringFilter<"All"> | string
  }

  export type AllOrderByWithRelationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AllWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AllWhereInput | AllWhereInput[]
    OR?: AllWhereInput[]
    NOT?: AllWhereInput | AllWhereInput[]
    authorname?: StringFilter<"All"> | string
    extraInformation?: StringFilter<"All"> | string
    title?: StringFilter<"All"> | string
    volume?: IntFilter<"All"> | number
    yearOfPublication?: StringFilter<"All"> | string
  }, "id">

  export type AllOrderByWithAggregationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
    _count?: AllCountOrderByAggregateInput
    _avg?: AllAvgOrderByAggregateInput
    _max?: AllMaxOrderByAggregateInput
    _min?: AllMinOrderByAggregateInput
    _sum?: AllSumOrderByAggregateInput
  }

  export type AllScalarWhereWithAggregatesInput = {
    AND?: AllScalarWhereWithAggregatesInput | AllScalarWhereWithAggregatesInput[]
    OR?: AllScalarWhereWithAggregatesInput[]
    NOT?: AllScalarWhereWithAggregatesInput | AllScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"All"> | string
    authorname?: StringWithAggregatesFilter<"All"> | string
    extraInformation?: StringWithAggregatesFilter<"All"> | string
    title?: StringWithAggregatesFilter<"All"> | string
    volume?: IntWithAggregatesFilter<"All"> | number
    yearOfPublication?: StringWithAggregatesFilter<"All"> | string
  }

  export type DevOps_Deployment_MethodologyWhereInput = {
    AND?: DevOps_Deployment_MethodologyWhereInput | DevOps_Deployment_MethodologyWhereInput[]
    OR?: DevOps_Deployment_MethodologyWhereInput[]
    NOT?: DevOps_Deployment_MethodologyWhereInput | DevOps_Deployment_MethodologyWhereInput[]
    id?: StringFilter<"DevOps_Deployment_Methodology"> | string
    authorname?: StringFilter<"DevOps_Deployment_Methodology"> | string
    extraInformation?: StringFilter<"DevOps_Deployment_Methodology"> | string
    title?: StringFilter<"DevOps_Deployment_Methodology"> | string
    volume?: IntFilter<"DevOps_Deployment_Methodology"> | number
    yearOfPublication?: StringFilter<"DevOps_Deployment_Methodology"> | string
  }

  export type DevOps_Deployment_MethodologyOrderByWithRelationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type DevOps_Deployment_MethodologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DevOps_Deployment_MethodologyWhereInput | DevOps_Deployment_MethodologyWhereInput[]
    OR?: DevOps_Deployment_MethodologyWhereInput[]
    NOT?: DevOps_Deployment_MethodologyWhereInput | DevOps_Deployment_MethodologyWhereInput[]
    authorname?: StringFilter<"DevOps_Deployment_Methodology"> | string
    extraInformation?: StringFilter<"DevOps_Deployment_Methodology"> | string
    title?: StringFilter<"DevOps_Deployment_Methodology"> | string
    volume?: IntFilter<"DevOps_Deployment_Methodology"> | number
    yearOfPublication?: StringFilter<"DevOps_Deployment_Methodology"> | string
  }, "id">

  export type DevOps_Deployment_MethodologyOrderByWithAggregationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
    _count?: DevOps_Deployment_MethodologyCountOrderByAggregateInput
    _avg?: DevOps_Deployment_MethodologyAvgOrderByAggregateInput
    _max?: DevOps_Deployment_MethodologyMaxOrderByAggregateInput
    _min?: DevOps_Deployment_MethodologyMinOrderByAggregateInput
    _sum?: DevOps_Deployment_MethodologySumOrderByAggregateInput
  }

  export type DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput = {
    AND?: DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput | DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput[]
    OR?: DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput[]
    NOT?: DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput | DevOps_Deployment_MethodologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DevOps_Deployment_Methodology"> | string
    authorname?: StringWithAggregatesFilter<"DevOps_Deployment_Methodology"> | string
    extraInformation?: StringWithAggregatesFilter<"DevOps_Deployment_Methodology"> | string
    title?: StringWithAggregatesFilter<"DevOps_Deployment_Methodology"> | string
    volume?: IntWithAggregatesFilter<"DevOps_Deployment_Methodology"> | number
    yearOfPublication?: StringWithAggregatesFilter<"DevOps_Deployment_Methodology"> | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    authorname?: StringFilter<"Form"> | string
    extraInformation?: StringFilter<"Form"> | string
    responseEmail?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    volume?: BigIntFilter<"Form"> | bigint | number
    yearOfPublication?: StringFilter<"Form"> | string
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    responseEmail?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    authorname?: StringFilter<"Form"> | string
    extraInformation?: StringFilter<"Form"> | string
    responseEmail?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    volume?: BigIntFilter<"Form"> | bigint | number
    yearOfPublication?: StringFilter<"Form"> | string
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    responseEmail?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    authorname?: StringWithAggregatesFilter<"Form"> | string
    extraInformation?: StringWithAggregatesFilter<"Form"> | string
    responseEmail?: StringWithAggregatesFilter<"Form"> | string
    title?: StringWithAggregatesFilter<"Form"> | string
    volume?: BigIntWithAggregatesFilter<"Form"> | bigint | number
    yearOfPublication?: StringWithAggregatesFilter<"Form"> | string
  }

  export type Scrum_MethodologyWhereInput = {
    AND?: Scrum_MethodologyWhereInput | Scrum_MethodologyWhereInput[]
    OR?: Scrum_MethodologyWhereInput[]
    NOT?: Scrum_MethodologyWhereInput | Scrum_MethodologyWhereInput[]
    id?: StringFilter<"Scrum_Methodology"> | string
    authorname?: StringFilter<"Scrum_Methodology"> | string
    extraInformation?: StringFilter<"Scrum_Methodology"> | string
    title?: StringFilter<"Scrum_Methodology"> | string
    volume?: IntFilter<"Scrum_Methodology"> | number
    yearOfPublication?: StringFilter<"Scrum_Methodology"> | string
  }

  export type Scrum_MethodologyOrderByWithRelationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Scrum_MethodologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Scrum_MethodologyWhereInput | Scrum_MethodologyWhereInput[]
    OR?: Scrum_MethodologyWhereInput[]
    NOT?: Scrum_MethodologyWhereInput | Scrum_MethodologyWhereInput[]
    authorname?: StringFilter<"Scrum_Methodology"> | string
    extraInformation?: StringFilter<"Scrum_Methodology"> | string
    title?: StringFilter<"Scrum_Methodology"> | string
    volume?: IntFilter<"Scrum_Methodology"> | number
    yearOfPublication?: StringFilter<"Scrum_Methodology"> | string
  }, "id">

  export type Scrum_MethodologyOrderByWithAggregationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
    _count?: Scrum_MethodologyCountOrderByAggregateInput
    _avg?: Scrum_MethodologyAvgOrderByAggregateInput
    _max?: Scrum_MethodologyMaxOrderByAggregateInput
    _min?: Scrum_MethodologyMinOrderByAggregateInput
    _sum?: Scrum_MethodologySumOrderByAggregateInput
  }

  export type Scrum_MethodologyScalarWhereWithAggregatesInput = {
    AND?: Scrum_MethodologyScalarWhereWithAggregatesInput | Scrum_MethodologyScalarWhereWithAggregatesInput[]
    OR?: Scrum_MethodologyScalarWhereWithAggregatesInput[]
    NOT?: Scrum_MethodologyScalarWhereWithAggregatesInput | Scrum_MethodologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scrum_Methodology"> | string
    authorname?: StringWithAggregatesFilter<"Scrum_Methodology"> | string
    extraInformation?: StringWithAggregatesFilter<"Scrum_Methodology"> | string
    title?: StringWithAggregatesFilter<"Scrum_Methodology"> | string
    volume?: IntWithAggregatesFilter<"Scrum_Methodology"> | number
    yearOfPublication?: StringWithAggregatesFilter<"Scrum_Methodology"> | string
  }

  export type Test_Driven_DevelopmentWhereInput = {
    AND?: Test_Driven_DevelopmentWhereInput | Test_Driven_DevelopmentWhereInput[]
    OR?: Test_Driven_DevelopmentWhereInput[]
    NOT?: Test_Driven_DevelopmentWhereInput | Test_Driven_DevelopmentWhereInput[]
    id?: StringFilter<"Test_Driven_Development"> | string
    authorname?: StringFilter<"Test_Driven_Development"> | string
    extraInformation?: StringFilter<"Test_Driven_Development"> | string
    title?: StringFilter<"Test_Driven_Development"> | string
    volume?: IntFilter<"Test_Driven_Development"> | number
    yearOfPublication?: StringFilter<"Test_Driven_Development"> | string
  }

  export type Test_Driven_DevelopmentOrderByWithRelationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Test_Driven_DevelopmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Test_Driven_DevelopmentWhereInput | Test_Driven_DevelopmentWhereInput[]
    OR?: Test_Driven_DevelopmentWhereInput[]
    NOT?: Test_Driven_DevelopmentWhereInput | Test_Driven_DevelopmentWhereInput[]
    authorname?: StringFilter<"Test_Driven_Development"> | string
    extraInformation?: StringFilter<"Test_Driven_Development"> | string
    title?: StringFilter<"Test_Driven_Development"> | string
    volume?: IntFilter<"Test_Driven_Development"> | number
    yearOfPublication?: StringFilter<"Test_Driven_Development"> | string
  }, "id">

  export type Test_Driven_DevelopmentOrderByWithAggregationInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
    _count?: Test_Driven_DevelopmentCountOrderByAggregateInput
    _avg?: Test_Driven_DevelopmentAvgOrderByAggregateInput
    _max?: Test_Driven_DevelopmentMaxOrderByAggregateInput
    _min?: Test_Driven_DevelopmentMinOrderByAggregateInput
    _sum?: Test_Driven_DevelopmentSumOrderByAggregateInput
  }

  export type Test_Driven_DevelopmentScalarWhereWithAggregatesInput = {
    AND?: Test_Driven_DevelopmentScalarWhereWithAggregatesInput | Test_Driven_DevelopmentScalarWhereWithAggregatesInput[]
    OR?: Test_Driven_DevelopmentScalarWhereWithAggregatesInput[]
    NOT?: Test_Driven_DevelopmentScalarWhereWithAggregatesInput | Test_Driven_DevelopmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test_Driven_Development"> | string
    authorname?: StringWithAggregatesFilter<"Test_Driven_Development"> | string
    extraInformation?: StringWithAggregatesFilter<"Test_Driven_Development"> | string
    title?: StringWithAggregatesFilter<"Test_Driven_Development"> | string
    volume?: IntWithAggregatesFilter<"Test_Driven_Development"> | number
    yearOfPublication?: StringWithAggregatesFilter<"Test_Driven_Development"> | string
  }

  export type AcceptedCreateInput = {
    id?: string
  }

  export type AcceptedUncheckedCreateInput = {
    id?: string
  }

  export type AcceptedUpdateInput = {

  }

  export type AcceptedUncheckedUpdateInput = {

  }

  export type AcceptedCreateManyInput = {
    id?: string
  }

  export type AcceptedUpdateManyMutationInput = {

  }

  export type AcceptedUncheckedUpdateManyInput = {

  }

  export type AgileCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type AgileUncheckedCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type AgileUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AgileUncheckedUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AgileCreateManyInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type AgileUpdateManyMutationInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AgileUncheckedUpdateManyInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AllCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type AllUncheckedCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type AllUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AllUncheckedUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AllCreateManyInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type AllUpdateManyMutationInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type AllUncheckedUpdateManyInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type DevOps_Deployment_MethodologyCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type DevOps_Deployment_MethodologyUncheckedCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type DevOps_Deployment_MethodologyUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type DevOps_Deployment_MethodologyUncheckedUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type DevOps_Deployment_MethodologyCreateManyInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type DevOps_Deployment_MethodologyUpdateManyMutationInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type DevOps_Deployment_MethodologyUncheckedUpdateManyInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type FormCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    responseEmail: string
    title: string
    volume: bigint | number
    yearOfPublication: string
  }

  export type FormUncheckedCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    responseEmail: string
    title: string
    volume: bigint | number
    yearOfPublication: string
  }

  export type FormUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    responseEmail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type FormUncheckedUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    responseEmail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type FormCreateManyInput = {
    id?: string
    authorname: string
    extraInformation: string
    responseEmail: string
    title: string
    volume: bigint | number
    yearOfPublication: string
  }

  export type FormUpdateManyMutationInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    responseEmail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type FormUncheckedUpdateManyInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    responseEmail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Scrum_MethodologyCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type Scrum_MethodologyUncheckedCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type Scrum_MethodologyUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Scrum_MethodologyUncheckedUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Scrum_MethodologyCreateManyInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type Scrum_MethodologyUpdateManyMutationInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Scrum_MethodologyUncheckedUpdateManyInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Test_Driven_DevelopmentCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type Test_Driven_DevelopmentUncheckedCreateInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type Test_Driven_DevelopmentUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Test_Driven_DevelopmentUncheckedUpdateInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Test_Driven_DevelopmentCreateManyInput = {
    id?: string
    authorname: string
    extraInformation: string
    title: string
    volume: number
    yearOfPublication: string
  }

  export type Test_Driven_DevelopmentUpdateManyMutationInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type Test_Driven_DevelopmentUncheckedUpdateManyInput = {
    authorname?: StringFieldUpdateOperationsInput | string
    extraInformation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    yearOfPublication?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AcceptedCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcceptedMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcceptedMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AgileCountOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AgileAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type AgileMaxOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AgileMinOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AgileSumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AllCountOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AllAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type AllMaxOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AllMinOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type AllSumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type DevOps_Deployment_MethodologyCountOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type DevOps_Deployment_MethodologyAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type DevOps_Deployment_MethodologyMaxOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type DevOps_Deployment_MethodologyMinOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type DevOps_Deployment_MethodologySumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    responseEmail?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    responseEmail?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    responseEmail?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Scrum_MethodologyCountOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Scrum_MethodologyAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type Scrum_MethodologyMaxOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Scrum_MethodologyMinOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Scrum_MethodologySumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type Test_Driven_DevelopmentCountOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Test_Driven_DevelopmentAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type Test_Driven_DevelopmentMaxOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Test_Driven_DevelopmentMinOrderByAggregateInput = {
    id?: SortOrder
    authorname?: SortOrder
    extraInformation?: SortOrder
    title?: SortOrder
    volume?: SortOrder
    yearOfPublication?: SortOrder
  }

  export type Test_Driven_DevelopmentSumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AcceptedDefaultArgs instead
     */
    export type AcceptedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcceptedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgileDefaultArgs instead
     */
    export type AgileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AllDefaultArgs instead
     */
    export type AllArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AllDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DevOps_Deployment_MethodologyDefaultArgs instead
     */
    export type DevOps_Deployment_MethodologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DevOps_Deployment_MethodologyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormDefaultArgs instead
     */
    export type FormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Scrum_MethodologyDefaultArgs instead
     */
    export type Scrum_MethodologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Scrum_MethodologyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Test_Driven_DevelopmentDefaultArgs instead
     */
    export type Test_Driven_DevelopmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Test_Driven_DevelopmentDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
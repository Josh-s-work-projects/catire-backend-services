
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OrderStatus
 * 
 */
export type OrderStatus = $Result.DefaultSelection<Prisma.$OrderStatusPayload>
/**
 * Model UserAccess
 * 
 */
export type UserAccess = $Result.DefaultSelection<Prisma.$UserAccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatusType: {
  pending: 'pending',
  paid: 'paid',
  in_coming: 'in_coming',
  delivered: 'delivered'
};

export type OrderStatusType = (typeof OrderStatusType)[keyof typeof OrderStatusType]

}

export type OrderStatusType = $Enums.OrderStatusType

export const OrderStatusType: typeof $Enums.OrderStatusType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more OrderStatuses
 * const orderStatuses = await prisma.orderStatus.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more OrderStatuses
   * const orderStatuses = await prisma.orderStatus.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList | "$transaction">) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.orderStatus`: Exposes CRUD operations for the **OrderStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStatuses
    * const orderStatuses = await prisma.orderStatus.findMany()
    * ```
    */
  get orderStatus(): Prisma.OrderStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAccess`: Exposes CRUD operations for the **UserAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccesses
    * const userAccesses = await prisma.userAccess.findMany()
    * ```
    */
  get userAccess(): Prisma.UserAccessDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    OrderStatus: 'OrderStatus',
    UserAccess: 'UserAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "orderStatus" | "userAccess"
      txIsolationLevel: never
    }
    model: {
      OrderStatus: {
        payload: Prisma.$OrderStatusPayload<ExtArgs>
        fields: Prisma.OrderStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          findFirst: {
            args: Prisma.OrderStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          findMany: {
            args: Prisma.OrderStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          create: {
            args: Prisma.OrderStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          createMany: {
            args: Prisma.OrderStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          update: {
            args: Prisma.OrderStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          deleteMany: {
            args: Prisma.OrderStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          aggregate: {
            args: Prisma.OrderStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStatus>
          }
          groupBy: {
            args: Prisma.OrderStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrderStatusFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrderStatusAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OrderStatusCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusCountAggregateOutputType> | number
          }
        }
      }
      UserAccess: {
        payload: Prisma.$UserAccessPayload<ExtArgs>
        fields: Prisma.UserAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          findFirst: {
            args: Prisma.UserAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          findMany: {
            args: Prisma.UserAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>[]
          }
          create: {
            args: Prisma.UserAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          createMany: {
            args: Prisma.UserAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          update: {
            args: Prisma.UserAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          aggregate: {
            args: Prisma.UserAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAccess>
          }
          groupBy: {
            args: Prisma.UserAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAccessGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserAccessFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAccessAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserAccessCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    orderStatus?: OrderStatusOmit
    userAccess?: UserAccessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList | '$transaction'>

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
   * Model OrderStatus
   */

  export type AggregateOrderStatus = {
    _count: OrderStatusCountAggregateOutputType | null
    _avg: OrderStatusAvgAggregateOutputType | null
    _sum: OrderStatusSumAggregateOutputType | null
    _min: OrderStatusMinAggregateOutputType | null
    _max: OrderStatusMaxAggregateOutputType | null
  }

  export type OrderStatusAvgAggregateOutputType = {
    order_id: number | null
  }

  export type OrderStatusSumAggregateOutputType = {
    order_id: number | null
  }

  export type OrderStatusMinAggregateOutputType = {
    id: string | null
    order_id: number | null
    status: $Enums.OrderStatusType | null
    is_error: boolean | null
    message: string | null
    start_datetime: Date | null
    end_datetime: Date | null
  }

  export type OrderStatusMaxAggregateOutputType = {
    id: string | null
    order_id: number | null
    status: $Enums.OrderStatusType | null
    is_error: boolean | null
    message: string | null
    start_datetime: Date | null
    end_datetime: Date | null
  }

  export type OrderStatusCountAggregateOutputType = {
    id: number
    order_id: number
    status: number
    is_error: number
    message: number
    start_datetime: number
    end_datetime: number
    _all: number
  }


  export type OrderStatusAvgAggregateInputType = {
    order_id?: true
  }

  export type OrderStatusSumAggregateInputType = {
    order_id?: true
  }

  export type OrderStatusMinAggregateInputType = {
    id?: true
    order_id?: true
    status?: true
    is_error?: true
    message?: true
    start_datetime?: true
    end_datetime?: true
  }

  export type OrderStatusMaxAggregateInputType = {
    id?: true
    order_id?: true
    status?: true
    is_error?: true
    message?: true
    start_datetime?: true
    end_datetime?: true
  }

  export type OrderStatusCountAggregateInputType = {
    id?: true
    order_id?: true
    status?: true
    is_error?: true
    message?: true
    start_datetime?: true
    end_datetime?: true
    _all?: true
  }

  export type OrderStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatus to aggregate.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStatuses
    **/
    _count?: true | OrderStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStatusMaxAggregateInputType
  }

  export type GetOrderStatusAggregateType<T extends OrderStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStatus[P]>
      : GetScalarType<T[P], AggregateOrderStatus[P]>
  }




  export type OrderStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusWhereInput
    orderBy?: OrderStatusOrderByWithAggregationInput | OrderStatusOrderByWithAggregationInput[]
    by: OrderStatusScalarFieldEnum[] | OrderStatusScalarFieldEnum
    having?: OrderStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStatusCountAggregateInputType | true
    _avg?: OrderStatusAvgAggregateInputType
    _sum?: OrderStatusSumAggregateInputType
    _min?: OrderStatusMinAggregateInputType
    _max?: OrderStatusMaxAggregateInputType
  }

  export type OrderStatusGroupByOutputType = {
    id: string
    order_id: number
    status: $Enums.OrderStatusType
    is_error: boolean
    message: string
    start_datetime: Date
    end_datetime: Date | null
    _count: OrderStatusCountAggregateOutputType | null
    _avg: OrderStatusAvgAggregateOutputType | null
    _sum: OrderStatusSumAggregateOutputType | null
    _min: OrderStatusMinAggregateOutputType | null
    _max: OrderStatusMaxAggregateOutputType | null
  }

  type GetOrderStatusGroupByPayload<T extends OrderStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStatusGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStatusGroupByOutputType[P]>
        }
      >
    >


  export type OrderStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    status?: boolean
    is_error?: boolean
    message?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
  }, ExtArgs["result"]["orderStatus"]>



  export type OrderStatusSelectScalar = {
    id?: boolean
    order_id?: boolean
    status?: boolean
    is_error?: boolean
    message?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
  }

  export type OrderStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "status" | "is_error" | "message" | "start_datetime" | "end_datetime", ExtArgs["result"]["orderStatus"]>

  export type $OrderStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: number
      status: $Enums.OrderStatusType
      is_error: boolean
      message: string
      start_datetime: Date
      end_datetime: Date | null
    }, ExtArgs["result"]["orderStatus"]>
    composites: {}
  }

  type OrderStatusGetPayload<S extends boolean | null | undefined | OrderStatusDefaultArgs> = $Result.GetResult<Prisma.$OrderStatusPayload, S>

  type OrderStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStatusCountAggregateInputType | true
    }

  export interface OrderStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStatus'], meta: { name: 'OrderStatus' } }
    /**
     * Find zero or one OrderStatus that matches the filter.
     * @param {OrderStatusFindUniqueArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStatusFindUniqueArgs>(args: SelectSubset<T, OrderStatusFindUniqueArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStatusFindUniqueOrThrowArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindFirstArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStatusFindFirstArgs>(args?: SelectSubset<T, OrderStatusFindFirstArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindFirstOrThrowArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStatuses
     * const orderStatuses = await prisma.orderStatus.findMany()
     * 
     * // Get first 10 OrderStatuses
     * const orderStatuses = await prisma.orderStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderStatusWithIdOnly = await prisma.orderStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderStatusFindManyArgs>(args?: SelectSubset<T, OrderStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStatus.
     * @param {OrderStatusCreateArgs} args - Arguments to create a OrderStatus.
     * @example
     * // Create one OrderStatus
     * const OrderStatus = await prisma.orderStatus.create({
     *   data: {
     *     // ... data to create a OrderStatus
     *   }
     * })
     * 
     */
    create<T extends OrderStatusCreateArgs>(args: SelectSubset<T, OrderStatusCreateArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStatuses.
     * @param {OrderStatusCreateManyArgs} args - Arguments to create many OrderStatuses.
     * @example
     * // Create many OrderStatuses
     * const orderStatus = await prisma.orderStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStatusCreateManyArgs>(args?: SelectSubset<T, OrderStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderStatus.
     * @param {OrderStatusDeleteArgs} args - Arguments to delete one OrderStatus.
     * @example
     * // Delete one OrderStatus
     * const OrderStatus = await prisma.orderStatus.delete({
     *   where: {
     *     // ... filter to delete one OrderStatus
     *   }
     * })
     * 
     */
    delete<T extends OrderStatusDeleteArgs>(args: SelectSubset<T, OrderStatusDeleteArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStatus.
     * @param {OrderStatusUpdateArgs} args - Arguments to update one OrderStatus.
     * @example
     * // Update one OrderStatus
     * const orderStatus = await prisma.orderStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStatusUpdateArgs>(args: SelectSubset<T, OrderStatusUpdateArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStatuses.
     * @param {OrderStatusDeleteManyArgs} args - Arguments to filter OrderStatuses to delete.
     * @example
     * // Delete a few OrderStatuses
     * const { count } = await prisma.orderStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStatusDeleteManyArgs>(args?: SelectSubset<T, OrderStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStatuses
     * const orderStatus = await prisma.orderStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStatusUpdateManyArgs>(args: SelectSubset<T, OrderStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderStatus.
     * @param {OrderStatusUpsertArgs} args - Arguments to update or create a OrderStatus.
     * @example
     * // Update or create a OrderStatus
     * const orderStatus = await prisma.orderStatus.upsert({
     *   create: {
     *     // ... data to create a OrderStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStatus we want to update
     *   }
     * })
     */
    upsert<T extends OrderStatusUpsertArgs>(args: SelectSubset<T, OrderStatusUpsertArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatuses that matches the filter.
     * @param {OrderStatusFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const orderStatus = await prisma.orderStatus.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OrderStatusFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OrderStatus.
     * @param {OrderStatusAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const orderStatus = await prisma.orderStatus.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OrderStatusAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusCountArgs} args - Arguments to filter OrderStatuses to count.
     * @example
     * // Count the number of OrderStatuses
     * const count = await prisma.orderStatus.count({
     *   where: {
     *     // ... the filter for the OrderStatuses we want to count
     *   }
     * })
    **/
    count<T extends OrderStatusCountArgs>(
      args?: Subset<T, OrderStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderStatusAggregateArgs>(args: Subset<T, OrderStatusAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusAggregateType<T>>

    /**
     * Group by OrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusGroupByArgs} args - Group by arguments.
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
      T extends OrderStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStatusGroupByArgs['orderBy'] }
        : { orderBy?: OrderStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStatus model
   */
  readonly fields: OrderStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderStatus model
   */
  interface OrderStatusFieldRefs {
    readonly id: FieldRef<"OrderStatus", 'String'>
    readonly order_id: FieldRef<"OrderStatus", 'Int'>
    readonly status: FieldRef<"OrderStatus", 'OrderStatusType'>
    readonly is_error: FieldRef<"OrderStatus", 'Boolean'>
    readonly message: FieldRef<"OrderStatus", 'String'>
    readonly start_datetime: FieldRef<"OrderStatus", 'DateTime'>
    readonly end_datetime: FieldRef<"OrderStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderStatus findUnique
   */
  export type OrderStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus findUniqueOrThrow
   */
  export type OrderStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus findFirst
   */
  export type OrderStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus findFirstOrThrow
   */
  export type OrderStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus findMany
   */
  export type OrderStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatuses to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus create
   */
  export type OrderStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderStatus.
     */
    data: XOR<OrderStatusCreateInput, OrderStatusUncheckedCreateInput>
  }

  /**
   * OrderStatus createMany
   */
  export type OrderStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStatuses.
     */
    data: OrderStatusCreateManyInput | OrderStatusCreateManyInput[]
  }

  /**
   * OrderStatus update
   */
  export type OrderStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderStatus.
     */
    data: XOR<OrderStatusUpdateInput, OrderStatusUncheckedUpdateInput>
    /**
     * Choose, which OrderStatus to update.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus updateMany
   */
  export type OrderStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStatuses.
     */
    data: XOR<OrderStatusUpdateManyMutationInput, OrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatuses to update
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to update.
     */
    limit?: number
  }

  /**
   * OrderStatus upsert
   */
  export type OrderStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderStatus to update in case it exists.
     */
    where: OrderStatusWhereUniqueInput
    /**
     * In case the OrderStatus found by the `where` argument doesn't exist, create a new OrderStatus with this data.
     */
    create: XOR<OrderStatusCreateInput, OrderStatusUncheckedCreateInput>
    /**
     * In case the OrderStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStatusUpdateInput, OrderStatusUncheckedUpdateInput>
  }

  /**
   * OrderStatus delete
   */
  export type OrderStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter which OrderStatus to delete.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus deleteMany
   */
  export type OrderStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatuses to delete
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to delete.
     */
    limit?: number
  }

  /**
   * OrderStatus findRaw
   */
  export type OrderStatusFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * OrderStatus aggregateRaw
   */
  export type OrderStatusAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * OrderStatus without action
   */
  export type OrderStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
  }


  /**
   * Model UserAccess
   */

  export type AggregateUserAccess = {
    _count: UserAccessCountAggregateOutputType | null
    _avg: UserAccessAvgAggregateOutputType | null
    _sum: UserAccessSumAggregateOutputType | null
    _min: UserAccessMinAggregateOutputType | null
    _max: UserAccessMaxAggregateOutputType | null
  }

  export type UserAccessAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserAccessSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserAccessMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    device_ip: string | null
    access_error: string | null
    accessed_since: Date | null
  }

  export type UserAccessMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    device_ip: string | null
    access_error: string | null
    accessed_since: Date | null
  }

  export type UserAccessCountAggregateOutputType = {
    id: number
    user_id: number
    device_ip: number
    access_error: number
    accessed_since: number
    _all: number
  }


  export type UserAccessAvgAggregateInputType = {
    user_id?: true
  }

  export type UserAccessSumAggregateInputType = {
    user_id?: true
  }

  export type UserAccessMinAggregateInputType = {
    id?: true
    user_id?: true
    device_ip?: true
    access_error?: true
    accessed_since?: true
  }

  export type UserAccessMaxAggregateInputType = {
    id?: true
    user_id?: true
    device_ip?: true
    access_error?: true
    accessed_since?: true
  }

  export type UserAccessCountAggregateInputType = {
    id?: true
    user_id?: true
    device_ip?: true
    access_error?: true
    accessed_since?: true
    _all?: true
  }

  export type UserAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccess to aggregate.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAccesses
    **/
    _count?: true | UserAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccessMaxAggregateInputType
  }

  export type GetUserAccessAggregateType<T extends UserAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccess[P]>
      : GetScalarType<T[P], AggregateUserAccess[P]>
  }




  export type UserAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithAggregationInput | UserAccessOrderByWithAggregationInput[]
    by: UserAccessScalarFieldEnum[] | UserAccessScalarFieldEnum
    having?: UserAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccessCountAggregateInputType | true
    _avg?: UserAccessAvgAggregateInputType
    _sum?: UserAccessSumAggregateInputType
    _min?: UserAccessMinAggregateInputType
    _max?: UserAccessMaxAggregateInputType
  }

  export type UserAccessGroupByOutputType = {
    id: string
    user_id: number
    device_ip: string
    access_error: string | null
    accessed_since: Date
    _count: UserAccessCountAggregateOutputType | null
    _avg: UserAccessAvgAggregateOutputType | null
    _sum: UserAccessSumAggregateOutputType | null
    _min: UserAccessMinAggregateOutputType | null
    _max: UserAccessMaxAggregateOutputType | null
  }

  type GetUserAccessGroupByPayload<T extends UserAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    device_ip?: boolean
    access_error?: boolean
    accessed_since?: boolean
  }, ExtArgs["result"]["userAccess"]>



  export type UserAccessSelectScalar = {
    id?: boolean
    user_id?: boolean
    device_ip?: boolean
    access_error?: boolean
    accessed_since?: boolean
  }

  export type UserAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "device_ip" | "access_error" | "accessed_since", ExtArgs["result"]["userAccess"]>

  export type $UserAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAccess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      device_ip: string
      access_error: string | null
      accessed_since: Date
    }, ExtArgs["result"]["userAccess"]>
    composites: {}
  }

  type UserAccessGetPayload<S extends boolean | null | undefined | UserAccessDefaultArgs> = $Result.GetResult<Prisma.$UserAccessPayload, S>

  type UserAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAccessCountAggregateInputType | true
    }

  export interface UserAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAccess'], meta: { name: 'UserAccess' } }
    /**
     * Find zero or one UserAccess that matches the filter.
     * @param {UserAccessFindUniqueArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAccessFindUniqueArgs>(args: SelectSubset<T, UserAccessFindUniqueArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAccessFindUniqueOrThrowArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindFirstArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAccessFindFirstArgs>(args?: SelectSubset<T, UserAccessFindFirstArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindFirstOrThrowArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccesses
     * const userAccesses = await prisma.userAccess.findMany()
     * 
     * // Get first 10 UserAccesses
     * const userAccesses = await prisma.userAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAccessWithIdOnly = await prisma.userAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAccessFindManyArgs>(args?: SelectSubset<T, UserAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAccess.
     * @param {UserAccessCreateArgs} args - Arguments to create a UserAccess.
     * @example
     * // Create one UserAccess
     * const UserAccess = await prisma.userAccess.create({
     *   data: {
     *     // ... data to create a UserAccess
     *   }
     * })
     * 
     */
    create<T extends UserAccessCreateArgs>(args: SelectSubset<T, UserAccessCreateArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAccesses.
     * @param {UserAccessCreateManyArgs} args - Arguments to create many UserAccesses.
     * @example
     * // Create many UserAccesses
     * const userAccess = await prisma.userAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAccessCreateManyArgs>(args?: SelectSubset<T, UserAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAccess.
     * @param {UserAccessDeleteArgs} args - Arguments to delete one UserAccess.
     * @example
     * // Delete one UserAccess
     * const UserAccess = await prisma.userAccess.delete({
     *   where: {
     *     // ... filter to delete one UserAccess
     *   }
     * })
     * 
     */
    delete<T extends UserAccessDeleteArgs>(args: SelectSubset<T, UserAccessDeleteArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAccess.
     * @param {UserAccessUpdateArgs} args - Arguments to update one UserAccess.
     * @example
     * // Update one UserAccess
     * const userAccess = await prisma.userAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAccessUpdateArgs>(args: SelectSubset<T, UserAccessUpdateArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAccesses.
     * @param {UserAccessDeleteManyArgs} args - Arguments to filter UserAccesses to delete.
     * @example
     * // Delete a few UserAccesses
     * const { count } = await prisma.userAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAccessDeleteManyArgs>(args?: SelectSubset<T, UserAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccesses
     * const userAccess = await prisma.userAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAccessUpdateManyArgs>(args: SelectSubset<T, UserAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAccess.
     * @param {UserAccessUpsertArgs} args - Arguments to update or create a UserAccess.
     * @example
     * // Update or create a UserAccess
     * const userAccess = await prisma.userAccess.upsert({
     *   create: {
     *     // ... data to create a UserAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserAccessUpsertArgs>(args: SelectSubset<T, UserAccessUpsertArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAccesses that matches the filter.
     * @param {UserAccessFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAccess = await prisma.userAccess.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserAccessFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAccess.
     * @param {UserAccessAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAccess = await prisma.userAccess.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAccessAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessCountArgs} args - Arguments to filter UserAccesses to count.
     * @example
     * // Count the number of UserAccesses
     * const count = await prisma.userAccess.count({
     *   where: {
     *     // ... the filter for the UserAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserAccessCountArgs>(
      args?: Subset<T, UserAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAccessAggregateArgs>(args: Subset<T, UserAccessAggregateArgs>): Prisma.PrismaPromise<GetUserAccessAggregateType<T>>

    /**
     * Group by UserAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessGroupByArgs} args - Group by arguments.
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
      T extends UserAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAccess model
   */
  readonly fields: UserAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAccess model
   */
  interface UserAccessFieldRefs {
    readonly id: FieldRef<"UserAccess", 'String'>
    readonly user_id: FieldRef<"UserAccess", 'Int'>
    readonly device_ip: FieldRef<"UserAccess", 'String'>
    readonly access_error: FieldRef<"UserAccess", 'String'>
    readonly accessed_since: FieldRef<"UserAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAccess findUnique
   */
  export type UserAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess findUniqueOrThrow
   */
  export type UserAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess findFirst
   */
  export type UserAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * UserAccess findFirstOrThrow
   */
  export type UserAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * UserAccess findMany
   */
  export type UserAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Filter, which UserAccesses to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * UserAccess create
   */
  export type UserAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * The data needed to create a UserAccess.
     */
    data: XOR<UserAccessCreateInput, UserAccessUncheckedCreateInput>
  }

  /**
   * UserAccess createMany
   */
  export type UserAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAccesses.
     */
    data: UserAccessCreateManyInput | UserAccessCreateManyInput[]
  }

  /**
   * UserAccess update
   */
  export type UserAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * The data needed to update a UserAccess.
     */
    data: XOR<UserAccessUpdateInput, UserAccessUncheckedUpdateInput>
    /**
     * Choose, which UserAccess to update.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess updateMany
   */
  export type UserAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAccesses.
     */
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserAccesses to update
     */
    where?: UserAccessWhereInput
    /**
     * Limit how many UserAccesses to update.
     */
    limit?: number
  }

  /**
   * UserAccess upsert
   */
  export type UserAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * The filter to search for the UserAccess to update in case it exists.
     */
    where: UserAccessWhereUniqueInput
    /**
     * In case the UserAccess found by the `where` argument doesn't exist, create a new UserAccess with this data.
     */
    create: XOR<UserAccessCreateInput, UserAccessUncheckedCreateInput>
    /**
     * In case the UserAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAccessUpdateInput, UserAccessUncheckedUpdateInput>
  }

  /**
   * UserAccess delete
   */
  export type UserAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Filter which UserAccess to delete.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess deleteMany
   */
  export type UserAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccesses to delete
     */
    where?: UserAccessWhereInput
    /**
     * Limit how many UserAccesses to delete.
     */
    limit?: number
  }

  /**
   * UserAccess findRaw
   */
  export type UserAccessFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UserAccess aggregateRaw
   */
  export type UserAccessAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UserAccess without action
   */
  export type UserAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const OrderStatusScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    status: 'status',
    is_error: 'is_error',
    message: 'message',
    start_datetime: 'start_datetime',
    end_datetime: 'end_datetime'
  };

  export type OrderStatusScalarFieldEnum = (typeof OrderStatusScalarFieldEnum)[keyof typeof OrderStatusScalarFieldEnum]


  export const UserAccessScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    device_ip: 'device_ip',
    access_error: 'access_error',
    accessed_since: 'accessed_since'
  };

  export type UserAccessScalarFieldEnum = (typeof UserAccessScalarFieldEnum)[keyof typeof UserAccessScalarFieldEnum]


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
   * Reference to a field of type 'OrderStatusType'
   */
  export type EnumOrderStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatusType'>
    


  /**
   * Reference to a field of type 'OrderStatusType[]'
   */
  export type ListEnumOrderStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatusType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type OrderStatusWhereInput = {
    AND?: OrderStatusWhereInput | OrderStatusWhereInput[]
    OR?: OrderStatusWhereInput[]
    NOT?: OrderStatusWhereInput | OrderStatusWhereInput[]
    id?: StringFilter<"OrderStatus"> | string
    order_id?: IntFilter<"OrderStatus"> | number
    status?: EnumOrderStatusTypeFilter<"OrderStatus"> | $Enums.OrderStatusType
    is_error?: BoolFilter<"OrderStatus"> | boolean
    message?: StringFilter<"OrderStatus"> | string
    start_datetime?: DateTimeFilter<"OrderStatus"> | Date | string
    end_datetime?: DateTimeNullableFilter<"OrderStatus"> | Date | string | null
  }

  export type OrderStatusOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    is_error?: SortOrder
    message?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
  }

  export type OrderStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderStatusWhereInput | OrderStatusWhereInput[]
    OR?: OrderStatusWhereInput[]
    NOT?: OrderStatusWhereInput | OrderStatusWhereInput[]
    order_id?: IntFilter<"OrderStatus"> | number
    status?: EnumOrderStatusTypeFilter<"OrderStatus"> | $Enums.OrderStatusType
    is_error?: BoolFilter<"OrderStatus"> | boolean
    message?: StringFilter<"OrderStatus"> | string
    start_datetime?: DateTimeFilter<"OrderStatus"> | Date | string
    end_datetime?: DateTimeNullableFilter<"OrderStatus"> | Date | string | null
  }, "id">

  export type OrderStatusOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    is_error?: SortOrder
    message?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    _count?: OrderStatusCountOrderByAggregateInput
    _avg?: OrderStatusAvgOrderByAggregateInput
    _max?: OrderStatusMaxOrderByAggregateInput
    _min?: OrderStatusMinOrderByAggregateInput
    _sum?: OrderStatusSumOrderByAggregateInput
  }

  export type OrderStatusScalarWhereWithAggregatesInput = {
    AND?: OrderStatusScalarWhereWithAggregatesInput | OrderStatusScalarWhereWithAggregatesInput[]
    OR?: OrderStatusScalarWhereWithAggregatesInput[]
    NOT?: OrderStatusScalarWhereWithAggregatesInput | OrderStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderStatus"> | string
    order_id?: IntWithAggregatesFilter<"OrderStatus"> | number
    status?: EnumOrderStatusTypeWithAggregatesFilter<"OrderStatus"> | $Enums.OrderStatusType
    is_error?: BoolWithAggregatesFilter<"OrderStatus"> | boolean
    message?: StringWithAggregatesFilter<"OrderStatus"> | string
    start_datetime?: DateTimeWithAggregatesFilter<"OrderStatus"> | Date | string
    end_datetime?: DateTimeNullableWithAggregatesFilter<"OrderStatus"> | Date | string | null
  }

  export type UserAccessWhereInput = {
    AND?: UserAccessWhereInput | UserAccessWhereInput[]
    OR?: UserAccessWhereInput[]
    NOT?: UserAccessWhereInput | UserAccessWhereInput[]
    id?: StringFilter<"UserAccess"> | string
    user_id?: IntFilter<"UserAccess"> | number
    device_ip?: StringFilter<"UserAccess"> | string
    access_error?: StringNullableFilter<"UserAccess"> | string | null
    accessed_since?: DateTimeFilter<"UserAccess"> | Date | string
  }

  export type UserAccessOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_ip?: SortOrder
    access_error?: SortOrder
    accessed_since?: SortOrder
  }

  export type UserAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAccessWhereInput | UserAccessWhereInput[]
    OR?: UserAccessWhereInput[]
    NOT?: UserAccessWhereInput | UserAccessWhereInput[]
    user_id?: IntFilter<"UserAccess"> | number
    device_ip?: StringFilter<"UserAccess"> | string
    access_error?: StringNullableFilter<"UserAccess"> | string | null
    accessed_since?: DateTimeFilter<"UserAccess"> | Date | string
  }, "id">

  export type UserAccessOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_ip?: SortOrder
    access_error?: SortOrder
    accessed_since?: SortOrder
    _count?: UserAccessCountOrderByAggregateInput
    _avg?: UserAccessAvgOrderByAggregateInput
    _max?: UserAccessMaxOrderByAggregateInput
    _min?: UserAccessMinOrderByAggregateInput
    _sum?: UserAccessSumOrderByAggregateInput
  }

  export type UserAccessScalarWhereWithAggregatesInput = {
    AND?: UserAccessScalarWhereWithAggregatesInput | UserAccessScalarWhereWithAggregatesInput[]
    OR?: UserAccessScalarWhereWithAggregatesInput[]
    NOT?: UserAccessScalarWhereWithAggregatesInput | UserAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAccess"> | string
    user_id?: IntWithAggregatesFilter<"UserAccess"> | number
    device_ip?: StringWithAggregatesFilter<"UserAccess"> | string
    access_error?: StringNullableWithAggregatesFilter<"UserAccess"> | string | null
    accessed_since?: DateTimeWithAggregatesFilter<"UserAccess"> | Date | string
  }

  export type OrderStatusCreateInput = {
    id?: string
    order_id: number
    status: $Enums.OrderStatusType
    is_error: boolean
    message: string
    start_datetime?: Date | string
    end_datetime?: Date | string | null
  }

  export type OrderStatusUncheckedCreateInput = {
    id?: string
    order_id: number
    status: $Enums.OrderStatusType
    is_error: boolean
    message: string
    start_datetime?: Date | string
    end_datetime?: Date | string | null
  }

  export type OrderStatusUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusTypeFieldUpdateOperationsInput | $Enums.OrderStatusType
    is_error?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusTypeFieldUpdateOperationsInput | $Enums.OrderStatusType
    is_error?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusCreateManyInput = {
    id?: string
    order_id: number
    status: $Enums.OrderStatusType
    is_error: boolean
    message: string
    start_datetime?: Date | string
    end_datetime?: Date | string | null
  }

  export type OrderStatusUpdateManyMutationInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusTypeFieldUpdateOperationsInput | $Enums.OrderStatusType
    is_error?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStatusUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusTypeFieldUpdateOperationsInput | $Enums.OrderStatusType
    is_error?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAccessCreateInput = {
    id?: string
    user_id: number
    device_ip: string
    access_error?: string | null
    accessed_since?: Date | string
  }

  export type UserAccessUncheckedCreateInput = {
    id?: string
    user_id: number
    device_ip: string
    access_error?: string | null
    accessed_since?: Date | string
  }

  export type UserAccessUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    device_ip?: StringFieldUpdateOperationsInput | string
    access_error?: NullableStringFieldUpdateOperationsInput | string | null
    accessed_since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    device_ip?: StringFieldUpdateOperationsInput | string
    access_error?: NullableStringFieldUpdateOperationsInput | string | null
    accessed_since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessCreateManyInput = {
    id?: string
    user_id: number
    device_ip: string
    access_error?: string | null
    accessed_since?: Date | string
  }

  export type UserAccessUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    device_ip?: StringFieldUpdateOperationsInput | string
    access_error?: NullableStringFieldUpdateOperationsInput | string | null
    accessed_since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    device_ip?: StringFieldUpdateOperationsInput | string
    access_error?: NullableStringFieldUpdateOperationsInput | string | null
    accessed_since?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumOrderStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusType | EnumOrderStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusTypeFilter<$PrismaModel> | $Enums.OrderStatusType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type OrderStatusCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    is_error?: SortOrder
    message?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
  }

  export type OrderStatusAvgOrderByAggregateInput = {
    order_id?: SortOrder
  }

  export type OrderStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    is_error?: SortOrder
    message?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
  }

  export type OrderStatusMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    is_error?: SortOrder
    message?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
  }

  export type OrderStatusSumOrderByAggregateInput = {
    order_id?: SortOrder
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

  export type EnumOrderStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusType | EnumOrderStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserAccessCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_ip?: SortOrder
    access_error?: SortOrder
    accessed_since?: SortOrder
  }

  export type UserAccessAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_ip?: SortOrder
    access_error?: SortOrder
    accessed_since?: SortOrder
  }

  export type UserAccessMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    device_ip?: SortOrder
    access_error?: SortOrder
    accessed_since?: SortOrder
  }

  export type UserAccessSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatusType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
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

  export type NestedEnumOrderStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusType | EnumOrderStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusTypeFilter<$PrismaModel> | $Enums.OrderStatusType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type NestedEnumOrderStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusType | EnumOrderStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusType[] | ListEnumOrderStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }



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
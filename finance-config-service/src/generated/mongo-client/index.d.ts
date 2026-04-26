
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
 * Model CurrencyRate
 * 
 */
export type CurrencyRate = $Result.DefaultSelection<Prisma.$CurrencyRatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CurrencyRates
 * const currencyRates = await prisma.currencyRate.findMany()
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
   * // Fetch zero or more CurrencyRates
   * const currencyRates = await prisma.currencyRate.findMany()
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
   * `prisma.currencyRate`: Exposes CRUD operations for the **CurrencyRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrencyRates
    * const currencyRates = await prisma.currencyRate.findMany()
    * ```
    */
  get currencyRate(): Prisma.CurrencyRateDelegate<ExtArgs, ClientOptions>;
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
    CurrencyRate: 'CurrencyRate'
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
      modelProps: "currencyRate"
      txIsolationLevel: never
    }
    model: {
      CurrencyRate: {
        payload: Prisma.$CurrencyRatePayload<ExtArgs>
        fields: Prisma.CurrencyRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          findFirst: {
            args: Prisma.CurrencyRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          findMany: {
            args: Prisma.CurrencyRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>[]
          }
          create: {
            args: Prisma.CurrencyRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          createMany: {
            args: Prisma.CurrencyRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CurrencyRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          update: {
            args: Prisma.CurrencyRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          deleteMany: {
            args: Prisma.CurrencyRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          aggregate: {
            args: Prisma.CurrencyRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencyRate>
          }
          groupBy: {
            args: Prisma.CurrencyRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyRateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CurrencyRateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CurrencyRateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CurrencyRateCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyRateCountAggregateOutputType> | number
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
    currencyRate?: CurrencyRateOmit
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
   * Model CurrencyRate
   */

  export type AggregateCurrencyRate = {
    _count: CurrencyRateCountAggregateOutputType | null
    _avg: CurrencyRateAvgAggregateOutputType | null
    _sum: CurrencyRateSumAggregateOutputType | null
    _min: CurrencyRateMinAggregateOutputType | null
    _max: CurrencyRateMaxAggregateOutputType | null
  }

  export type CurrencyRateAvgAggregateOutputType = {
    rate_usd: number | null
    rate_cop: number | null
    rate_bs: number | null
  }

  export type CurrencyRateSumAggregateOutputType = {
    rate_usd: number | null
    rate_cop: number | null
    rate_bs: number | null
  }

  export type CurrencyRateMinAggregateOutputType = {
    id: string | null
    rate_usd: number | null
    rate_cop: number | null
    rate_bs: number | null
    last_updated: Date | null
  }

  export type CurrencyRateMaxAggregateOutputType = {
    id: string | null
    rate_usd: number | null
    rate_cop: number | null
    rate_bs: number | null
    last_updated: Date | null
  }

  export type CurrencyRateCountAggregateOutputType = {
    id: number
    rate_usd: number
    rate_cop: number
    rate_bs: number
    last_updated: number
    _all: number
  }


  export type CurrencyRateAvgAggregateInputType = {
    rate_usd?: true
    rate_cop?: true
    rate_bs?: true
  }

  export type CurrencyRateSumAggregateInputType = {
    rate_usd?: true
    rate_cop?: true
    rate_bs?: true
  }

  export type CurrencyRateMinAggregateInputType = {
    id?: true
    rate_usd?: true
    rate_cop?: true
    rate_bs?: true
    last_updated?: true
  }

  export type CurrencyRateMaxAggregateInputType = {
    id?: true
    rate_usd?: true
    rate_cop?: true
    rate_bs?: true
    last_updated?: true
  }

  export type CurrencyRateCountAggregateInputType = {
    id?: true
    rate_usd?: true
    rate_cop?: true
    rate_bs?: true
    last_updated?: true
    _all?: true
  }

  export type CurrencyRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrencyRate to aggregate.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrencyRates
    **/
    _count?: true | CurrencyRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencyRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyRateMaxAggregateInputType
  }

  export type GetCurrencyRateAggregateType<T extends CurrencyRateAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencyRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencyRate[P]>
      : GetScalarType<T[P], AggregateCurrencyRate[P]>
  }




  export type CurrencyRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyRateWhereInput
    orderBy?: CurrencyRateOrderByWithAggregationInput | CurrencyRateOrderByWithAggregationInput[]
    by: CurrencyRateScalarFieldEnum[] | CurrencyRateScalarFieldEnum
    having?: CurrencyRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyRateCountAggregateInputType | true
    _avg?: CurrencyRateAvgAggregateInputType
    _sum?: CurrencyRateSumAggregateInputType
    _min?: CurrencyRateMinAggregateInputType
    _max?: CurrencyRateMaxAggregateInputType
  }

  export type CurrencyRateGroupByOutputType = {
    id: string
    rate_usd: number
    rate_cop: number
    rate_bs: number
    last_updated: Date
    _count: CurrencyRateCountAggregateOutputType | null
    _avg: CurrencyRateAvgAggregateOutputType | null
    _sum: CurrencyRateSumAggregateOutputType | null
    _min: CurrencyRateMinAggregateOutputType | null
    _max: CurrencyRateMaxAggregateOutputType | null
  }

  type GetCurrencyRateGroupByPayload<T extends CurrencyRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyRateGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyRateGroupByOutputType[P]>
        }
      >
    >


  export type CurrencyRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate_usd?: boolean
    rate_cop?: boolean
    rate_bs?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["currencyRate"]>



  export type CurrencyRateSelectScalar = {
    id?: boolean
    rate_usd?: boolean
    rate_cop?: boolean
    rate_bs?: boolean
    last_updated?: boolean
  }

  export type CurrencyRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rate_usd" | "rate_cop" | "rate_bs" | "last_updated", ExtArgs["result"]["currencyRate"]>

  export type $CurrencyRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrencyRate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rate_usd: number
      rate_cop: number
      rate_bs: number
      last_updated: Date
    }, ExtArgs["result"]["currencyRate"]>
    composites: {}
  }

  type CurrencyRateGetPayload<S extends boolean | null | undefined | CurrencyRateDefaultArgs> = $Result.GetResult<Prisma.$CurrencyRatePayload, S>

  type CurrencyRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyRateCountAggregateInputType | true
    }

  export interface CurrencyRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrencyRate'], meta: { name: 'CurrencyRate' } }
    /**
     * Find zero or one CurrencyRate that matches the filter.
     * @param {CurrencyRateFindUniqueArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyRateFindUniqueArgs>(args: SelectSubset<T, CurrencyRateFindUniqueArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurrencyRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyRateFindUniqueOrThrowArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyRateFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrencyRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateFindFirstArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyRateFindFirstArgs>(args?: SelectSubset<T, CurrencyRateFindFirstArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrencyRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateFindFirstOrThrowArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyRateFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurrencyRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrencyRates
     * const currencyRates = await prisma.currencyRate.findMany()
     * 
     * // Get first 10 CurrencyRates
     * const currencyRates = await prisma.currencyRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyRateWithIdOnly = await prisma.currencyRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyRateFindManyArgs>(args?: SelectSubset<T, CurrencyRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurrencyRate.
     * @param {CurrencyRateCreateArgs} args - Arguments to create a CurrencyRate.
     * @example
     * // Create one CurrencyRate
     * const CurrencyRate = await prisma.currencyRate.create({
     *   data: {
     *     // ... data to create a CurrencyRate
     *   }
     * })
     * 
     */
    create<T extends CurrencyRateCreateArgs>(args: SelectSubset<T, CurrencyRateCreateArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurrencyRates.
     * @param {CurrencyRateCreateManyArgs} args - Arguments to create many CurrencyRates.
     * @example
     * // Create many CurrencyRates
     * const currencyRate = await prisma.currencyRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyRateCreateManyArgs>(args?: SelectSubset<T, CurrencyRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CurrencyRate.
     * @param {CurrencyRateDeleteArgs} args - Arguments to delete one CurrencyRate.
     * @example
     * // Delete one CurrencyRate
     * const CurrencyRate = await prisma.currencyRate.delete({
     *   where: {
     *     // ... filter to delete one CurrencyRate
     *   }
     * })
     * 
     */
    delete<T extends CurrencyRateDeleteArgs>(args: SelectSubset<T, CurrencyRateDeleteArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurrencyRate.
     * @param {CurrencyRateUpdateArgs} args - Arguments to update one CurrencyRate.
     * @example
     * // Update one CurrencyRate
     * const currencyRate = await prisma.currencyRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyRateUpdateArgs>(args: SelectSubset<T, CurrencyRateUpdateArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurrencyRates.
     * @param {CurrencyRateDeleteManyArgs} args - Arguments to filter CurrencyRates to delete.
     * @example
     * // Delete a few CurrencyRates
     * const { count } = await prisma.currencyRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyRateDeleteManyArgs>(args?: SelectSubset<T, CurrencyRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrencyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrencyRates
     * const currencyRate = await prisma.currencyRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyRateUpdateManyArgs>(args: SelectSubset<T, CurrencyRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CurrencyRate.
     * @param {CurrencyRateUpsertArgs} args - Arguments to update or create a CurrencyRate.
     * @example
     * // Update or create a CurrencyRate
     * const currencyRate = await prisma.currencyRate.upsert({
     *   create: {
     *     // ... data to create a CurrencyRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrencyRate we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyRateUpsertArgs>(args: SelectSubset<T, CurrencyRateUpsertArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurrencyRates that matches the filter.
     * @param {CurrencyRateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const currencyRate = await prisma.currencyRate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CurrencyRateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CurrencyRate.
     * @param {CurrencyRateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const currencyRate = await prisma.currencyRate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CurrencyRateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CurrencyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateCountArgs} args - Arguments to filter CurrencyRates to count.
     * @example
     * // Count the number of CurrencyRates
     * const count = await prisma.currencyRate.count({
     *   where: {
     *     // ... the filter for the CurrencyRates we want to count
     *   }
     * })
    **/
    count<T extends CurrencyRateCountArgs>(
      args?: Subset<T, CurrencyRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrencyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyRateAggregateArgs>(args: Subset<T, CurrencyRateAggregateArgs>): Prisma.PrismaPromise<GetCurrencyRateAggregateType<T>>

    /**
     * Group by CurrencyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateGroupByArgs} args - Group by arguments.
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
      T extends CurrencyRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyRateGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrencyRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrencyRate model
   */
  readonly fields: CurrencyRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrencyRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CurrencyRate model
   */
  interface CurrencyRateFieldRefs {
    readonly id: FieldRef<"CurrencyRate", 'String'>
    readonly rate_usd: FieldRef<"CurrencyRate", 'Float'>
    readonly rate_cop: FieldRef<"CurrencyRate", 'Float'>
    readonly rate_bs: FieldRef<"CurrencyRate", 'Float'>
    readonly last_updated: FieldRef<"CurrencyRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurrencyRate findUnique
   */
  export type CurrencyRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate findUniqueOrThrow
   */
  export type CurrencyRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate findFirst
   */
  export type CurrencyRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrencyRates.
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyRates.
     */
    distinct?: CurrencyRateScalarFieldEnum | CurrencyRateScalarFieldEnum[]
  }

  /**
   * CurrencyRate findFirstOrThrow
   */
  export type CurrencyRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrencyRates.
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyRates.
     */
    distinct?: CurrencyRateScalarFieldEnum | CurrencyRateScalarFieldEnum[]
  }

  /**
   * CurrencyRate findMany
   */
  export type CurrencyRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRates to fetch.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrencyRates.
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyRates.
     */
    distinct?: CurrencyRateScalarFieldEnum | CurrencyRateScalarFieldEnum[]
  }

  /**
   * CurrencyRate create
   */
  export type CurrencyRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The data needed to create a CurrencyRate.
     */
    data: XOR<CurrencyRateCreateInput, CurrencyRateUncheckedCreateInput>
  }

  /**
   * CurrencyRate createMany
   */
  export type CurrencyRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrencyRates.
     */
    data: CurrencyRateCreateManyInput | CurrencyRateCreateManyInput[]
  }

  /**
   * CurrencyRate update
   */
  export type CurrencyRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The data needed to update a CurrencyRate.
     */
    data: XOR<CurrencyRateUpdateInput, CurrencyRateUncheckedUpdateInput>
    /**
     * Choose, which CurrencyRate to update.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate updateMany
   */
  export type CurrencyRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrencyRates.
     */
    data: XOR<CurrencyRateUpdateManyMutationInput, CurrencyRateUncheckedUpdateManyInput>
    /**
     * Filter which CurrencyRates to update
     */
    where?: CurrencyRateWhereInput
    /**
     * Limit how many CurrencyRates to update.
     */
    limit?: number
  }

  /**
   * CurrencyRate upsert
   */
  export type CurrencyRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The filter to search for the CurrencyRate to update in case it exists.
     */
    where: CurrencyRateWhereUniqueInput
    /**
     * In case the CurrencyRate found by the `where` argument doesn't exist, create a new CurrencyRate with this data.
     */
    create: XOR<CurrencyRateCreateInput, CurrencyRateUncheckedCreateInput>
    /**
     * In case the CurrencyRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyRateUpdateInput, CurrencyRateUncheckedUpdateInput>
  }

  /**
   * CurrencyRate delete
   */
  export type CurrencyRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter which CurrencyRate to delete.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate deleteMany
   */
  export type CurrencyRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrencyRates to delete
     */
    where?: CurrencyRateWhereInput
    /**
     * Limit how many CurrencyRates to delete.
     */
    limit?: number
  }

  /**
   * CurrencyRate findRaw
   */
  export type CurrencyRateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CurrencyRate aggregateRaw
   */
  export type CurrencyRateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CurrencyRate without action
   */
  export type CurrencyRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CurrencyRateScalarFieldEnum: {
    id: 'id',
    rate_usd: 'rate_usd',
    rate_cop: 'rate_cop',
    rate_bs: 'rate_bs',
    last_updated: 'last_updated'
  };

  export type CurrencyRateScalarFieldEnum = (typeof CurrencyRateScalarFieldEnum)[keyof typeof CurrencyRateScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CurrencyRateWhereInput = {
    AND?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    OR?: CurrencyRateWhereInput[]
    NOT?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    id?: StringFilter<"CurrencyRate"> | string
    rate_usd?: FloatFilter<"CurrencyRate"> | number
    rate_cop?: FloatFilter<"CurrencyRate"> | number
    rate_bs?: FloatFilter<"CurrencyRate"> | number
    last_updated?: DateTimeFilter<"CurrencyRate"> | Date | string
  }

  export type CurrencyRateOrderByWithRelationInput = {
    id?: SortOrder
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
    last_updated?: SortOrder
  }

  export type CurrencyRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    OR?: CurrencyRateWhereInput[]
    NOT?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    rate_usd?: FloatFilter<"CurrencyRate"> | number
    rate_cop?: FloatFilter<"CurrencyRate"> | number
    rate_bs?: FloatFilter<"CurrencyRate"> | number
    last_updated?: DateTimeFilter<"CurrencyRate"> | Date | string
  }, "id">

  export type CurrencyRateOrderByWithAggregationInput = {
    id?: SortOrder
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
    last_updated?: SortOrder
    _count?: CurrencyRateCountOrderByAggregateInput
    _avg?: CurrencyRateAvgOrderByAggregateInput
    _max?: CurrencyRateMaxOrderByAggregateInput
    _min?: CurrencyRateMinOrderByAggregateInput
    _sum?: CurrencyRateSumOrderByAggregateInput
  }

  export type CurrencyRateScalarWhereWithAggregatesInput = {
    AND?: CurrencyRateScalarWhereWithAggregatesInput | CurrencyRateScalarWhereWithAggregatesInput[]
    OR?: CurrencyRateScalarWhereWithAggregatesInput[]
    NOT?: CurrencyRateScalarWhereWithAggregatesInput | CurrencyRateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CurrencyRate"> | string
    rate_usd?: FloatWithAggregatesFilter<"CurrencyRate"> | number
    rate_cop?: FloatWithAggregatesFilter<"CurrencyRate"> | number
    rate_bs?: FloatWithAggregatesFilter<"CurrencyRate"> | number
    last_updated?: DateTimeWithAggregatesFilter<"CurrencyRate"> | Date | string
  }

  export type CurrencyRateCreateInput = {
    id?: string
    rate_usd: number
    rate_cop: number
    rate_bs: number
    last_updated?: Date | string
  }

  export type CurrencyRateUncheckedCreateInput = {
    id?: string
    rate_usd: number
    rate_cop: number
    rate_bs: number
    last_updated?: Date | string
  }

  export type CurrencyRateUpdateInput = {
    rate_usd?: FloatFieldUpdateOperationsInput | number
    rate_cop?: FloatFieldUpdateOperationsInput | number
    rate_bs?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyRateUncheckedUpdateInput = {
    rate_usd?: FloatFieldUpdateOperationsInput | number
    rate_cop?: FloatFieldUpdateOperationsInput | number
    rate_bs?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyRateCreateManyInput = {
    id?: string
    rate_usd: number
    rate_cop: number
    rate_bs: number
    last_updated?: Date | string
  }

  export type CurrencyRateUpdateManyMutationInput = {
    rate_usd?: FloatFieldUpdateOperationsInput | number
    rate_cop?: FloatFieldUpdateOperationsInput | number
    rate_bs?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyRateUncheckedUpdateManyInput = {
    rate_usd?: FloatFieldUpdateOperationsInput | number
    rate_cop?: FloatFieldUpdateOperationsInput | number
    rate_bs?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CurrencyRateCountOrderByAggregateInput = {
    id?: SortOrder
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
    last_updated?: SortOrder
  }

  export type CurrencyRateAvgOrderByAggregateInput = {
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
  }

  export type CurrencyRateMaxOrderByAggregateInput = {
    id?: SortOrder
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
    last_updated?: SortOrder
  }

  export type CurrencyRateMinOrderByAggregateInput = {
    id?: SortOrder
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
    last_updated?: SortOrder
  }

  export type CurrencyRateSumOrderByAggregateInput = {
    rate_usd?: SortOrder
    rate_cop?: SortOrder
    rate_bs?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
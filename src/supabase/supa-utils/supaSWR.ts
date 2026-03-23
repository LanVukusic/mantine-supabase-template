import { AnyResponse } from './typeUtils';
import {
  PostgrestResponse,
  PostgrestSingleResponse,
  PostgrestMaybeSingleResponse,
} from '@supabase/supabase-js';
import useSWR, { SWRResponse } from 'swr';
import { toSupabasePromise } from './supabasePromise';
import { Database } from '../supabase';

// Type-safe table name from Database type
// Type-safe table name from Database type
type TableName =
  | keyof Database['public']['Tables']
  | keyof Database['public']['Views'];

export type TableNames = TableName | TableName[];

export interface SupaQueryConfig<
  TTable extends TableNames = TableNames,
  TParams = any,
> {
  table: TTable;
  params?: TParams;
  // Query builder function: receives supabase client, returns a promise
  query: () => PromiseLike<AnyResponse<any>>;
}

// Helper to generate a stable cache key from config
function supaCacheKey<TTable extends TableNames, TParams>(
  config: SupaQueryConfig<TTable, TParams>,
): string {
  // Always store table as an array for cache key consistency
  const tables = Array.isArray(config.table) ? config.table : [config.table];
  return JSON.stringify({
    tables,
    params: config.params ?? null,
  });
}

// Overloads for type safety
export function getSupaWR<T, TTable extends TableNames, TParams = any>(
  config: SupaQueryConfig<TTable, TParams> & {
    query: () => PromiseLike<PostgrestResponse<T>>;
  },
): SWRResponse<T[], Error> & { error: Error | null };
export function getSupaWR<T, TTable extends TableNames, TParams = any>(
  config: SupaQueryConfig<TTable, TParams> & {
    query: () => PromiseLike<PostgrestSingleResponse<T>>;
  },
): SWRResponse<T, Error> & { error: Error | null };
export function getSupaWR<T, TTable extends TableNames, TParams = any>(
  config: SupaQueryConfig<TTable, TParams> & {
    query: () => PromiseLike<PostgrestMaybeSingleResponse<T>>;
  },
): SWRResponse<T | null, Error> & { error: Error | null };

// Implementation
export function getSupaWR<T, TTable extends TableNames, TParams = any>(
  config: SupaQueryConfig<TTable, TParams>,
): any {
  const key = supaCacheKey(config);
  return useSWR(key, {
    fetcher: () => toSupabasePromise<T>(config.query()),
  });
}

// Example usage:
// const { data, error } = getSupaWR({
//   table: 'devices',
//   params: { id: 1 },
//   query: () => supabase.from('devices').select('*').eq('id', 1),
// });
//
// const { data, error } = getSupaWR({
//   table: ['devices', 'device_stats'],
//   query: () => Promise.all([
//     supabase.from('devices').select('*'),
//     supabase.from('device_stats').select('*'),
//   ]),
// });

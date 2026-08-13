import {
  PostgrestResponse,
  PostgrestSingleResponse,
  PostgrestMaybeSingleResponse,
} from '@supabase/supabase-js';

import { AnyResponse, Success } from './typeUtils';

export function toSupabasePromise<T>(
  prom: PromiseLike<PostgrestResponse<T>>,
): Promise<Success<T[]>>;
export function toSupabasePromise<T>(
  prom: PromiseLike<PostgrestSingleResponse<T>>,
): Promise<Success<T>>;
export function toSupabasePromise<T>(
  prom: PromiseLike<PostgrestMaybeSingleResponse<T>>,
): Promise<Success<T | null>>;

export function toSupabasePromise<T>(prom: PromiseLike<AnyResponse<T>>): Promise<any> {
  return new Promise((resolve, reject) => {
    prom.then((response) => {
      if (response.error) {
        return reject(response.error);
      }
      if (response.data == null) {
        return reject(new Error('No data returned'));
      }
      return resolve(response.data);
    });
  });
}

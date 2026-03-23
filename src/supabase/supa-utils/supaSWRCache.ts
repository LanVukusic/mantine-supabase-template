import { mutate } from 'swr';
import { Database } from '../supabase';

export type TableName =
  | keyof Database['public']['Tables']
  | keyof Database['public']['Views'];

/**
 * Refetch or invalidate SWR cache for one or more tables.
 * @param tables Table name or array of table names
 */
export function refetchTables(tables: TableName | TableName[]) {
  const tableList = Array.isArray(tables) ? tables : [tables];
  for (const table of tableList) {
    // Invalidate all SWR keys that include this table name
    mutate(
      (key: string) => {
        try {
          const parsed = JSON.parse(key);
          return parsed && parsed.table === table;
        } catch {
          return false;
        }
      },
      undefined,
      { revalidate: true },
    );
  }
}

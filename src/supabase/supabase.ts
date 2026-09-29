export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

// Placeholder until `yarn typegen` generates the real schema.
// Keeps `Database['public']['Tables']` resolvable so `tsc` passes
// with a fresh clone (no linked Supabase project yet).
export type Database = {
  public: {
    Tables: Record<string, { Row: Record<string, unknown>; Insert: Record<string, unknown>; Update: Record<string, unknown> }>;
    Views: Record<string, { Row: Record<string, unknown> }>;
    Functions: Record<string, unknown>;
    Enums: Record<string, unknown>;
    CompositeTypes: Record<string, unknown>;
  };
};

// THIS WILL BE REPLACED BY RUNNING 'yarn typegen''

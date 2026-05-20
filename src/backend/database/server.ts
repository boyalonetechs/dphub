import { createClient } from "@supabase/supabase-js";

const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
const databaseAnonKey = process.env.NEXT_PUBLIC_DATABASE_ANON_KEY;

export const db = createClient(databaseUrl!, databaseAnonKey!);

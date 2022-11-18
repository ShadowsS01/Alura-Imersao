import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
if (!PUBLIC_KEY) throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");

export const supabase = createClient(SUPABASE_URL, PUBLIC_KEY);

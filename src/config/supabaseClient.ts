import { createClient } from '@supabase/supabase-js';

let supabaseUrl: string | undefined = process.env.VITE_SUPABASE_URL;
let supabaseKey: string | undefined = process.env.VITE_SUPABASE_ANON_KEY;

// Attempt to access Vite variables without using import.meta in CommonJS
try {
  // eslint-disable-next-line no-new-func
  supabaseUrl = supabaseUrl || new Function('return import.meta.env.VITE_SUPABASE_URL')();
  // eslint-disable-next-line no-new-func
  supabaseKey = supabaseKey || new Function('return import.meta.env.VITE_SUPABASE_ANON_KEY')();
} catch {
  // ignore if not running in a Vite environment
}
export const supabase = createClient(supabaseUrl as string, supabaseKey as string);


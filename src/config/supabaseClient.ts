// import { createClient } from '@supabase/supabase-js';

// let supabaseUrl: string | undefined = 'https://rzbfdtomeethqupmsuxy.supabase.co';
// let supabaseKey: string | undefined = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YmZkdG9tZWV0aHF1cG1zdXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDI4MjIsImV4cCI6MjA2ODIxODgyMn0.WMF8frcbL546bPbfz_Rhpr_YGPsSa8Yjw-Ew7zw4-JM';

// // Attempt to access Vite variables without using import.meta in CommonJS
// try {
//   // eslint-disable-next-line no-new-func
//   supabaseUrl = supabaseUrl || new Function('return import.meta.env.VITE_SUPABASE_URL')();
//   // eslint-disable-next-line no-new-func
//   supabaseKey = supabaseKey || new Function('return import.meta.env.VITE_SUPABASE_ANON_KEY')();
// } catch {
//   // ignore if not running in a Vite environment
// }
// export const supabase = createClient(supabaseUrl as string, supabaseKey as string);

// // 📁 src/config/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rzbfdtomeethqupmsuxy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YmZkdG9tZWV0aHF1cG1zdXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDI4MjIsImV4cCI6MjA2ODIxODgyMn0.WMF8frcbL546bPbfz_Rhpr_YGPsSa8Yjw-Ew7zw4-JM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

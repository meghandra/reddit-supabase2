import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kezlgspomtghmkirnbtq.supabase.co'
const supabaseAnonkey = import.meta.env.VITE_SUPABASE_ANONKEY as string;
export const supabase = createClient(supabaseUrl,supabaseAnonkey)

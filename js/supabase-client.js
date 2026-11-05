// supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://odlsorwdqdmiblhfgozl.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_ZqytrsEp4IKe_2753zjYpQ_-K670gOs'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
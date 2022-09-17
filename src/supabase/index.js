import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rcundorysasdpcvnpttw.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjdW5kb3J5c2FzZHBjdm5wdHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4ODAwNjYsImV4cCI6MTk3NzQ1NjA2Nn0.aHz02vZfEohM84w0nNmxe-ixl0U1sgA7NTVyL9SDR9E';

export default createClient(supabaseUrl, supabaseAnonToken);
export const supabase = createClient(supabaseUrl, supabaseAnonToken);

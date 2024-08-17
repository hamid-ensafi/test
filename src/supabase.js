import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yrosbssathixvthvpoet.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlyb3Nic3NhdGhpeHZ0aHZwb2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyNTg5MzMsImV4cCI6MjAzODgzNDkzM30.vbzY_m8oOT13VYL0aJm7UDY_XNiQqRLIEzbKSOzLTH8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

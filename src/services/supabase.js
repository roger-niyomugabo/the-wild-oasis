import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://smwqnmmxjijzhgfvnpro.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtd3FubW14amlqemhnZnZucHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MDA1MzIsImV4cCI6MjA1NjQ3NjUzMn0.r8Rr_Khpj6puOB52QknTay8c2VccnpMW5T4p5ff4lBQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

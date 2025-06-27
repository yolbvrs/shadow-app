import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://esckhjnndwaronnmzjop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzY2toam5uZHdhcm9ubm16am9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MjIzMzgsImV4cCI6MjA2NjQ5ODMzOH0.nrGc4mXuGsQCtWfrbZD4wBYug0-rvm-ZuX8dKWM5R2w';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };
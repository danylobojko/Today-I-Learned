import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rthebwgwxwetgtzbxmdi.supabase.co";
//"https://yyztwajlinqwjoyiinwe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aGVid2d3eHdldGd0emJ4bWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMDYwMzMsImV4cCI6MjA3Mzc4MjAzM30.dVBrjGL47x8SClDmZ-7YTK_IaaOv6YDit3g6QclRgE4";
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5enR3YWpsaW5xd2pveWlpbndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3ODE0OTAsImV4cCI6MjA2NDM1NzQ5MH0.oD3DgN0e1-c-x7oZrLcDSuHX7mLdp-EFzaTxMUmdLUg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// db pwd - Uf8vWwvK8Rsmmi7I

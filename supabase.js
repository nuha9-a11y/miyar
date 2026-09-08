import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://avooyglxacytrfhvotsl.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_NVlWEnA_w4KbSse_-70zdA_J9ut0Kyo";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

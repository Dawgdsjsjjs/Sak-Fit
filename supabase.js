(function () {
  const cfg = window.SAK_CONFIG || {};
  if (!cfg.SUPABASE_URL || cfg.SUPABASE_URL.includes("YOUR_") ||
      !cfg.SUPABASE_ANON_KEY || cfg.SUPABASE_ANON_KEY.includes("YOUR_")) {
    window.sakDbError = "Add your Supabase URL and ANON/PUBLISHABLE key in config.js";
    return;
  }
  window.sakDb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
})();
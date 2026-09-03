// Sak Fitness Supabase connection

(function () {

    if (!window.SAK_CONFIG) {
        console.error("SAK_CONFIG was not loaded.");
        window.sakDb = null;
        return;
    }

    const url = window.SAK_CONFIG.SUPABASE_URL;
    const key = window.SAK_CONFIG.SUPABASE_ANON_KEY;

    if (!url || !key) {
        console.error("Supabase URL or Publishable key is missing.");
        window.sakDb = null;
        return;
    }

    if (!window.supabase || !window.supabase.createClient) {
        console.error("Supabase library was not loaded.");
        window.sakDb = null;
        return;
    }

    window.sakDb = window.supabase.createClient(url, key);

    console.log("Sak Fitness database connected.");

})();

// Nooty har allerede et Supabase-projekt (det wall.html og index.html
// bruger). Genbrug samme "Project URL" og "anon public"-nøgle her — I
// finder dem enten i Supabase-projektets Project Settings -> API, eller i
// indstillingerne I allerede har tastet ind i wall.html/index.html.
//
// Det er helt trygt at have "anon public"-nøglen liggende i denne fil,
// selvom siden er offentlig — den er lavet til at blive brugt i browseren.
// Det er Row Level Security-reglerne i supabase/schema.sql, der bestemmer,
// hvad nøglen reelt må: alle må læse saldi/bevægelser, men kun jer der er
// logget ind på admin.html kan tilføje eller slette bevægelser (til
// forskel fra resten af Nooty er der her et rigtigt login, fordi
// børnenes sider har brug for den samme offentlige nøgle for at kunne
// vise saldoen — uden login ville de så også kunne skrive).
const SUPABASE_URL = 'https://dit-projekt.supabase.co';
const SUPABASE_ANON_KEY = 'din-anon-public-nøgle';

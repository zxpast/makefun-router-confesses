# CANDIDATES.md — The Router Confesses (u-carbon-forge-the-router-confesses-f98f6b9e)

Entry final: `I held the last ten minutes of your film for one compliment. You said nothing, so I kept the ending.`
— 100 karakter, 1 baris, sha256 output `6f1fad31df5a699247e657024a78154240c155b079cdb5d82020a5fc34e3dec4`.

## Kandidat (O4: 5 kandidat + ide pertama dibuang)

| # | Teks | Karakter | Status |
|---|---|---|---|
| 0 | Sorry, I needed a break too — the hero was about to confess and I just couldn't watch. | 86 | IDE PERTAMA — DIBUANG (O4). Generik, tanpa nomina konkret, trope "router needs a break" = ide pertama yang ditebak siapa pun. |
| 1 | I held the last ten minutes of your film for one compliment. You said nothing, so neither did I. | 96 | DRAF v1 — direvisi. Punchline tanpa nomina/objek konkret (gagal C1, C8). |
| 2 | **I held the last ten minutes of your film for one compliment. You said nothing, so I kept the ending.** | **100** | **FINAL v2** — revisi dari #1: punchline memakai objek konkret "the ending" (lolos C1, C8). |
| 3 | The film was about to spoil its ending, so I spoiled it first. I know who dies — and I'm not telling. | 101 | Cadangan. Rasio setup:punchline 12:8 = 1,5:1 (gagal C4, <2:1). |
| 4 | The microwave and I had a bet on whether you'd scream. I won — that's why the screen went black. | 96 | Cadangan. Rasio 11:8 = 1,4:1 (gagal C4); punchline menjelaskan mekanisme (lemah C3). |
| 5 | You never thanked me once in 364 days. Tonight I kept the climax for myself — I watched it alone. | 97 | Cadangan. Punchline lebih panjang dari setup (gagal C4); angka 364 tanpa payoff di punchline (gagal C6). |
| 6 | You ignored me for 364 days, then screamed when I blinked. The ending was mine — I kept it. | 91 | Cadangan. Rasio 11:7 = 1,6:1 (gagal C4); angka 364 tanpa payoff (gagal C6). |

## Kenapa #2 menang

- **Twist di kata-kata terakhir (G-H1):** "so I kept the ending" — router menyandera ending film, rahasia kecil yang sombong (kriteria 3).
- **Suara router, bukan permintaan maaf generik:** dendam kecil ("for one compliment") + ego rapuh + aksi balasan. Bukan buffering/bandwidth/firmware-update (kriteria 5).
- **Tabrakan dua gambar konkret:** "ten minutes of your film" × "one compliment" — sandera vs pujian.
- **Satu napas, tanpa setup yang perlu dijelaskan (kriteria 4):** 2 kalimat pendek, 20 kata.
- **Rasio setup:punchline 13:5 = 2,6:1** (zona target C4 2:1–5:1); punchline 5/20 kata = 25% (lolos C3); tanpa kutipan/ironi sebelum pivot terakhir (lolos C5); belokan baru di pivot terakhir (lolos C7); verba terkuat "held…ransom" + objek konkret "the ending" di punchline (lolos C8); berdiri sendiri tanpa konteks kompetisi (lolos C9 — "your film", "the ending" cukup jelas).
- **Struktur §3 skill orisinalitas:** nomina konkret spesifik (film, compliment, ending) + verba transaksi/menahan (held, kept) + pembingkaian ulang di paruh kedua (router yang menyimpan ending).

## Cek orisinalitas O1–O4 (final #2)

- **O1 (frasa-persis web, 26 Nov 2026 ~01:10 WIB):** pencarian bertanda kutip `"I held the last ten minutes of your film for one compliment"` → **0 hit verbatim** (hasil hanya halaman tak terkait soal "compliment").
- **O2 (duplikat di lapangan):** leaderboard API dicek 2026-11-25 18:08 UTC (01:08 WIB 26 Nov) — **0 entri tampil, metrics_withheld: true (blind round)**. Tidak ada teks rival yang bisa diduplikasi; tidak ada salinan persis yang terlihat. File snapshot: `leaderboard_20261126_0108.json`.
- **O3 (uji trope / struktur §3):** tanpa model dingin — uji struktural: verba abstrak + nomina generik TIDAK dipakai; "ransom for one compliment" bukan ide pertama untuk prompt router (ide pertama = buffering / "I needed a rest" / "firmware update" — semuanya dihindari). Lolos.
- **O4 (5 kandidat, ide pertama dibuang):** 5 kandidat nyata (#2–#6) + ide pertama (#0) dibuang; yang dipilih memenuhi §3 (nomina spesifik + verba transaksi/menahan + reframe).

## Cek klise lapangan (G-H4)

- Frasa punchline "I kept the ending": tidak mengandung buffering / bandwidth / firmware / update / restart / reconnect — semua klise kriteria-5 dihindari.
- Tanpa "you're welcome" (klise 106 entri di Mishap, terbaik rank 12).

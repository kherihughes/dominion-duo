// Games feed for the tracker. Claude adds new games at the END of this list; the open tracker window
// picks them up within ~4 seconds. Keep every id unique. add_game.py also bakes this list into index.html.
// stats are [you, duo] as {z: zones, k: kills, d: deaths}; rank is the rank AFTER the game for [you, duo].
// Rank index: Bronze V..I = 0-4, Silver 5-9, Gold V..I = 10-14, Platinum V..I = 15-19, Diamond 20-24, Master 25, Grand Master 26.
window.FH_FEED = {
  players: [{ name: "Kheri" }, { name: "spanz" }],
  matches: [
    {"id": "g1win01", "ts": 1790965776123, "result": "W", "stats": [{"z": 4, "k": 12, "d": 4}, {"z": 2, "k": 8, "d": 4}], "rank": [15, 10]},
    {"id": "g2win02", "ts": 1790967276123, "result": "W", "stats": [{"z": 4, "k": 12, "d": 3}, {"z": 4, "k": 9, "d": 4}], "rank": [16, 10]},
    {"id": "g3win03", "ts": 1790967940220, "result": "W", "stats": [{"z": 1, "k": 8, "d": 4}, {"z": 3, "k": 7, "d": 3}], "rank": [17, 11]},
    {"id": "g4loss04", "ts": 1790968595041, "result": "L", "stats": [{"z": 3, "k": 5, "d": 6}, {"z": 2, "k": 3, "d": 4}], "rank": [17, 11]},
    {"id": "g5win05", "ts": 1790969968584, "result": "W", "stats": [{"z": 3, "k": 12, "d": 3}, {"z": 2, "k": 9, "d": 5}], "rank": [17, 11]},
    {"id": "g6win06", "ts": 1791068610557, "result": "W", "stats": [{"z": 2, "k": 6, "d": 5}, {"z": 1, "k": 7, "d": 3}], "rank": [18, 11], "rev": 1},
    {"id": "g7win07", "ts": 1791069415456, "result": "W", "stats": [{"z": 0, "k": 6, "d": 4}, {"z": 3, "k": 6, "d": 1}], "rank": [18, 12]},
    {"id": "g8win08", "ts": 1791070368865, "result": "W", "stats": [{"z": 2, "k": 6, "d": 7}, {"z": 3, "k": 8, "d": 4}], "rank": [19, 13]}
  ]
};

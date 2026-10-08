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
    {"id": "g8win08", "ts": 1791070368865, "result": "W", "stats": [{"z": 2, "k": 6, "d": 7}, {"z": 3, "k": 8, "d": 4}], "rank": [19, 13]},
    {"id": "g9win09", "ts": 1791071115174, "result": "W", "stats": [{"z": 1, "k": 7, "d": 5}, {"z": 1, "k": 3, "d": 5}], "rank": [19, 13]},
    {"id": "g10win10", "ts": 1791071878860, "result": "W", "stats": [{"z": 3, "k": 11, "d": 3}, {"z": 2, "k": 6, "d": 5}], "rank": [20, 14]},
    {"id": "g11loss11", "ts": 1791072611817, "result": "L", "stats": [{"z": 3, "k": 8, "d": 4}, {"z": 2, "k": 6, "d": 7}], "rank": [20, 13]},
    {"id": "g12loss12", "ts": 1791074127114, "result": "L", "stats": [{"z": 4, "k": 6, "d": 6}, null], "rank": [19, 13]},
    {"id": "g13loss13", "ts": 1791075208373, "result": "L", "stats": [{"z": 2, "k": 9, "d": 6}, {"z": 4, "k": 8, "d": 9}], "rank": [19, 13]},
    {"id": "g14win14", "ts": 1791076421717, "result": "W", "stats": [{"z": 5, "k": 13, "d": 5}, {"z": 2, "k": 14, "d": 6}], "rank": [19, 13]},
    {"id": "g15loss15", "ts": 1791077207863, "result": "L", "stats": [{"z": 3, "k": 12, "d": 5}, {"z": 2, "k": 6, "d": 5}], "rank": [19, 13]},
    {"id": "g16loss16", "ts": 1791078375212, "result": "L", "stats": [{"z": 1, "k": 3, "d": 5}, {"z": 0, "k": 4, "d": 5}], "rank": [18, 12]},
    {"id": "g17win17", "ts": 1791079203023, "result": "W", "stats": [{"z": 2, "k": 12, "d": 3}, {"z": 3, "k": 10, "d": 0}], "rank": [19, 13]},
    {"id": "g18loss18", "ts": 1791080020257, "result": "L", "stats": [{"z": 2, "k": 7, "d": 5}, {"z": 0, "k": 2, "d": 7}], "rank": [18, 12]},
    {"id": "g19win19", "ts": 1791081078014, "result": "W", "stats": [{"z": 1, "k": 10, "d": 3}, {"z": 2, "k": 5, "d": 5}], "rank": [18, 13]},
    {"id": "g20win20", "ts": 1791081830657, "result": "W", "stats": [{"z": 4, "k": 7, "d": 3}, {"z": 3, "k": 7, "d": 4}], "rank": [19, 13]},
    {"id": "g21loss21", "ts": 1791083262975, "result": "L", "stats": [{"z": 2, "k": 15, "d": 8}, {"z": 2, "k": 12, "d": 6}], "rank": [18, 13]},
    {"id": "g22loss22", "ts": 1791084533308, "result": "L", "stats": [{"z": 4, "k": 6, "d": 8}, {"z": 3, "k": 7, "d": 7}], "rank": [18, 12]},
    {"id": "g23win23", "ts": 1791413655194, "result": "W", "stats": [{"z": 3, "k": 4, "d": 2}, {"z": 2, "k": 11, "d": 6}], "rank": [18, 11]},
    {"id": "g24loss24", "ts": 1791414647955, "result": "L", "stats": [{"z": 4, "k": 16, "d": 5}, null], "rank": [18, 11]},
    {"id": "g25loss25", "ts": 1791415393967, "result": "L", "stats": [{"z": 1, "k": 4, "d": 4}, {"z": 1, "k": 0, "d": 5}], "rank": [18, 11], "rev": 1},
    {"id": "g26win26", "ts": 1791416308079, "result": "W", "stats": [{"z": 2, "k": 9, "d": 5}, {"z": 1, "k": 7, "d": 6}], "rank": [18, 11]},
    {"id": "g27win27", "ts": 1791417762223, "result": "W", "stats": [{"z": 2, "k": 12, "d": 4}, {"z": 1, "k": 15, "d": 3}], "rank": [18, 11]},
    {"id": "g28loss28", "ts": 1791417831989, "result": "L", "stats": [{"z": 2, "k": 4, "d": 3}, {"z": 2, "k": 4, "d": 6}], "rank": [18, 11]}
  ]
};

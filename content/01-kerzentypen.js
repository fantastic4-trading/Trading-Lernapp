// Kapitel: Kerzentypen
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Kerzentypen", {
 "level": 1,
 "intro": "Jede Kerze zeigt Eröffnung, Hoch, Tief und Schluss (OHLC) eines Zeitraums. Grün = gestiegen, Rot = gefallen. Körper = Bereich Eröffnung–Schluss, Dochte = Hoch und Tief.",
 "cards": [
  [
   "Hammer",
   "Kleiner Körper oben, langer unterer Docht. Nach einem Abwärtstrend: Käufer haben den Abverkauf zurückgekauft, mögliche Umkehr nach oben.",
   "hammer"
  ],
  [
   "Shooting Star",
   "Kleiner Körper unten, langer oberer Docht. Nach einem Aufwärtstrend: Verkäufer drücken den Kurs zurück, mögliche Umkehr nach unten.",
   "shooting"
  ],
  [
   "Doji",
   "Eröffnung ≈ Schluss. Unentschlossenheit; an wichtigen Zonen ein Warnsignal.",
   "doji"
  ],
  [
   "Spinning Top",
   "Kleiner Körper, Dochte auf beiden Seiten: Gleichgewicht zwischen Käufern und Verkäufern.",
   "spinning"
  ],
  [
   "Marubozu grün",
   "Großer Körper ohne Dochte: Käufer hatten den ganzen Zeitraum die Kontrolle.",
   "marubozu_g"
  ],
  [
   "Marubozu rot",
   "Großer roter Körper ohne Dochte: Verkäufer hatten die volle Kontrolle.",
   "marubozu_r"
  ],
  [
   "Bullish Engulfing",
   "Grüne Kerze umschließt den Körper der vorherigen roten komplett: starkes Umkehrsignal nach oben.",
   "bull_engulf"
  ],
  [
   "Bearish Engulfing",
   "Rote Kerze umschließt den Körper der vorherigen grünen: Umkehrsignal nach unten.",
   "bear_engulf"
  ],
  [
   "Morning Star",
   "Drei Kerzen: große rote, kleine Unentschlossenheit, große grüne. Bodenbildung.",
   "morning"
  ],
  [
   "Evening Star",
   "Drei Kerzen: große grüne, kleine Kerze, große rote. Topbildung.",
   "evening"
  ],
  [
   "Hanging Man",
   "Sieht aus wie ein Hammer (kleiner Körper oben, langer unterer Docht), steht aber am Ende eines Aufwärtstrends. Warnsignal für eine Wende nach unten, braucht aber eine Bestätigung durch die nächste Kerze.",
   "hanging"
  ],
  [
   "Inverted Hammer",
   "Kleiner Körper unten, langer oberer Docht, nach einem Abwärtstrend. Käufer testen höhere Kurse. Gleiche Form wie der Shooting Star, aber am Boden statt am Hoch.",
   "inv_hammer"
  ],
  [
   "Dragonfly Doji",
   "Eröffnung, Schluss und Hoch fast gleich, langer unterer Docht. Verkäufer wurden komplett zurückgedrängt. An einer Unterstützung bullisch.",
   "dragonfly"
  ],
  [
   "Gravestone Doji",
   "Eröffnung, Schluss und Tief fast gleich, langer oberer Docht. Käufer konnten das Hoch nicht halten. Am Widerstand bärisch.",
   "gravestone"
  ],
  [
   "Piercing Line",
   "Rote Kerze, danach eine grüne, die mehr als die Hälfte des roten Körpers zurückholt. Schwächere Variante des Bullish Engulfing.",
   "piercing"
  ],
  [
   "Dark Cloud Cover",
   "Grüne Kerze, danach eine rote, die mehr als die Hälfte des grünen Körpers abgibt. Schwächere Variante des Bearish Engulfing.",
   "darkcloud"
  ],
  [
   "Harami",
   "Der zweite Körper liegt komplett im ersten (japanisch: schwanger). Zeigt eine Pause bzw. Unentschlossenheit. Signal erst, wenn das Hoch (bullisch) oder Tief (bärisch) beider Kerzen gebrochen wird.",
   "harami"
  ],
  [
   "Three White Soldiers",
   "Drei kräftige grüne Kerzen, jede schließt höher. Aufbauende Kaufkraft. Besser auf einen kleinen Rücksetzer warten als nach der dritten Kerze hinterherkaufen.",
   "soldiers"
  ],
  [
   "Three Black Crows",
   "Drei kräftige rote Kerzen, jede schließt tiefer. Gegenstück zu den Three White Soldiers.",
   "crows"
  ],
  [
   "Rising Three Methods",
   "Große grüne Kerze, drei kleine Korrekturkerzen innerhalb ihrer Spanne, dann wieder eine große grüne. Eines der wenigen Fortsetzungsmuster.",
   "rising3"
  ],
  [
   "Charttypen",
   "Kerzenchart: zeigt Eröffnung, Hoch, Tief, Schluss. Linienchart: nur die Schlusskurse, gut für das große Bild. Heikin-Ashi: geglättete Kerzen, die Trends ruhiger darstellen, aber nicht die echten Kurse zeigen.",
   null
  ],
  [
   "Wichtig",
   "Kerzenmuster nie isoliert handeln: Ort (Unterstützung/Widerstand), Trend und Volumen entscheiden. Einstieg erst, wenn das Hoch bzw. Tief des Musters gebrochen wird. Der Stop gehört hinter das Muster.",
   null
  ]
 ],
 "quiz": [
  [
   "Langer unterer Docht nach Abwärtstrend heißt …",
   [
    "Shooting Star",
    "Hammer",
    "Marubozu"
   ],
   1
  ],
  [
   "Eine rote Kerze umschließt die vorherige grüne. Das ist ein …",
   [
    "Bearish Engulfing",
    "Morning Star",
    "Doji"
   ],
   0
  ],
  [
   "Was zeigt ein Doji?",
   [
    "Starke Käufer",
    "Unentschlossenheit",
    "Trendbeschleunigung"
   ],
   1
  ],
  [
   "Morning Star besteht aus wie vielen Kerzen?",
   [
    "1",
    "2",
    "3"
   ],
   2
  ],
  [
   "Worauf kommt es bei Kerzenmustern zusätzlich an?",
   [
    "Farbe des Charts",
    "Ort, Trend und Volumen",
    "Uhrzeit allein"
   ],
   1
  ],
  [
   "Hammerform am Ende eines Aufwärtstrends heißt …",
   [
    "Hanging Man",
    "Dragonfly Doji",
    "Harami"
   ],
   0
  ],
  [
   "Die grüne Kerze holt mehr als 50 % der vorherigen roten Kerze zurück, umschließt sie aber nicht. Das ist eine …",
   [
    "Piercing Line",
    "Dark Cloud Cover",
    "Three White Soldiers"
   ],
   0
  ],
  [
   "Wann gilt ein Harami als Signal?",
   [
    "Sofort bei Entstehung",
    "Wenn Hoch oder Tief beider Kerzen gebrochen wird",
    "Nie"
   ],
   1
  ],
  [
   "Was zeigt ein Linienchart?",
   [
    "Nur die Schlusskurse",
    "Hoch und Tief",
    "Das Volumen"
   ],
   0
  ],
  [
   "Wie lang muss der Docht eines Hammers mindestens sein?",
   [
    "Halb so lang wie der Körper",
    "Doppelt so lang wie der Körper",
    "Egal"
   ],
   1
  ]
 ]
});

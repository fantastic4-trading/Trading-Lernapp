// Kapitel: Strategien
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Strategien", {
 "level": 2,
 "intro": "Bewährte Setups, die viele Trader kombinieren. Keines funktioniert allein: Am stärksten sind Einstiege, an denen mehrere Gründe zusammenkommen (Konfluenz). Alle Strategien erst im Paper Trading testen.",
 "cards": [
  [
   "DCA (Dollar Cost Averaging)",
   "Gestaffelt einsteigen: mehrere Teilkäufe auf verschiedenen Kursniveaus statt einer großen Order. Der Durchschnittspreis verbessert sich, wenn der Kurs nach dem ersten Kauf weiter fällt.",
   "dca"
  ],
  [
   "DCA richtig planen",
   "Gesamtrisiko VOR dem ersten Kauf festlegen: alle Teilkäufe plus ein gemeinsamer Stop dürfen zusammen nur z. B. 1 % kosten. Gegen den Trend mit Hebel nachkaufen ohne Stop ist einer der häufigsten Gründe für Liquidationen.",
   null
  ],
  [
   "Liquidity Grab (Sweep)",
   "Der Kurs sticht kurz über ein letztes Hoch oder unter ein Tief, löst dort Stops und Liquidationen aus und dreht dann zurück. Einstieg nach dem Rückschluss in die alte Range, Stop hinter den Docht.",
   "grab"
  ],
  [
   "Liquidity Grab erkennen",
   "Typisch: langer Docht über/unter dem Level, Schluss wieder innerhalb, oft mit Liquidationsspitze und fallendem OI. Equal Highs/Lows (doppelte Hochs/Tiefe) sind besonders beliebte Ziele.",
   null
  ],
  [
   "Fibonacci-Retracement",
   "Im Aufwärtstrend vom Tief zum Hoch ziehen (für Shorts vom Hoch zum Tief). Wichtige Rücksetzer-Level: 0,382 / 0,5 / 0,618 / 0,786 / 0,886. Der Golden Pocket liegt bei 0,618–0,65. Die tiefere OTE-Zone (Optimal Trade Entry) reicht etwa von 0,62 bis 0,79. Ein Schluss jenseits von 0,886 gilt oft als Ende der Idee.",
   "fib"
  ],
  [
   "Fibonacci-Extensions",
   "Kursziele über das alte Hoch hinaus, z. B. 1,272 und 1,618. Gut für Take-Profit-Planung.",
   null
  ],
  [
   "Fair Value Gap (FVG)",
   "Ungleichgewicht nach einer starken Bewegung: Lücke zwischen dem Docht von Kerze 1 und Kerze 3. Der Kurs läuft sie oft wieder an. Einstieg in der Lücke, Stop dahinter.",
   null
  ],
  [
   "Order Block",
   "Letzte Gegenkerze vor einer starken Bewegung, z. B. die letzte rote Kerze vor einem Ausbruch nach oben. Wird oft als Unterstützung erneut getestet.",
   null
  ],
  [
   "Range Trading",
   "An der Unterstützung kaufen, am Widerstand verkaufen, Stop knapp außerhalb. Sehr oft kombiniert mit Liquidity Grabs an den Range-Grenzen.",
   "range"
  ],
  [
   "Breakout & Retest",
   "Kurs bricht einen Widerstand, kommt zurück und testet ihn von oben als Unterstützung. Einstieg beim Retest statt direkt im Ausbruch: weniger Fehlausbrüche.",
   "breakout"
  ],
  [
   "Trend-Pullback",
   "Im Aufwärtstrend nicht dem Hoch hinterherlaufen, sondern auf den Rücksetzer warten, z. B. ins Fib-Level, FVG oder an ein höheres Tief.",
   null
  ],
  [
   "Konfluenz",
   "Mehrere Gründe an derselben Stelle: z. B. Liquidity Grab + Golden Pocket + FVG + Spot-CVD steigt. Je mehr zusammenkommt, desto besser das Setup.",
   null
  ],
  [
   "Range-Sniper",
   "Nur an den Rändern einer sauberen Range handeln (mindestens 2 Tests oben und unten, nicht in der Mitte). Signal: Sweep über/unter den Rand und schneller Schluss zurück in die Range, CVD bestätigt. Stop hinter den Sweep-Docht, Ziel 1 Range-Mitte, Ziel 2 Gegenseite.",
   "grab"
  ],
  [
   "Reclaim-Einstieg",
   "Kurs fällt kurz unter eine Unterstützung (Fehlausbruch) und schließt wieder darüber. Der Einstieg kommt beim Zurückerobern, der Stop unter das Fehlausbruchs-Tief.",
   null
  ],
  [
   "VA-Rotation",
   "In Seitwärtsphasen: Kurs sticht unter die Value Area Low, CVD dreht, Schluss zurück über VAL. Ziel 1 POC, Ziel 2 VAH. In Trendphasen bricht die Rotation dagegen oft durch.",
   null
  ],
  [
   "Swing Failure Pattern (SFP)",
   "Docht über ein altes Swing-Hoch (oder unter ein Tief), aber Schluss wieder zurück. Liquidität wurde geholt, ohne dass der Ausbruch hält. Ähnlich wie der Liquidity Grab, meist auf höheren Zeitebenen wie 4h.",
   null
  ],
  [
   "Ausbruch oder Rotation?",
   "Ein Ausbruch mit steigendem OI ist erst eine Beobachtung. Zum Setup wird er erst mit Retest, Bestätigung durch CVD und klarem Stop. Die eigentliche Fähigkeit: erkennen, ob der Markt gerade rotiert oder trendet.",
   null
  ]
 ],
 "quiz": [
  [
   "Was macht der Kurs bei einem Liquidity Grab?",
   [
    "Bricht nachhaltig aus",
    "Sticht kurz über ein Level und dreht zurück",
    "Bleibt seitwärts"
   ],
   1
  ],
  [
   "Was ist beim DCA gegen den Trend entscheidend?",
   [
    "Unbegrenzt nachkaufen",
    "Gesamtrisiko und Stop vorher festlegen",
    "Hebel erhöhen"
   ],
   1
  ],
  [
   "Drei Käufe zu je 100 $ bei 50, 40 und 30. Durchschnittspreis ungefähr?",
   [
    "40",
    "38,3",
    "35"
   ],
   1
  ],
  [
   "Wo liegt beim Breakout & Retest der Einstieg?",
   [
    "Mitten im Ausbruch",
    "Beim Rücktest des gebrochenen Levels",
    "Vor dem Ausbruch"
   ],
   1
  ],
  [
   "Was ist Konfluenz?",
   [
    "Mehrere Gründe an derselben Stelle",
    "Ein hoher Hebel",
    "Eine Kerzenfarbe"
   ],
   0
  ],
  [
   "Welche Fib-Zone heißt Golden Pocket?",
   [
    "0,236–0,382",
    "0,618–0,65",
    "1,0–1,272"
   ],
   1
  ],
  [
   "Wo handelt der Range-Sniper?",
   [
    "In der Range-Mitte",
    "Nur an den Range-Rändern",
    "Überall"
   ],
   1
  ],
  [
   "Was ist ein Reclaim?",
   [
    "Kurs fällt unter Support und schließt wieder darüber",
    "Ein neues Allzeithoch",
    "Eine Limit-Order"
   ],
   0
  ],
  [
   "Ziel 1 bei einer VA-Rotation von der VAL aus ist meist …",
   [
    "der POC",
    "das Allzeithoch",
    "die VAL"
   ],
   0
  ]
 ]
});

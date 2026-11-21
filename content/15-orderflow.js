// Kapitel: Orderflow
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Orderflow", {
 "level": 3,
 "intro": "Orderflow zeigt, wer gerade aggressiv kauft oder verkauft. Tools wie aggr.trade, Bookmap oder Coinglass liefern dafür Delta, CVD, Liquidationen und große Trades. Orderflow liefert keine fertigen Signale, sondern Bestätigungen an vorher markierten Zonen.",
 "cards": [
  [
   "Market- vs. Limit-Orders",
   "Aggressive Trader nutzen Market-Orders und nehmen Liquidität. Passive Trader stellen Limit-Orders ins Orderbuch. Delta und CVD messen die aggressive Seite.",
   null
  ],
  [
   "Delta lesen",
   "Großer grüner Balken und der Kurs steigt mit: Käufer haben die Initiative. Großer Balken, aber der Kurs bewegt sich kaum: Jemand nimmt die Orders mit Limit-Orders auf (Absorption).",
   null
  ],
  [
   "Absorption",
   "Bullisch: starke Verkäufe, CVD fällt, aber der Kurs fällt kaum noch. Große passive Käufer nehmen alles auf. Bärisch spiegelbildlich am Widerstand. Immer auf eine Bestätigung durch die Struktur warten.",
   null
  ],
  [
   "CVD-Divergenz",
   "Bullisch: Kurs macht ein tieferes Tief, der CVD ein höheres Tief. Bärisch: Kurs macht ein höheres Hoch, der CVD ein tieferes Hoch. Verkäufer bzw. Käufer verlieren an Kraft.",
   null
  ],
  [
   "CVD richtig vergleichen",
   "Der CVD summiert ab dem linken Chartrand. Absolute Werte sind daher bedeutungslos. Vergleiche nur die Steigung und das Verhältnis von Spot- zu Perp-CVD.",
   null
  ],
  [
   "Liquidationen im Chart",
   "Lange Ausschläge bei den Long-Liquidationen am Ende eines Abverkaufs und Short-Liquidationen am Ende eines Anstiegs markieren oft das Ende einer Bewegung, weil die Zwangsorders verbraucht sind.",
   null
  ],
  [
   "Börsen unterscheiden",
   "Coinbase gilt eher als Markt für US-Anleger und Institutionen, Binance als globaler Privatmarkt, Bybit als Markt gehebelter Privatanleger. Kauft vor allem Coinbase, gilt das oft als starkes Zeichen.",
   null
  ],
  [
   "Vorgehen",
   "1. Zonen markieren (Session-Level, VAH/VAL, Vortageshoch/-tief). 2. Nur dort hinschauen. 3. Zwei bis drei Signale in dieselbe Richtung abwarten (Delta, CVD, Liquidationen). 4. Zum Einstieg 5-Minuten-Kerzen statt 1-Minuten-Kerzen nutzen.",
   null
  ],
  [
   "OI-Anstieg einordnen",
   "Ein Anstieg über eine einzelne Kerze sagt wenig. Als deutlich gilt grob +1 % in 1 Stunde oder +2 % in 4 Stunden. OI immer zusammen mit Kurs, CVD und Funding lesen.",
   null
  ]
 ],
 "quiz": [
  [
   "Großer roter Delta-Balken, aber der Kurs fällt kaum. Das deutet auf …",
   [
    "Absorption durch Käufer",
    "einen starken Abverkauf",
    "steigendes Funding"
   ],
   0
  ],
  [
   "Bullische CVD-Divergenz: Kurs tieferes Tief, CVD …",
   [
    "tieferes Tief",
    "höheres Tief",
    "unverändert"
   ],
   1
  ],
  [
   "Warum sind absolute CVD-Werte bedeutungslos?",
   [
    "Der CVD summiert ab dem Chartrand",
    "Er zeigt nur Spot",
    "Er ist immer null"
   ],
   0
  ],
  [
   "Was misst das Delta?",
   [
    "Aggressive Käufe minus Verkäufe",
    "Offene Positionen",
    "Die Funding Rate"
   ],
   0
  ],
  [
   "Wo schaut man im Orderflow hin?",
   [
    "Überall gleichzeitig",
    "Nur an vorher markierten Zonen",
    "Nur am Wochenende"
   ],
   1
  ]
 ]
});

// Kapitel: Typische Anfängerfehler
addKapitel("Typische Anfängerfehler", {
 "level": 1,
 "intro": "Die meisten Konten sterben nicht an schlechten Analysen, sondern an diesen Fehlern.",
 "cards": [
  [
   "FOMO",
   "Angst, etwas zu verpassen: Einstieg nach einer großen Kerze, ohne Setup. Gegenmittel: Es kommt immer ein neuer Trade.",
   null
  ],
  [
   "Revenge-Trading",
   "Nach einem Verlust sofort zurückholen wollen, meist mit größerer Position. Gegenmittel: Tageslimit, Pause.",
   null
  ],
  [
   "Kein Stop-Loss",
   "Ein einziger Trade ohne Stop kann das ganze Konto kosten.",
   null
  ],
  [
   "Zu hoher Hebel",
   "Hoher Hebel verkleinert den Abstand zur Liquidation. Normale Schwankungen werfen dich raus.",
   null
  ],
  [
   "Nachkaufen ohne Plan",
   "Gegen den Trend verbilligen, ohne Gesamtrisiko festzulegen. Aus einem kleinen Verlust wird ein großer.",
   null
  ],
  [
   "Stop verschieben",
   "Den Stop weiter weg schieben, weil man nicht wahrhaben will, dass die Idee falsch war.",
   null
  ],
  [
   "Overtrading",
   "Zu viele Trades aus Langeweile. Qualität statt Menge.",
   null
  ],
  [
   "Gewinne zu früh nehmen",
   "Aus Angst am Ziel vorbei aussteigen. Dann passt das CRV nicht mehr und die Strategie verliert.",
   null
  ],
  [
   "Signalen blind folgen",
   "Fremde Calls ohne eigenes Verständnis und ohne eigenen Stop handeln.",
   null
  ],
  [
   "Kein Journal",
   "Ohne Aufzeichnung weißt du nie, was funktioniert und was nicht.",
   null
  ],
  [
   "Margin auf Cross statt Isolated",
   "Einer der teuersten Anfängerfehler: Vor dem ersten Trade den Margin-Modus prüfen und auf Isolated (isoliert) stellen, z. B. bei Bitunix direkt im Orderfenster. Bei Cross haftet bei einem Verlust das gesamte Futures-Guthaben bis zur Liquidation, nicht nur der eine Trade.",
   null
  ],
  [
   "Cross vs. Isolated",
   "Cross: Das ganze Konto dient als Sicherheit für alle offenen Positionen. Läuft ein Trade stark gegen dich, kann er das komplette Konto aufbrauchen. Isolated: Jede Position hat ihre eigene, feste Margin. Wird sie liquidiert, ist nur diese Margin weg, der Rest des Kontos bleibt geschützt. Faustregel: Cross verbrennt das ganze Konto, Isolated nur den einen Trade.",
   null
  ],
  [
   "Multi-Trades und DCA",
   "Bei Bitunix lässt sich einstellen, ob mehrere Trades im selben Markt getrennt geführt werden (Multi-Trades an) oder ob neue Orders in dieselbe Position laufen (Multi-Trades aus). Ist Multi-Trades an, startet jede Order einen eigenen Trade mit eigenem Stop. Ist es aus, werden Nachkäufe mit der bestehenden Position zusammengelegt, der Einstiegspreis wird gemittelt: So funktioniert DCA. Die Bezeichnungen können sich je nach Börse und App-Version unterscheiden.",
   null
  ],
  [
   "Einstellungen vor dem ersten Trade",
   "Margin-Modus (Isolated), Hebel, Positionsmodus bzw. Multi-Trades und die Größeneinheit (Coin oder USDT) prüfen. Diese Einstellungen gelten oft je Markt, also für BTC und ETH getrennt.",
   null
  ]
 ],
 "quiz": [
  [
   "Nach einem Verlust sofort größer einsteigen heißt …",
   [
    "FOMO",
    "Revenge-Trading",
    "DCA"
   ],
   1
  ],
  [
   "Was ist beim Stop verboten?",
   [
    "Ihn setzen",
    "Ihn weiter weg schieben",
    "Ihn notieren"
   ],
   1
  ],
  [
   "Warum schaden zu früh genommene Gewinne?",
   [
    "Das CRV passt nicht mehr",
    "Gebühren steigen",
    "Gar nicht"
   ],
   0
  ],
  [
   "Welcher Margin-Modus kann bei einem Verlust das ganze Konto aufbrauchen?",
   [
    "Isolated",
    "Cross",
    "Beide nicht"
   ],
   1
  ],
  [
   "Was verlierst du bei Isolated im schlimmsten Fall?",
   [
    "Das ganze Konto",
    "Nur die Margin dieses Trades",
    "Nichts"
   ],
   1
  ],
  [
   "Du willst per DCA nachkaufen und einen gemittelten Einstiegspreis. Multi-Trades sollte dafür …",
   [
    "aus sein",
    "an sein",
    "egal sein"
   ],
   0
  ]
 ]
});

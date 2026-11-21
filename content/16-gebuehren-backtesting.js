// Kapitel: Gebühren & Backtesting
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Gebühren & Backtesting", {
 "level": 2,
 "intro": "Zwei Themen, die Anfänger fast immer unterschätzen: Gebühren fressen bei engen Stops einen großen Teil des Gewinns, und ein Backtest, der gut aussieht, beweist noch lange keinen echten Vorteil.",
 "cards": [
  [
   "Maker und Taker",
   "Maker-Gebühren (Limit-Order, die im Orderbuch liegt) sind niedriger, z. B. 0,02 %. Taker-Gebühren (Market-Order) höher, z. B. 0,05–0,06 %. Gezahlt wird auf den Positionswert, beim Ein- und beim Ausstieg.",
   null
  ],
  [
   "Gebühren in R",
   "Gebühr in R = Gebühren für Ein- und Ausstieg ÷ Abstand zum Stop. Beispiel: 0,1 % Round-Trip bei 0,35 % Stop-Abstand kostet fast 0,3R pro Trade. Aus einem Gewinn von 2R werden netto 1,7R, aus einem Verlust von 1R werden 1,3R.",
   null
  ],
  [
   "Enge Stops sind teuer",
   "Je enger der Stop, desto größer die Position und desto höher die Gebühr im Verhältnis zum Risiko. Viele Scalping-Strategien sind vor Gebühren profitabel und danach nicht mehr. Abhilfe: weitere Stops, Limit-Einstiege, weniger Trades.",
   null
  ],
  [
   "Funding als Kosten",
   "Wer eine Perp-Position lange hält, zahlt oder erhält alle 8 Stunden Funding. Bei Swing-Trades kann das spürbar werden.",
   null
  ],
  [
   "Umgekehrtes CRV",
   "Strategien mit kleinem Ziel und großem Stop (z. B. +0,6 % Ziel, −3,5 % Stop) haben oft hohe Trefferquoten. Sie brauchen aber über 85 % Treffer, nur um bei null zu landen. Ein einzelner Stop löscht viele Gewinne.",
   null
  ],
  [
   "Profit-Faktor und Stichprobe",
   "Erst ab etwa 30, besser 100 Trades sagt ein Backtest etwas aus. Ein Profit-Faktor über 1,3 nach Gebühren gilt als brauchbar. 10 Trades mit tollem Ergebnis sind Zufall.",
   null
  ],
  [
   "Overfitting",
   "Werden viele Parameter so lange verändert, bis die Vergangenheit perfekt aussieht, passt die Strategie nur noch zu genau diesen Daten. Auf neuen Daten bricht sie dann ein.",
   null
  ],
  [
   "Test auf unbekannten Daten",
   "Strategie auf einem Zeitraum entwickeln und auf einem anderen, vorher nicht angesehenen Zeitraum prüfen (Out-of-Sample). Hält sie dort nicht, gibt es keinen echten Vorteil.",
   null
  ],
  [
   "Vorwärtstest",
   "Nach dem Backtest die Strategie einige Wochen in Echtzeit auf Papier handeln, ohne Regeln zu ändern. Erst dann kleines Echtgeld.",
   null
  ],
  [
   "Marktphasen",
   "Eine Strategie kann in einem fallenden Markt glänzen und in einem steigenden verlieren. Backtests deshalb über verschiedene Phasen (Trend hoch, Trend runter, Seitwärts) prüfen und Long und Short getrennt auswerten.",
   null
  ]
 ],
 "quiz": [
  [
   "Welche Order ist meist günstiger?",
   [
    "Market (Taker)",
    "Limit (Maker)",
    "Beide gleich"
   ],
   1
  ],
  [
   "0,1 % Round-Trip-Gebühr, Stop 0,5 % entfernt. Gebühr in R?",
   [
    "0,02R",
    "0,2R",
    "2R"
   ],
   1
  ],
  [
   "Ziel +0,6 %, Stop −3,5 %. Welche Trefferquote ist mindestens nötig?",
   [
    "Ca. 50 %",
    "Ca. 70 %",
    "Über 85 %"
   ],
   2
  ],
  [
   "Was ist Overfitting?",
   [
    "Strategie passt nur zu den Testdaten",
    "Zu wenig Hebel",
    "Ein Kerzenmuster"
   ],
   0
  ],
  [
   "Ab wie vielen Trades wird ein Backtest grob aussagekräftig?",
   [
    "5",
    "Mind. 30, besser 100",
    "1"
   ],
   1
  ],
  [
   "Was ist ein Out-of-Sample-Test?",
   [
    "Test auf vorher nicht genutzten Daten",
    "Test mit Echtgeld",
    "Test ohne Gebühren"
   ],
   0
  ]
 ]
});

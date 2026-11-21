// Kapitel: Risikomanagement
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Risikomanagement", {
 "level": 1,
 "intro": "Ohne Risikomanagement kein langfristiger Erfolg. Nicht der einzelne Trade entscheidet, sondern die Summe vieler Trades mit festen Regeln. Unten findest du drei Rechner: Positionsgröße, CRV-Simulation und Zinseszins.",
 "cards": [
  [
   "1-%-Regel",
   "Pro Trade höchstens 1 % des Kontos riskieren.",
   null
  ],
  [
   "CRV",
   "Möglicher Gewinn ÷ möglicher Verlust. Bei CRV 1:3 reicht schon eine Trefferquote von rund 25 %, um nicht zu verlieren.",
   null
  ],
  [
   "Positionsgröße",
   "Riskierter Betrag ÷ Abstand Einstieg–Stop.",
   null
  ],
  [
   "Tages- und Wochenlimit",
   "Feste Verlustgrenzen, z. B. Stopp bei 3 % pro Tag und 5 % pro Woche.",
   null
  ],
  [
   "Trading-Journal",
   "Jeden Trade protokollieren: Grund, Einstieg, Stop, Ziel, Ergebnis, Gefühl.",
   null
  ],
  [
   "Stop-Platzierung",
   "Der Stop gehört dorthin, wo deine Idee widerlegt ist, z. B. unter das letzte Tief oder hinter eine Liquiditätszone, nicht auf einen beliebigen Prozentwert. Erst Stop festlegen, dann daraus die Positionsgröße berechnen.",
   null
  ],
  [
   "Trefferquote",
   "Anteil der Gewinntrades. Allein sagt sie wenig: 70 % Treffer mit CRV 1:0,3 verlieren Geld, 30 % Treffer mit CRV 1:3 gewinnen.",
   null
  ],
  [
   "Erwartungswert",
   "Erwartungswert pro Trade = Trefferquote × Gewinn − Verlustquote × Verlust. Beispiel: 30 % × 3R − 70 % × 1R = +0,2R pro Trade. R = dein Risiko pro Trade.",
   null
  ],
  [
   "Break-even-Trefferquote",
   "Ab welcher Quote du nicht mehr verlierst: 1 ÷ (1 + CRV). Bei 1:3 sind das 25 %, bei 1:2 33 %, bei 1:1 50 %.",
   null
  ],
  [
   "Drawdown",
   "Rückgang vom Kontohöchststand. Bei 30 % Trefferquote sind 8 bis 10 Verluste in Folge völlig normal. Mit 1 % Risiko sind das rund 10 %, mit 10 % Risiko wäre das Konto fast halbiert.",
   null
  ],
  [
   "Erholung nach Verlust",
   "Verluste wiegen schwerer als Gewinne: Nach −10 % brauchst du +11 %, nach −50 % schon +100 %, um wieder bei null zu sein.",
   null
  ],
  [
   "Psychologie nach Verlusten",
   "Kein Revenge-Trading: nach Erreichen des Tageslimits Schluss. Nach einer Verlustserie Positionsgröße nicht erhöhen, sondern Regeln prüfen.",
   null
  ],
  [
   "Zinseszinseffekt",
   "Wird der Gewinn wieder eingesetzt, wächst das Risiko pro Trade mit, weil 1 % von einem größeren Konto mehr Geld ist. So entsteht exponentielles Wachstum. Das funktioniert aber in beide Richtungen und setzt voraus, dass deine Strategie wirklich einen positiven Erwartungswert hat.",
   null
  ],
  [
   "Tagesstopp-Regeln",
   "Schluss für heute bei: Tageslimit erreicht ODER drei Verlusttrades in Folge ODER die Hälfte des Tagesgewinns wieder abgegeben.",
   null
  ],
  [
   "Teilgewinne",
   "Gewinne in Stufen sichern, z. B. 50/50 (halbe Position am Ziel, Rest mit Trailing Stop) oder 30/30/40 (Range-Mitte, Gegenseite, Rest laufen lassen). Nach dem ersten Ziel Stop auf Break-even.",
   null
  ],
  [
   "Trailing nach Struktur",
   "Den Stop erst nachziehen, wenn sich ein neues bestätigtes höheres Tief (Long) bzw. tieferes Hoch (Short) gebildet hat. Nicht bei jedem kleinen Rücklauf im 1- oder 5-Minuten-Chart.",
   null
  ],
  [
   "Risiko ist nicht Einsatz",
   "Die 1-%-Regel bezieht sich auf den möglichen Verlust bis zum Stop, nicht auf die Margin. Mit 30 $ Margin und 10× Hebel bewegst du 300 $. Liegt der Stop 2 % entfernt, riskierst du 6 $.",
   null
  ],
  [
   "Prozess vor Profit",
   "Nach jedem Trade bewerten, ob er regelkonform war, nicht nur, ob er Gewinn gebracht hat. Ein Regelbruch mit Gewinn ist ein schlechter Trade.",
   null
  ]
 ],
 "quiz": [
  [
   "Konto 3.000 $, 1 % Risiko: maximaler Verlust?",
   [
    "3 $",
    "30 $",
    "300 $"
   ],
   1
  ],
  [
   "Risiko 30 $, Stop 1,5 $ entfernt: Stückzahl?",
   [
    "20",
    "45",
    "200"
   ],
   0
  ],
  [
   "CRV 1:3, Trefferquote 30 %: langfristig …",
   [
    "Verlust",
    "leicht im Plus",
    "immer Null"
   ],
   1
  ],
  [
   "Break-even-Trefferquote bei CRV 1:3?",
   [
    "25 %",
    "33 %",
    "50 %"
   ],
   0
  ],
  [
   "Nach −50 % brauchst du wie viel Gewinn bis null?",
   [
    "50 %",
    "75 %",
    "100 %"
   ],
   2
  ],
  [
   "Wohin gehört der Stop?",
   [
    "Immer 2 % unter Einstieg",
    "Wo die Trade-Idee widerlegt ist",
    "Gar nicht"
   ],
   1
  ],
  [
   "Erwartungswert bei 30 % Treffer, CRV 1:3?",
   [
    "−0,2R",
    "0R",
    "+0,2R"
   ],
   2
  ],
  [
   "Bezieht sich die 1-%-Regel auf die Margin?",
   [
    "Ja",
    "Nein, auf den Verlust bis zum Stop",
    "Nur bei Spot"
   ],
   1
  ],
  [
   "Wann wird der Stop nachgezogen?",
   [
    "Bei jeder Kerze",
    "Nach einem neuen bestätigten Struktur-Tief bzw. -Hoch",
    "Nie"
   ],
   1
  ],
  [
   "Drei Verlusttrades in Folge. Was sagt die Tagesstopp-Regel?",
   [
    "Position verdoppeln",
    "Für heute aufhören",
    "Hebel erhöhen"
   ],
   1
  ]
 ]
});

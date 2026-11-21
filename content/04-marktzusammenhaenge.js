// Kapitel: Marktzusammenhänge
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Marktzusammenhänge", {
 "level": 3,
 "intro": "Hier verknüpfst du Kurs, Open Interest, CVD und Funding, um zu verstehen, WER den Markt gerade bewegt.",
 "cards": [
  [
   "Kurs ↑ + OI ↑",
   "Neue Positionen öffnen den Anstieg, meist neue Longs. Trend wird mit frischem Geld getragen, aber Hebel baut sich auf.",
   null
  ],
  [
   "Kurs ↑ + OI ↓",
   "Short Squeeze / Short Covering: Shorts schließen. Anstieg oft kurzlebig, wenn keine Spot-Nachfrage folgt.",
   null
  ],
  [
   "Kurs ↓ + OI ↑",
   "Neue Shorts öffnen. Aggressiver Verkaufsdruck, Gefahr eines späteren Short Squeezes.",
   null
  ],
  [
   "Kurs ↓ + OI ↓",
   "Longs schließen oder werden liquidiert (Long-Flush). Häufig Bereinigung vor einer Erholung.",
   null
  ],
  [
   "Spot kauft",
   "Spot-CVD steigt: echte Nachfrage, Coins werden aus dem Markt genommen. Gilt als gesündester Antrieb.",
   null
  ],
  [
   "Futures kaufen",
   "Perp-CVD und OI steigen: Hebel-Longs. Bewegung kann schnell kippen, wenn Spot nicht mitzieht.",
   null
  ],
  [
   "Futures verkaufen",
   "Perp-CVD fällt, OI steigt: neue Shorts. Hält Spot dagegen (Spot-CVD steigt), droht ein Short Squeeze.",
   null
  ],
  [
   "Divergenz Spot vs. Perp",
   "Kurs steigt nur durch Perps, Spot-CVD fällt: schwache Rally. Spot kauft, Perps shorten: oft starke Basis für Anstieg.",
   null
  ],
  [
   "Funding stark positiv",
   "Ab etwa +0,03 % bis +0,05 % je 8 Stunden gilt die Long-Seite als überfüllt; Longs zahlen viel. Risiko eines Long-Flushes nach unten. +0,01 % ist dagegen der normale Grundwert.",
   null
  ],
  [
   "Funding stark negativ",
   "Deutlich unter 0 (z. B. unter −0,03 %): Markt einseitig short. Risiko eines Short Squeezes nach oben.",
   null
  ],
  [
   "Liquidationen",
   "Große Liquidationswellen beschleunigen Bewegungen und markieren oft lokale Hochs oder Tiefs.",
   null
  ],
  [
   "Short Squeeze",
   "Viele Shorts im Markt, der Kurs steigt: Shorts werden ausgestoppt oder liquidiert und müssen dafür kaufen. Das treibt den Kurs weiter hoch. Gejagt werden dabei die Shorts, nicht die Longs.",
   null
  ],
  [
   "Long Squeeze / Long-Flush",
   "Spiegelbild: Viele gehebelte Longs, der Kurs fällt, Liquidationen erzwingen Verkäufe und beschleunigen den Abverkauf.",
   null
  ],
  [
   "Wann ein Squeeze endet",
   "OI fällt während der Bewegung (die Gegenseite ist raus), Funding läuft Richtung neutral, oben/unten liegen keine weiteren Liquidations-Cluster, lange Dochte und kleine Kerzen. Dann Gewinne sichern.",
   null
  ],
  [
   "Heatmap richtig lesen",
   "Liquidations-Cluster wirken oft wie ein Magnet. Die Heatmap ist aber eine Schätzung und je Börse verschieden. Sie liefert ein mögliches Ziel, keinen Einstieg. Den Einstieg bestimmt die Struktur (Sweep, Reclaim, Retest).",
   null
  ],
  [
   "Spot-CVD vs. Perp-CVD",
   "Steigt der Kurs und der Spot-CVD steigt mit, steht echte Nachfrage dahinter. Steigt nur der Perp-CVD, ist die Bewegung gehebelt und kippt leichter.",
   null
  ],
  [
   "CVD steigt + OI fällt + Kurs steigt",
   "Typisch für Short-Covering mit aggressiven Käufern: Shorts schließen, Käufer greifen mit Market-Orders zu.",
   null
  ]
 ],
 "quiz": [
  [
   "Kurs steigt, OI fällt. Was passiert wahrscheinlich?",
   [
    "Neue Longs",
    "Short Covering",
    "Neue Shorts"
   ],
   1
  ],
  [
   "Kurs fällt, OI steigt. Das deutet auf …",
   [
    "neue Shorts",
    "Long-Liquidationen",
    "Spot-Käufe"
   ],
   0
  ],
  [
   "Welcher Antrieb gilt als am gesündesten?",
   [
    "Hebel-Longs",
    "Spot-Käufe",
    "Negative Funding"
   ],
   1
  ],
  [
   "Funding stark positiv bedeutet Risiko für …",
   [
    "Short Squeeze",
    "Long-Flush",
    "Nichts"
   ],
   1
  ],
  [
   "Kurs steigt, Spot-CVD fällt, Perp-CVD steigt. Rally ist eher …",
   [
    "stark",
    "schwach",
    "neutral"
   ],
   1
  ],
  [
   "Kurs fällt, OI fällt deutlich. Das ist typisch für …",
   [
    "neue Shorts",
    "Long-Flush",
    "Spot-Nachfrage"
   ],
   1
  ],
  [
   "Wer wird bei einem Short Squeeze ausgestoppt?",
   [
    "Die Longs",
    "Die Shorts",
    "Spot-Käufer"
   ],
   1
  ],
  [
   "Was liefert die Liquidation Heatmap?",
   [
    "Ein mögliches Ziel",
    "Den exakten Einstieg",
    "Echte Positionsdaten aller Börsen"
   ],
   0
  ],
  [
   "Kurs steigt, OI fällt während der Bewegung. Das spricht dafür, dass …",
   [
    "der Squeeze ausläuft",
    "neue Longs massiv einsteigen",
    "die Funding steigt"
   ],
   0
  ],
  [
   "Kurs steigt, aber nur der Perp-CVD steigt. Die Bewegung ist eher …",
   [
    "tragfähig",
    "gehebelt und fragil",
    "von Spot-Käufern getragen"
   ],
   1
  ]
 ]
});

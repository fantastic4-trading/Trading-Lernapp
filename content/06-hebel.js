// Kapitel: Hebel
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["Antwort A", "Antwort B", "Antwort C"], Index der richtigen Antwort (0 = A)]
addKapitel("Hebel", {
 "level": 2,
 "intro": "Hebel vergrößert die Position, nicht das Können.",
 "cards": [
  [
   "Hebel",
   "Mit Margin eine größere Position steuern, z. B. 10×.",
   null
  ],
  [
   "Margin",
   "Hinterlegte Sicherheit für eine Hebelposition.",
   null
  ],
  [
   "Beidseitig",
   "Gewinne und Verluste werden vervielfacht.",
   null
  ],
  [
   "Liquidationspreis",
   "Bei 10× reicht grob eine Gegenbewegung von etwa 10 %, um die Margin zu verlieren.",
   null
  ],
  [
   "Isoliert vs. Cross",
   "Isoliert: nur die Margin dieser Position ist gefährdet. Cross: das ganze Konto haftet.",
   null
  ]
 ],
 "quiz": [
  [
   "10× Hebel, Kurs -5 %: Verlust auf Margin?",
   [
    "5 %",
    "50 %",
    "100 %"
   ],
   1
  ],
  [
   "Welcher Margin-Modus schützt das restliche Konto?",
   [
    "Cross",
    "Isoliert",
    "Beide"
   ],
   1
  ],
  [
   "Bei 10× droht Liquidation ungefähr bei …",
   [
    "1 %",
    "10 %",
    "50 %"
   ],
   1
  ]
 ]
});

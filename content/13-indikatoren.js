// Kapitel: Indikatoren
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Indikatoren", {
 "level": 1,
 "intro": "Indikatoren berechnen sich aus Kurs und Volumen der Vergangenheit. Sie helfen beim Einordnen, aber ein Indikator allein ist nie ein Einstiegssignal. Er liefert höchstens einen zusätzlichen Grund an einem Level, an dem ohnehin ein Setup vorliegt.",
 "cards": [
  [
   "RSI (Relative Strength Index)",
   "Misst die Stärke der Bewegung von 0 bis 100. Über 70 gilt als überkauft, unter 30 als überverkauft. Achtung: In starken Trends bleibt der RSI lange überkauft oder überverkauft, das ist kein Umkehrsignal.",
   null
  ],
  [
   "RSI-Divergenz",
   "Kurs macht ein höheres Hoch, der RSI aber ein tieferes: Die Kraft lässt nach. Nur ein Warnhinweis, wirksam erst zusammen mit Level und Struktur.",
   null
  ],
  [
   "Gleitende Durchschnitte (EMA/SMA)",
   "Durchschnittskurs der letzten Perioden, z. B. EMA 20, 50, 200. Kurs über dem EMA 200: übergeordnet Aufwärtstrend. Gut zur Trendbestimmung, nicht als Einstieg allein.",
   null
  ],
  [
   "VWAP",
   "Volumengewichteter Durchschnittspreis des Tages. Viele institutionelle Händler orientieren sich daran. Kurs über VWAP: Käufer im Vorteil.",
   null
  ],
  [
   "MACD",
   "Zeigt Trend und Momentum über zwei gleitende Durchschnitte. Kreuzungen und Divergenzen liefern Hinweise, reagieren aber verzögert.",
   null
  ],
  [
   "Bollinger-Bänder",
   "Band um einen Durchschnitt, das mit der Volatilität breiter oder enger wird. Enge Bänder (Squeeze) kündigen oft eine starke Bewegung an, sagen aber nicht die Richtung.",
   null
  ],
  [
   "ATR (Average True Range)",
   "Durchschnittliche Schwankungsbreite. Fortgeschrittene nutzen sie, um den Stop sinnvoll weit zu setzen.",
   null
  ],
  [
   "Goldene Regel",
   "Weniger ist mehr: höchstens zwei bis drei Indikatoren. Erst Struktur und Level, dann der Indikator als Bestätigung, niemals umgekehrt.",
   null
  ],
  [
   "ADX",
   "Misst nur die Stärke eines Trends, nicht die Richtung (0–100). Über etwa 25 gilt ein Trend als ausgeprägt, darunter eher Seitwärtsphase.",
   null
  ],
  [
   "Stochastik",
   "Oszillator wie der RSI, eher für Seitwärtsphasen. Über 80 überkauft, unter 20 überverkauft. In Trends ebenso trügerisch wie der RSI.",
   null
  ],
  [
   "Supertrend",
   "Linie, die je nach Trend über oder unter dem Kurs liegt und dabei die ATR nutzt. Einfacher Trendfilter für Anfänger, springt in Seitwärtsphasen aber häufig um.",
   null
  ],
  [
   "Squeeze Momentum",
   "Zeigt Phasen sehr geringer Volatilität (Squeeze), aus denen oft starke Bewegungen entstehen, und das Momentum danach. Die Richtung muss die Struktur liefern.",
   null
  ],
  [
   "Trend- oder Seitwärtsindikator?",
   "Trendphasen: gleitende Durchschnitte, MACD, Supertrend. Seitwärtsphasen: RSI, Stochastik, Bollinger-Bänder. Wer den falschen Indikator zur Marktphase nutzt, bekommt Fehlsignale.",
   null
  ],
  [
   "Perioden, nicht Tage",
   "RSI 14 rechnet mit 14 Kerzen der gewählten Zeiteinheit. Im 15-Minuten-Chart sind das 3,5 Stunden, nicht 14 Tage.",
   null
  ]
 ],
 "quiz": [
  [
   "RSI über 70 bedeutet …",
   [
    "sofort shorten",
    "überkauft, aber kein Signal allein",
    "Trend vorbei"
   ],
   1
  ],
  [
   "Ist ein Indikator allein ein Einstiegsgrund?",
   [
    "Ja",
    "Nein",
    "Nur der RSI"
   ],
   1
  ],
  [
   "Kurs über dem EMA 200 deutet auf …",
   [
    "übergeordneten Aufwärtstrend",
    "Abwärtstrend",
    "Range"
   ],
   0
  ],
  [
   "Was kündigen enge Bollinger-Bänder an?",
   [
    "Die Richtung",
    "Eine kommende starke Bewegung",
    "Nichts"
   ],
   1
  ],
  [
   "Wofür nutzt man die ATR?",
   [
    "Stop-Weite",
    "Kerzenfarbe",
    "News-Termine"
   ],
   0
  ],
  [
   "Was misst der ADX?",
   [
    "Trendrichtung",
    "Trendstärke",
    "Volumen"
   ],
   1
  ],
  [
   "RSI 14 im 1h-Chart rechnet mit …",
   [
    "14 Tagen",
    "14 Stunden-Kerzen",
    "14 Minuten"
   ],
   1
  ],
  [
   "Welcher Indikator passt eher zu Seitwärtsphasen?",
   [
    "Stochastik",
    "MACD",
    "Supertrend"
   ],
   0
  ]
 ]
});

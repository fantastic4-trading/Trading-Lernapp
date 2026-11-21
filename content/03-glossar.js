// Kapitel: Glossar
// Karte: ["Titel", "Erklärung", "Grafik-Schlüssel oder null"]
// Quiz:  ["Frage", ["A", "B", "C"], Index der richtigen Antwort (0 = A)]
addKapitel("Glossar", {
 "level": 1,
 "intro": "Die wichtigsten Begriffe und Abkürzungen, besonders für Krypto-Futures.",
 "cards": [
  [
   "Spot",
   "Direkter Kauf des echten Coins. Kein Hebel, kein Short. Spot-Käufe sind echte Nachfrage.",
   null
  ],
  [
   "Futures / Perpetuals (Perps)",
   "Verträge auf den Kurs, ohne den Coin zu besitzen. Long und Short, mit Hebel. Perps haben kein Ablaufdatum.",
   null
  ],
  [
   "Open Interest (OI)",
   "Summe aller offenen Futures-Positionen. Steigt bei neuen Positionen, fällt, wenn Positionen geschlossen oder liquidiert werden.",
   null
  ],
  [
   "CVD (Cumulative Volume Delta)",
   "Laufende Summe aus Market-Käufen minus Market-Verkäufen. Zeigt, ob aggressive Käufer oder Verkäufer dominieren.",
   null
  ],
  [
   "Funding Rate",
   "Zahlung zwischen Long- und Short-Positionen bei Perpetual Futures, meist alle 8 Stunden (bei Binance/Bybit 00, 08, 16 Uhr UTC = 01, 09, 17 Uhr MEZ, im Sommer 02, 10, 18 Uhr). Spot-Käufer zahlen nichts. Der Grundwert liegt bei vielen Börsen bei +0,01 % je 8 Stunden, das ist also normal und noch kein Zeichen für einen überfüllten Markt. Positiv: Longs zahlen Shorts. Negativ: Shorts zahlen Longs.",
   null
  ],
  [
   "Liquidation",
   "Zwangsschließung einer Hebelposition, wenn die Margin nicht mehr reicht.",
   null
  ],
  [
   "Liquidity / Liquiditätszonen",
   "Bereiche mit vielen Stops und Liquidationen, oft über Hochs und unter Tiefs. Der Kurs wird davon häufig angezogen.",
   null
  ],
  [
   "Fair Value Gap (FVG)",
   "Lücke zwischen Docht von Kerze 1 und Docht von Kerze 3 bei einer starken Bewegung. Wird oft später wieder angelaufen.",
   null
  ],
  [
   "Fibonacci (Fib)",
   "Retracement-Level (0,382 / 0,5 / 0,618 / 0,786) für mögliche Rücksetzer-Ziele.",
   null
  ],
  [
   "Long / Short",
   "Long: auf steigende Kurse. Short: auf fallende Kurse.",
   null
  ],
  [
   "Market / Limit / Stop-Loss / Take-Profit",
   "Market: sofort. Limit: zum Wunschpreis. SL: Verlust begrenzen. TP: Gewinn sichern.",
   null
  ],
  [
   "Maker / Taker",
   "Maker stellt eine Limit-Order ins Orderbuch (meist günstiger). Taker nimmt Liquidität per Market-Order.",
   null
  ],
  [
   "Slippage",
   "Differenz zwischen erwartetem und tatsächlichem Ausführungspreis.",
   null
  ],
  [
   "Volumen",
   "Gehandelte Menge in einem Zeitraum. Bestätigt Bewegungen.",
   null
  ],
  [
   "R (Risikoeinheit)",
   "1R = der Betrag, den du verlierst, wenn der Stop erreicht wird. Ein Gewinn von 3R ist also das Dreifache deines Risikos. So lassen sich Trades unabhängig von der Kontogröße vergleichen.",
   null
  ],
  [
   "Win Rate / Profit-Faktor",
   "Win Rate = Anteil der Gewinntrades. Profit-Faktor = Summe aller Gewinne ÷ Summe aller Verluste. Über 1 verdient die Strategie, unter 1 verliert sie. Erst ab etwa 1,3 und vielen Trades belastbar.",
   null
  ],
  [
   "Delta",
   "Differenz aus aggressiven Käufen und Verkäufen (Market-Orders) innerhalb einer Kerze. Der CVD ist die laufende Summe dieser Deltas.",
   null
  ],
  [
   "Liquidation Heatmap",
   "Grafik (z. B. bei Coinglass), die schätzt, wo viele Hebelpositionen liquidiert würden. Es ist ein Modell aus angenommenen Hebeln, keine echte Positionsliste.",
   null
  ],
  [
   "CME-Gap",
   "Krypto handelt rund um die Uhr, die Bitcoin-Futures an der CME aber nicht am Wochenende. Dadurch entstehen dort Kurslücken, die viele Trader als mögliche Ziele beobachten.",
   null
  ],
  [
   "Abkürzungen Teil 1",
   "ROI = Return on Investment, PnL = Gewinn/Verlust, BE = Break-even, TSL = Trailing Stop, TF = Timeframe, HTF/LTF = höherer/niedrigerer Timeframe, ATH/ATL = Allzeithoch/-tief, MC = Marktkapitalisierung.",
   null
  ],
  [
   "Abkürzungen Teil 2",
   "HH/HL/LH/LL = Higher High/Higher Low/Lower High/Lower Low, POI = Point of Interest, OTE = Optimal Trade Entry, CE = Mitte eines FVG, IB = Initial Balance (erste Spanne einer Session), FOMC = Zinssitzung der Fed.",
   null
  ],
  [
   "Doppeldeutige Kürzel",
   "OB heißt meist Order Block (in Telegram manchmal Orderbuch). FR heißt bei Krypto meist Funding Rate, nicht Federal Reserve (die heißt Fed). Im Zweifel nachfragen.",
   null
  ],
  [
   "Key-Level-Kürzel",
   "Aufbau: c = current, p = previous, d/w/m = Tag/Woche/Monat. Beispiele: pdHigh = Vortageshoch, pwLow = Vorwochentief, pdVAH = Value Area High des Vortags, pdPOC = POC des Vortags.",
   null
  ]
 ],
 "quiz": [
  [
   "Was misst Open Interest?",
   [
    "Gehandeltes Volumen",
    "Offene Futures-Positionen",
    "Spot-Käufe"
   ],
   1
  ],
  [
   "Positive Funding Rate heißt …",
   [
    "Shorts zahlen Longs",
    "Longs zahlen Shorts",
    "Keine Zahlung"
   ],
   1
  ],
  [
   "CVD steigt, wenn …",
   [
    "mehr Market-Käufe als -Verkäufe",
    "mehr Limit-Orders",
    "OI fällt"
   ],
   0
  ],
  [
   "Kann man im Spot shorten?",
   [
    "Ja, mit Hebel",
    "Nein",
    "Nur am Wochenende"
   ],
   1
  ],
  [
   "Wo liegen häufig Liquiditätszonen?",
   [
    "Über Hochs und unter Tiefs",
    "In der Kerzenmitte",
    "Nur bei runden Zahlen"
   ],
   0
  ],
  [
   "Funding +0,01 % je 8 Stunden bedeutet bei den meisten Börsen …",
   [
    "einen extrem überfüllten Long-Markt",
    "den normalen Grundwert",
    "dass Shorts zahlen"
   ],
   1
  ],
  [
   "Zahlen Spot-Käufer Funding?",
   [
    "Ja, alle 8 Stunden",
    "Nein, nur Perp-Positionen",
    "Nur am Wochenende"
   ],
   1
  ],
  [
   "Profit-Faktor 0,8 bedeutet …",
   [
    "die Strategie verliert",
    "80 % Trefferquote",
    "die Strategie gewinnt"
   ],
   0
  ],
  [
   "Was bedeutet pwLow?",
   [
    "Tief der Vorwoche",
    "Wochentief aktuell",
    "Tief des Vortags"
   ],
   0
  ],
  [
   "FR heißt im Krypto-Chat meist …",
   [
    "Federal Reserve",
    "Funding Rate",
    "Fair Range"
   ],
   1
  ]
 ]
});

# Trading-Grundlagen Lern-App

Lernkarten, Quiz, Suche und Rechner (Risiko, CRV-Simulation, Zinseszins, DCA) zu Trading-Grundlagen.
Nur zu Lernzwecken, keine Anlageberatung.

## Funktionen
- Drei Level (Einsteiger, Fortgeschritten, Profi), Freischaltung ab 80 % in allen Quiz des vorherigen Levels
- Lernkarten, Quiz, Suche
- Chart-Training mit zufällig erzeugten Charts
- Trading-Journal mit Trefferquote, Erwartungswert, Kontokurve und CSV-Export für Excel
- Trade-Checkliste, Rechner (Risiko, CRV, Zinseszins, DCA, Gebühren)
- 17 Kapitel, u. a. Chartformationen, Orderflow, Gebühren & Backtesting, Top-Down-Analyse
- Fortschritt und Journal werden lokal im Browser gespeichert

Level eines Kapitels: Feld `"level": 1|2|3` in der Datei unter `content/`.

## Starten
`index.html` im Browser öffnen (funktioniert auch offline) oder über GitHub Pages veröffentlichen:
Settings → Pages → Branch `main`, Ordner `/ (root)`.

## Aufbau
- `index.html` Einstieg
- `css/style.css` Design
- `js/kern.js` Datenspeicher, `js/grafiken.js` Kerzen- und Chartgrafiken, `js/app.js` Logik und Rechner
- `content/` ein Kapitel pro Datei
- `assets/images/` Bilder, `docs/` Lernskript, `material/` Quellmaterial

## Neues Kapitel hinzufügen
1. Eine Datei in `content/` kopieren, z. B. als `08-neues-thema.js`, und Inhalt anpassen.
2. In `index.html` eine Zeile `<script src="content/08-neues-thema.js"></script>` vor `js/app.js` einfügen.

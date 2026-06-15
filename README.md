# Lower Third Studio

**Lower Third Studio** ist eine statische Webanwendung zur Erstellung, Vorschau und Ausspielung animierter Lower-Third-Banner für Streams, Videos und Live-Produktionen. Die App läuft vollständig lokal im Browser und benötigt kein Backend, keine Datenbank und kein Build-System.

## Features

* Erstellung und Verwaltung mehrerer Lower Thirds
* Live-Vorschau direkt im Studio
* Separater Player für Streaming-Software wie OBS Studio
* Kopierbarer Player-Link mit eingebetteter Konfiguration
* Direkte Trigger-Links für einzelne Lower Thirds
* Zufällige automatische Wiedergabe mit Gewichtung
* Einstellbare Anzeige- und Pausenzeiten
* Verschiedene Layout-Stile, Animationen und Positionen
* Plattform-Auswahl für Instagram, YouTube, Twitch, TikTok, Web und Podcast
* Plattform-Icons oder eigene Upload-Icons
* Anpassbare Farben, Verläufe, Transparenzen und Schatten
* Typografie-Einstellungen für Titel und Handle
* Rahmenoptionen inklusive Animationen
* Drei Interface-Themes: Studio Grün, Midnight Blau und Ember Rot
* Speicherung der Konfiguration im Browser über `localStorage` und über lokale Konfigurationsdateien

## Projektstruktur

```text
lower-thirds-studio/
├── index.html
├── player.html
├── app.js
├── player.js
├── styles.css
└── assets/
```

## Schnellstart

1. Projekt herunterladen oder ZIP-Datei entpacken.
2. `index.html` im Browser öffnen.
3. Lower Thirds bearbeiten.
4. Player-Link kopieren.
5. Link in OBS oder einer anderen Streaming-Software als Browser-Quelle verwenden.

## Lokaler Webserver

```bash
python -m http.server 8000
```

Danach öffnen:

```text
http://localhost:8000/index.html
```

## Verwendung mit OBS Studio

1. Neue **Browser-Quelle** erstellen.
2. Den kopierten Player-Link einfügen.
3. Größe zum Beispiel auf `1920 x 1080` setzen.
4. Quelle über andere Szenenelemente legen.

## Lizenz

Copyright © 2026 bruunooh.

Die Anwendung ist für nicht-kommerzielle Nutzung unter einer Creative-Commons-Non-Commercial-Lizenz vorgesehen.

Lizenzangabe:

```text
CC BY-NC 4.0 – Namensnennung, nicht kommerziell
```

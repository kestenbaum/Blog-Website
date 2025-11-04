Blog-Website
Überblick
Dies ist ein modernes Blog-Projekt, das auf dem Node.js-Stack basiert. Es nutzt TypeScript für die serverseitige Logik und Express.js als Web-Framework. Das Frontend-Rendering erfolgt durch den Templating-Engine Nunjucks. Die Anwendung ist modular in einer Controller-Service-Architektur aufgebaut.

### Technologien

Um das Projekt zu entwickeln und auszuführen, werden folgende Schlüsseltechnologien verwendet:
* **Backend & Entwicklung:**
    * Node.js
    * TypeScript
    * Express.js (Web-Framework)
* **Templating:**
    * Nunjucks (Für das Frontend-Rendering)
* **Tools & Utilities:**
    * Nodemon (Automatisches Neustarten des Servers)
    * ts-node (Direkte Ausführung von TypeScript)
    * dotenv (Verwaltung von Umgebungsvariablen wie dem PORT)
    * cors (Cross-Origin Resource Sharing)

Installation und Setup
Folgen Sie diesen Schritten, um das Projekt lokal einzurichten und zu starten.

1. Abhängigkeiten installieren
Öffnen Sie Ihr Terminal im Hauptverzeichnis des Projekts und führen Sie den Befehl aus:

```Bash
npm install
```

2. Umgebungsvariablen (.env) einrichten
Erstellen Sie im Hauptverzeichnis eine Datei namens .env (diese Datei wird von Git ignoriert) und fügen Sie mindestens die folgende Variable hinzu, um den Server-Port zu definieren:

```Bash
# .env
PORT=4000
```

3. Entwicklungsserver starten
Verwenden Sie den dev-Skript-Befehl aus der package.json, um den Server zu starten. ts-node und nodemon werden dabei verwendet, um das Projekt live zu kompilieren und bei Dateiänderungen automatisch neu zu starten.

```Bash
npm run dev
```

Der Server wird unter dem Port gestartet, der in Ihrer .env Datei definiert wurde (standardmäßig 4000).
```Bash
http://localhost:4000
```

Projektstruktur und Architektur
Das Projekt folgt einer klaren, entkoppelten Struktur:

/src/app/controllers: Beinhaltet die Controller, die HTTP-Anfragen (Request/Response) verarbeiten und die Daten für die Templates bereitstellen.

/src/services: Beinhaltet die Datenverarbeitungslogik (dataProcessor.ts).

/src/app/routes: Definiert die Routen und ordnet Pfade (/, /post/:slug) den Templates und Controllern zu.

/src/view: Enthält alle Nunjucks-Templates (.html):

pages/: Die Hauptseiten (index.html, post.html, etc.).

components/: Wiederverwendbare Komponenten (Header, Footer,  etc.).

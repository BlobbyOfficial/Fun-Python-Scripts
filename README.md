# Fun Python Scripts

A collection of simple, fun Python scripts presented in a modern, easy-to-browse web interface. Download, view, and learn from the source code of each script.

## Features

- Browse a curated list of Python scripts
- Download scripts directly
- View source code in the browser
- Responsive, clean design

## Folder Structure

```
site/
  ├── css/
  ├── js/
  ├── public/
  ├── scripts/
  ├── index.html
  ├── README.md
  └── LICENCE.md
```

## Entry Points

- **Static Mode:** Open `index.html` in your browser for a static experience (no backend required).
- **Dynamic/Server Mode:** Run `server.js` with Node.js for API endpoints and dynamic script listing (recommended for full functionality).

## Getting Started

### Static Hosting

Just open `index.html` in your browser, or serve the folder with any static file server.

### Node.js Server (Recommended)

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```
3. Visit [http://localhost:3000](http://localhost:3000)

## Running Python Scripts

Each script in `scripts/` is standalone and can be run directly with Python 3.x. Example:

```pwsh
cd scripts/calculator
python calculator.py
```

> **Note:** Some scripts may require additional Python packages. Add them to `requirements.txt` as needed.

## Adding Your Own Scripts

1. Add your script in a new folder under `scripts/`.
2. Update the script metadata in `js/script-loader.js` (for static mode) or your backend as needed.

## License

See [LICENCE.md](LICENCE.md) for details.

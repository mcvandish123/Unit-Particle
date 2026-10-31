# Unit Converter

A simple browser-based unit converter built with plain HTML, CSS, and JavaScript. It converts **length**, **weight**, and **temperature** with no installs, frameworks, or build steps.

## Features

| Page | File | Supported units |
| --- | --- | --- |
| Length | `length.html` | `mm`, `cm`, `m`, `km` |
| Weight | `weight.html` | `mg`, `g`, `kg`, `oz` |
| Temperature | `Temperature.html` | `C` (Celsius), `F` (Fahrenheit), `K` (Kelvin) |

## How to use it

1. Pick a converter from the tabs at the top: **Length**, **Weight**, or **Temperature**.
2. In the first box, type the number you want to convert (for example `25`).
3. In the second box, type the unit you're converting **from** (for example `cm`).
4. In the third box, type the unit you're converting **to** (for example `m`).
5. Click **Convert**. The result shows up, for example `25 cm = 0.25 m`.
6. Click **Reset** to clear the form and do another conversion.

Unit names are not case-sensitive, and extra spaces are ignored, so `KG`, `kg`, and ` kg ` all work. If the number is empty or not a number, or a unit isn't on the list for that page, the result shows **Invalid Input**.

## How it works

All three pages share one stylesheet (`style.css`) and one script (`script.js`).

- **Choosing the converter:** every page has the same form, but each Convert button has its own class (`button-length`, `button-weight`, or `button-temperature`). When `script.js` loads, it checks which button is on the page and picks the matching conversion function.
- **Length and weight:** these use lookup tables. Each table holds the multiplier from one unit to another, so `lengthConvert.cm.m` is `0.01`. The answer is `value × multiplier`. If a unit pair isn't in the table, the function returns `null`, and the page shows "Invalid Input".
- **Temperature:** temperature scales have offsets, not just multipliers, so a lookup table won't work. Instead the value is first converted **to Celsius** and then **from Celsius** to the target unit:
  - °F → °C: `(F − 32) × 5/9`
  - K → °C: `K − 273.15`
  - °C → °F: `C × 9/5 + 32`
  - °C → K: `C + 273.15`
- **Showing the result:** the form submit is stopped with `event.preventDefault()` so the page doesn't reload. The result is rounded to 6 significant digits with `toPrecision(6)`, which keeps very small numbers (like `mg → kg`) from being rounded down to `0`. Then the form is hidden and the result section is shown by toggling the `hidden` class. **Reset** does the opposite.

## Running it locally

You don't need to install anything. You only need a web browser.

### 1. Get the code

Clone the repository, or download it as a ZIP and extract it:

```bash
git clone <repository-url>
cd unitPart
```

### 2. Open it in a browser

Pick **one** of these options.

**Option A: Open the file directly (easiest)**

Double-click `length.html` in your file explorer, or open it from the terminal:

```bash
# macOS
open length.html

# Windows
start length.html

# Linux
xdg-open length.html
```

Use the tabs to switch to the Weight and Temperature pages.

**Option B: VS Code Live Server**

1. Install the **Live Server** extension in VS Code.
2. Open the project folder in VS Code.
3. Right-click `length.html` and choose **Open with Live Server**.
4. It opens at an address like `http://127.0.0.1:5500/length.html` and reloads by itself when you save a file.

**Option C: A simple local server**

If you have Python 3 installed, run this from the project folder:

```bash
python3 -m http.server 8000
```

Then go to <http://localhost:8000/length.html> in your browser. Press `Ctrl + C` in the terminal to stop the server.

> **Note:** The file name `Temperature.html` starts with a capital **T**. On case-sensitive systems (like Linux servers), the URL has to match exactly: `Temperature.html`, not `temperature.html`.

## Project structure

```
unitPart/
├── length.html        # Length converter page (start here)
├── weight.html        # Weight converter page
├── Temperature.html   # Temperature converter page
├── script.js          # Conversion logic and form handling
├── style.css          # Shared styles for all pages
└── testing/           # Scratch files for experiments
```

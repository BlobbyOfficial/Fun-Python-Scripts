// Improved: cleaner, more maintainable, auto-generates script cards, and escapes HTML for safety

const SCRIPTS = [
  {
    id: 0,
    title: "Matrix Rain",
    description: "Simulates green falling numbers like in The Matrix.",
    download: "scripts/matrix_rain/matrix.py",
    filename: "matrix.py",
    source: `import random, os, time, sys
try:
    cols = os.get_terminal_size().columns
except OSError:
    cols = 80
drops = [0] * cols
try:
    while True:
        line = []
        for i in range(cols):
            if random.random() > 0.98:
                drops[i] = 1
            if drops[i] > 0:
                line.append(str(random.randint(0, 9)))
                drops[i] += 1
                if drops[i] > random.randint(3, 15):
                    drops[i] = 0
            else:
                line.append(" ")
        print("".join(line))
        time.sleep(0.06)
except KeyboardInterrupt:
    sys.exit()`
  },
  {
    id: 1,
    title: "Number Guessing Game",
    description: "A simple game where you try to guess the random number between 1 and 100.",
    download: "scripts/number_guessing_game/guess.py",
    filename: "guess.py",
    source: `import random
n = random.randint(1,100)
print("Guess a number between 1 and 100")
tries = 0
while True:
    tries += 1
    try:
        g = int(input("> "))
    except ValueError:
        print("Enter an integer.")
        continue
    if g < n:
        print("Too low")
    elif g > n:
        print("Too high")
    else:
        print(f"Correct! {n} in {tries} tries.")
        break`
  }
];

// Escape HTML for safe code display
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m];
  });
}

function renderScripts() {
  const container = document.getElementById('scripts');
  if (!container) return;
  container.innerHTML = SCRIPTS.map(script => `
    <div class="script">
      <details>
        <summary>${script.title}</summary>
        <div class="details-content">
          <p>${script.description}</p>
          <a class="download-btn" href="${script.download}" download>Download ${script.filename}</a>
          <button id="btn-${script.id}" onclick="toggleSource('${script.id}')">View Source</button>
          <div id="src-${script.id}" style="display:none;"><pre>${escapeHTML(script.source)}</pre></div>
        </div>
      </details>
    </div>
  `).join('');
}

window.toggleSource = function(id) {
  const srcDiv = document.getElementById('src-' + id);
  const btn = document.getElementById('btn-' + id);
  if (!srcDiv || !btn) return;
  if (srcDiv.style.display === 'none') {
    srcDiv.style.display = 'block';
    btn.textContent = 'Hide Source';
  } else {
    srcDiv.style.display = 'none';
    btn.textContent = 'View Source';
  }
};

document.addEventListener('DOMContentLoaded', renderScripts);

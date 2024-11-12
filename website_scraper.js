// Function to get all unique visible text on the page
function getUniqueVisibleText() {
  let elements = document.body.querySelectorAll('*:not(script):not(style)');
  let uniqueTextSet = new Set();

  elements.forEach((element) => {
    // Check if the element is visible and has non-empty text content
    if (
      element.offsetParent !== null &&
      element.innerText &&
      element.innerText.trim()
    ) {
      let text = element.innerText.trim();
      uniqueTextSet.add(text); // Adds only unique text
    }
  });

  // Join all unique texts with a line break
  return Array.from(uniqueTextSet).join('\n\n');
}

// Function to download text as a .txt file
function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Execute functions
const textContent = getUniqueVisibleText();
downloadTextFile('page_text.txt', textContent);

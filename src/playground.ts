// Create a new line when Enter is pressed on editorContainer
const handleEnter = (e: Event, editorContainer: HTMLDivElement) => {
  e.preventDefault();

  const newLineDiv = createNewLineDiv(editorContainer);

  newLineDiv.focus();
};

// Delete new line if there is no text left on that line
// TODO: focus the before line & rearrange line numbers
const handleBackspace = (newLineDiv: HTMLDivElement) => {
  newLineDiv.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      const target = <HTMLDivElement>e.target;

      if (target.innerText.length <= 0) {
        target.remove();
      }
    }
  });
};

const getAllLines = () => {
  return document.querySelectorAll(".editor-text");
};

// Create new line and attach needed events
const createNewLineDiv = (editorContainer: HTMLDivElement): HTMLDivElement => {
  const newLineDiv = document.createElement("div");

  // Attach backspace event
  handleBackspace(newLineDiv);

  // Set the data-line-number according to line count of editor
  const lines = getAllLines().length;
  newLineDiv.dataset.lineNumber = String(lines + 1);

  newLineDiv.classList.add("editor-text");
  newLineDiv.contentEditable = "true";

  editorContainer.appendChild(newLineDiv);

  return newLineDiv;
};

export const initPlayground = () => {
  // Container of contenteditable divs
  const editorContainer: HTMLDivElement | null = document.querySelector(
    ".editor-text-container"
  );

  if (editorContainer) {
    createNewLineDiv(editorContainer);

    editorContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handleEnter(e, editorContainer);
      }
    });
  }
};

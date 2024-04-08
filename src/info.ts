type Info = {
  heading: String;
  content: String;
};

export const showInfo = (info: Info) => {
  // Maybe we need to delete any info already exists?
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");
  infoDiv.classList.add("show-info");

  // Holds the heading and close button
  const infoHeader = document.createElement("div");
  infoHeader.classList.add("info-header");

  const closeButton = createCloseButton(infoDiv);

  // Holds the heading
  const infoHeadingDiv = document.createElement("div");
  // Holds the content
  const infoContentP = document.createElement("p");

  // Apply animation to related elements
  appearByAnimation(info.heading, infoHeadingDiv, 50);
  appearByAnimation(info.content, infoContentP, 10);

  // Add heading and button to header
  infoHeader.appendChild(infoHeadingDiv);
  infoHeader.appendChild(closeButton);

  // Add header and content to info container
  infoDiv.appendChild(infoHeader);
  infoDiv.appendChild(infoContentP);

  document.body.append(infoDiv);
};

// A function to show text letter by letter
const appearByAnimation = (
  text: String,
  container: HTMLElement,
  speed: number
) => {
  // Create spans that contains letters
  Array.from(text).forEach((ch) => {
    const span = document.createElement("span");
    span.innerText = ch;
    span.classList.add("hidden");
    // Info content span does not do anything useful
    // Apart from preventing confusion with any other spans
    span.classList.add("info-content-span");

    container.appendChild(span);
  });

  const spans = container.querySelectorAll("span.info-content-span.hidden");
  let i = 0;

  // Remove hidden class from span by time
  const interval = setInterval(() => {
    if (i < spans.length) {
      spans[i].classList.remove("hidden");
      i += 1;
    } else {
      clearInterval(interval);
    }
  }, speed);
};

const createCloseButton = (infoDiv: HTMLDivElement): HTMLButtonElement => {
  const closeButton = document.createElement("button");

  closeButton.classList.add("close-info");
  closeButton.innerText = "✕";

  closeButton.addEventListener("click", () => {
    infoDiv.classList.remove("show-info");
    infoDiv.classList.add("hide-info");

    // We might remove div element from the DOM
  });

  return closeButton;
};

function getTextArea() {
  return document.getElementById("text-area");
}

function makeBigger() {
  const textArea = getTextArea();
  textArea.style.fontSize = "24pt";
}

function setFancy() {
  const textArea = getTextArea();
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

function setBoring() {
  const textArea = getTextArea();
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
}

function moo() {
  const textArea = getTextArea();
  let text = textArea.value.toUpperCase();

  const sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    const trimmed = sentences[i].trim();
    if (trimmed.length > 0) {
      sentences[i] = trimmed + "-MOO";
    } else {
      sentences[i] = trimmed;
    }
  }

  text = sentences.join(". ");
  textArea.value = text;
}

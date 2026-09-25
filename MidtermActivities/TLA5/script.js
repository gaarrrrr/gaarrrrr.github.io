function convertMarkdown() {
  let html = markdownInput.value;

  // Headings (longest hash sequence first so ### isn't half-matched by #)
  html = html.replace(/^ *### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^ *## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^ *# (.+)$/gm, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^ *> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Bold (must run before italic, or a lone * / _ from a pair would get
  // swallowed by the italic pattern first). Greedy (not lazy) so that
  // something like **bold *and italic*** grabs from the first ** to the
  // LAST ** on the line, leaving the inner *and italic* pair intact for
  // the italic pass below instead of mis-pairing with it.
  html = html.replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+)__/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Images (before links, since a link pattern would otherwise also
  // match the "[alt](src)" part of an image and drop the leading "!")
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Collapse the line breaks left over from the line-anchored
  // replacements above so consecutive block elements sit flush together
  html = html.replace(/\n/g, '');

  return html;
}

const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

const updateOutput = () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
};

markdownInput.addEventListener('input', updateOutput);
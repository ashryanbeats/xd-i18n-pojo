const { strings } = require("./strings.js");

async function mainCommand() {
  const dialog = createDialog();

  const result = await dialog.showModal();
  if (result === "reasonCanceled") return;

  console.log("Exited with OK!");

  return;
}

function createDialog() {
  document.body.innerHTML = `
    <style>
      form {
        width: 400px;
      }
    </style>
    <dialog id="dialog">
      <form method="dialog">
        <h1>${strings["en"].h1}</h1>
        <p>${strings["en"].p}</p>
        <footer>
          <button uxp-variant="primary" id="cancel-button">${
            strings["en"].cancelButton
          }</button>
          <button type="submit" uxp-variant="cta" id="ok-button">${
            strings["en"].okButton
          }</button>
        </footer>
      </form>
    </dialog>
  `;

  const cancelButton = document.querySelector("#cancel-button");
  cancelButton.addEventListener("click", e => dialog.close("reasonCanceled"));

  const dialog = document.querySelector("#dialog");
  dialog.addEventListener("close", e => dialog.remove());

  return dialog;
}

module.exports = {
  commands: {
    mainCommand
  }
};

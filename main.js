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
        <h1>Get me out of here</h1>
        <p>Handling 3 standard outcomes for a modal: OK, Cancel, and Escape.
        <footer>
          <button uxp-variant="primary" id="cancel-button">Cancel</button>
          <button type="submit" uxp-variant="cta" id="ok-button">OK</button>
        </footer>
      </form>
    </dialog>
  `;

  const cancelButton = document.querySelector("#cancel-button");
  cancelButton.addEventListener("click", e => dialog.close("reasonCanceled"));

  const dialog = document.querySelector("#dialog");
  return dialog;
}

module.exports = {
  commands: {
    mainCommand
  }
};

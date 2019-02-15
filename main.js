function mainCommand() {
  document.body.innerHTML = `
    <dialog>
      <form method="dialog">
        <footer>
          <button uxp-variant="primary" id="cancel-button">Cancel</button>
          <button type="submit" uxp-variant="cta" id="ok-button">OK</button>
        </footer>
      </form>
    </dialog>
  `;

  const dialog = document.querySelector("dialog");
  dialog.showModal();

  return;
}

module.exports = {
  commands: {
    mainCommand
  }
};

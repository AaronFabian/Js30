const control = document.querySelectorAll('.controls input');
function updateHandler() {
  const suffix = this.dataset.sizing;
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  //   console.log(suffix);
}

// control.addEventListener('input', updateHandler);
// control.addEventListener('change', updateHandler);
// control.addEventListener('mousemove', updateHandler);
// console.log(control);

// Sesi Coba"
control.forEach(input => {
  input.addEventListener('input', updateHandler);
});

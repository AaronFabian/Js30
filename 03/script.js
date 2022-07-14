const control = document.querySelector('input');
function updateHandler() {
  const suffix = this.dataset.sizing;
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  //   console.log(suffix);
}

control.addEventListener('change', updateHandler);
control.addEventListener('mousemove', updateHandler);
console.log(control);

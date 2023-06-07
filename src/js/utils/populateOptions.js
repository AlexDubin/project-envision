export default function populateOptions(options, selectEl) {
  options.forEach(option => {
    const optionEl = document.createElement('option');

    optionEl.textContent = option.name;
    optionEl.value = option.id;

    selectEl.appendChild(optionEl);
  });
}

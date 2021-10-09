function inputName() {
  const inputId = document.getElementById('input_id').value
  if (inputId !== '') {
    const url = window.location.href + `@${inputId}`
    console.log(url)
    location.href = url
  }
}

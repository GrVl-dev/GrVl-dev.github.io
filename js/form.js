(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      event.stopPropagation()

      form.classList.add('was-validated')

      if (!form.checkValidity()) return

      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.disabled = true
      submitBtn.textContent = 'Отправка...'

      try {
        const formData = new FormData(form)
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
        })
        const result = await response.json()

        if (result.success) {
          form.reset()
          form.classList.remove('was-validated')
          showAlert(form, 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.', 'success')
        } else {
          showAlert(form, 'Ошибка при отправке. Попробуйте ещё раз.', 'danger')
        }
      } catch {
        showAlert(form, 'Ошибка сети. Проверьте подключение к интернету.', 'danger')
      } finally {
        submitBtn.disabled = false
        submitBtn.textContent = originalText
      }
    }, false)
  })

  function showAlert(form, message, type) {
    const existing = form.querySelector('.form-alert')
    if (existing) existing.remove()

    const alert = document.createElement('div')
    alert.className = `alert alert-${type} form-alert mt-3`
    alert.setAttribute('role', 'alert')
    alert.textContent = message
    form.appendChild(alert)

    setTimeout(() => alert.remove(), 5000)
  }
})()

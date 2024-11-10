document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('translateButton')
    .addEventListener('click', function () {
      const issuedText = document.getElementById('issued')
      const surnameText = document.getElementById('surname')
      const nameText = document.getElementById('name')
      const patronymicText = document.getElementById('father')
      const genderText = document.getElementById('gender')
      const birthplaceText = document.getElementById('birthplace')

      if (issuedText.innerText === 'ОТДЕЛ УФМС РОССИИ') {
        issuedText.innerText = 'OTDEL UFMS ROSSII'
        surnameText.innerText = 'Esenin'
        nameText.innerText = 'Sergey'
        patronymicText.innerText = 'Aleksandrovich'
        genderText.innerText = 'Male'
        birthplaceText.innerText = 'Moscow'
      } else {
        issuedText.innerText = 'ОТДЕЛ УФМС РОССИИ'
        surnameText.innerText = 'Есенин'
        nameText.innerText = 'Сергей'
        patronymicText.innerText = 'Александрович'
        genderText.innerText = 'Муж'
        birthplaceText.innerText = 'Москва'
      }
    })

  document.getElementById('openScrin').addEventListener('click', function () {
    window.open('../images/scrin.png', '_blank')
  })
})

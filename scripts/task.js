document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('triangle-form')
  form.addEventListener('submit', checkTriangle)

  document
    .getElementById('checkButton')
    .addEventListener('click', checkTriangle)
  document.getElementById('sendButton').addEventListener('click', sendToGoogle)

  function checkTriangle(event) {
    event.preventDefault()

    const x = parseFloat(document.getElementById('x').value)
    const y = parseFloat(document.getElementById('y').value)
    const z = parseFloat(document.getElementById('z').value)
    const resultElement = document.getElementById('result')

    if (x <= 0 || y <= 0 || z <= 0) {
      document.getElementById('result').innerText =
        'Длины сторон должны быть положительными числами.'
      return
    }

    if (x + y > z && x + z > y && y + z > x) {
      const sides = [x, y, z].sort((a, b) => a - b)
      const isRightTriangle =
        Math.abs(
          Math.pow(sides[0], 2) + Math.pow(sides[1], 2) - Math.pow(sides[2], 2)
        ) < 1e-10

      resultElement.textContent = isRightTriangle
        ? 'Треугольник существует и является прямоугольным.'
        : 'Треугольник существует, но не является прямоугольным.'
    } else {
      resultElement.textContent =
        'Треугольник с такими сторонами не существует.'
    }
  }

  function sendToGoogle() {
    const x = parseFloat(document.getElementById('x').value)
    const y = parseFloat(document.getElementById('y').value)
    const z = parseFloat(document.getElementById('z').value)

    if (x === 0 || y === 0 || z === 0 || isNaN(x) || isNaN(y) || isNaN(z)) {
      alert('Ошибка: Убедитесь, что X, Y и Z корректны и не равны нулю.')
      return
    }

    const query = `https://www.google.com/search?q=Задача: Даны вещественные числа: X=${x}, Y=${y}, Z=${z}. Определить, существует ли треугольник с такими длинами сторон и, если существует, будет ли он прямоугольным.`
    window.open(query, '_blank')
  }
})

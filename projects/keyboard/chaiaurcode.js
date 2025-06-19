console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class="color">
  <table border="1">
  <thead>
    <tr>
      <th>key</th>
      <th>Keycode</th>
      <th>code</th>
      <th>ctrl key</th>
      <th>shiftkey</th>
      <th>altkey</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>${e.key === ' ' ? 'space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      <td>${e.ctrlKey}</td>
      <td>${e.shiftKey}</td>
      <td>${e.altKey}</td>
    </tr>
  </tbody>
</table>

  </div>`;
});

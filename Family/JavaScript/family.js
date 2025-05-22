document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('click', () => {
    alert(`You clicked on: ${member.textContent}`);
  });
});

function search() {
    var text = document.getElementById('searchInput').value.toLowerCase();
    const tbody = document.querySelector('.leaderboard tbody');
    const rows = tbody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const heroName = rows[i].querySelector('td:nth-child(2) p').innerText.toLowerCase();

        if (heroName.includes(text)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

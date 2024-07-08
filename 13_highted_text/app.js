function highlightText() {
    let input = document.getElementById('search').value;
    const p = document.getElementById('randomText');
    const text = p.textContent;
    console.log(input)
    // console.log(text)
    if (input) {
        const regex = new RegExp(`(${input})`, 'gi');
        const newText = text.replace(regex, '<span class="highlight">$1</span>');
        p.innerHTML = newText;
    } else {
        p.innerHTML = text;
    }
}
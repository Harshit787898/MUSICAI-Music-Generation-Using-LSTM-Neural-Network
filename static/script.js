function generateMelody() {
    const seed = document.getElementById('seed').value;
    const format = document.getElementById('format').value;

    fetch(`/generate-melody?seed=${seed}&format=${format}`)
        .then(response => response.json());
}



const selectElement = document.querySelector('#background-select');

// Add event listener
selectElement.addEventListener('change', handleBackgroundSelect);

function handleBackgroundSelect(event) {
    // Unpack data (will look like this):
    // {
    //   "url": "...",
    //   "theme": "..."
    // }
    const data = JSON.parse(event.target.value);

    // Change background image
    document.body.style.backgroundImage = `url(${data.url})`;

    // Change theme
    document.documentElement.setAttribute('data-theme', data.theme);
}

// simulate event to init with the default option
selectElement.dispatchEvent(new Event('change'));
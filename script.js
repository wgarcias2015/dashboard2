// Replace 'YOUR_API_KEY' with actual API keys from respective services

// Function to fetch BTC price
async function fetchBTCPrice() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const data = await response.json();
    document.getElementById('btc-price').innerText = `BTC: $${data.bpi.USD.rate}`;
}

// Function to fetch GOOGL price
async function fetchGOOGLPrice() {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=GOOGL&token=cq4rurpr01qhh2h6fmo0cq4rurpr01qhh2h6fmog`);
    const data = await response.json();
    document.getElementById('googl-price').innerText = `GOOGL: $${data.c}`;
}

// Function to fetch VGT price
async function fetchVGTPrice() {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=VGT&token=cq4rurpr01qhh2h6fmo0cq4rurpr01qhh2h6fmog`);
    const data = await response.json();
    document.getElementById('vgt-price').innerText = `VGT: $${data.c}`;
}


// Function to fetch SMH price
async function fetchSMHPrice() {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=SMH&token=cq4rurpr01qhh2h6fmo0cq4rurpr01qhh2h6fmog`);
    const data = await response.json();
    document.getElementById('smh-price').innerText = `SMH: $${data.c}`;
}

// Function to fetch current date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'medium' });
    document.getElementById('datetime').innerText = ` ${dateTimeString}`;
}



// Function to update all data
function updateData() {
    fetchBTCPrice();
    fetchGOOGLPrice();
    fetchSMHPrice();
    fetchVGTPrice();
    updateDateTime();
}

// Update data every minute
setInterval(updateData, 60000);

// Initial update
updateData();



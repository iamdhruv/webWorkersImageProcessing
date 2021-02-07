addEventListener('message', (e) => {
    const imgData = e.data;
    for (let x = 0; x < imgData.width; x++) {
        for (let y = 0; y < imgData.width; y++) {
            const index = (x + (y * imgData.width)) * 4;
            imgData.data[index + 3] = 127;
        }
    }
    postMessage(imgData);
});

// setInterval(() => {
//     postMessage('RETURN MESSAGE');
// }, 2000);
addEventListener('message', (e) => {
    const imgData = e.data;
    for (let x = 0; x < imgData.width; x++) {
        for (let y = 0; y < imgData.width; y++) {
            const index = (x + (y * imgData.width)) * 4;
            imgData.data[index + 3] = 127;
        }
    }
    postMessage(imgData, [imgData.data.buffer]);
});

// worker.postMessage(message, [transfer]);
// Transferable objects are instances of classes 
// like ArrayBuffer, MessagePort or ImageBitmap objects 
// that can be transferred. null is not an acceptable value for transfer.

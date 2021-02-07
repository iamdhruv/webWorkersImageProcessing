const worker = new Worker('worker.js');
worker.onmessage = function (e) {
    previewCtx.putImageData(e.data, 0, 0);
}

const picInput = document.getElementById('pic');
const $preview = document.getElementById('preview');
const previewCtx = $preview.getContext('2d');

const fileReader = new FileReader();
const img = new Image();

picInput.addEventListener('change', async (e) => {
    const pic = e.target.files[0];
    const bitmap = await createImageBitmap(pic);
    $preview.width = bitmap.width;
    $preview.height = bitmap.height;
    previewCtx.drawImage(bitmap, 0, 0);
    const imgData = previewCtx.getImageData(0, 0, $preview.width, $preview.height);
    worker.postMessage(imgData, [imgData.data.buffer]);
});
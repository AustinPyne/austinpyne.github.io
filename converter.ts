const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const convertBtn = document.getElementById('convertBtn') as HTMLButtonElement;
const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;
const preview = document.getElementById('preview') as HTMLImageElement;

let imageFile: File | null = null;

fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files[0]) {
        imageFile = fileInput.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                preview.src = reader.result;
            }
        };
        reader.readAsDataURL(imageFile);
    }
});

convertBtn.addEventListener('click', () => {
    if (!imageFile) return alert('Please select a JPG image first.');

    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
        if (typeof reader.result === 'string') {
            img.src = reader.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => {
                    if (!blob) return;

                    const url = URL.createObjectURL(blob);
                    downloadLink.href = url;
                    downloadLink.download = imageFile!.name.replace(/\.\w+$/, '.png');
                    downloadLink.style.display = 'inline';
                    downloadLink.textContent = 'Download PNG';
                }, 'image/png');
            };
        }
    };

    reader.readAsDataURL(imageFile);
});

document.getElementById("download-btn").disabled = false; // Enable the button once the page is loaded

document.getElementById("download-btn").addEventListener("click", function() {
    const certificateElement = document.getElementById("certificate");

    html2canvas(certificateElement, {
        scale: 2, // Increases the resolution of the image
        allowTaint: true, // Allows cross-origin images like logos if any
        useCORS: true, // Use CORS to ensure external images are included
        logging: true, // For debugging purposes
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Error capturing the certificate:", err);
    });
});

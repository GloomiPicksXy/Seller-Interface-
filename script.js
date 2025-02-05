document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit-btn");
    const previewSection = document.getElementById("preview-section");
    const previewContent = document.getElementById("preview-content");

    // Image preview function
    function handleFileUpload(input, previewDiv) {
        input.addEventListener("change", function () {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewDiv.innerHTML = `<img src="${e.target.result}" style="width: 100px; height: 100px; border:2px solid cyan;">`;
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    handleFileUpload(document.getElementById("profile-pic"), document.getElementById("profile-preview"));
    handleFileUpload(document.getElementById("collection-pic"), document.getElementById("collection-preview"));
    handleFileUpload(document.getElementById("welcome-msg-pic"), document.getElementById("welcome-preview"));

    // Submit button functionality
    submitBtn.addEventListener("click", () => {
        previewContent.innerHTML = "<h2>Preview</h2>";

        document.querySelectorAll(".upload-box textarea").forEach(textarea => {
            previewContent.innerHTML += `<p>${textarea.value}</p>`;
        });

        document.querySelectorAll(".payment-options input").forEach(input => {
            if (input.value.trim() !== "") {
                previewContent.innerHTML += `<p>Payment Method: ${input.value}</p>`;
            }
        });

        previewSection.classList.remove("hidden");
    });
});

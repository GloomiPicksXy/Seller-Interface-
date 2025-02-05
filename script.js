document.getElementById('sellerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide the form
    document.getElementById('sellerForm').classList.add('hidden');

    // Get form values
    const storeTitle = document.getElementById('storeTitle').value;
    const profileImage = document.getElementById('profileImage').files[0];
    const accLevel = document.getElementById('accLevel').value;
    const accId = document.getElementById('accId').value;
    const collectionImage = document.getElementById('collectionImage').files[0];
    const collectionInfo = document.getElementById('collectionInfo').value;
    const welcomeMessage = document.getElementById('welcomeMessage').value;
    const payments = Array.from(document.querySelectorAll('input[name="payment"]:checked')).map(el => el.value).join(', ');

    // Update preview
    document.getElementById('previewStoreTitle').textContent = storeTitle;
    document.getElementById('previewProfileImage').src = URL.createObjectURL(profileImage);
    document.getElementById('previewAccLevel').textContent = accLevel;
    document.getElementById('previewAccId').textContent = accId;
    document.getElementById('previewCollectionImage').src = URL.createObjectURL(collectionImage);
    document.getElementById('previewCollectionInfo').textContent = collectionInfo;
    document.getElementById('previewWelcomeMessage').textContent = welcomeMessage;
    document.getElementById('previewPayments').textContent = payments;

    // Show the preview
    document.getElementById('preview').classList.remove('hidden');
});

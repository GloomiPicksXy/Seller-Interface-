document.getElementById('sellerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const storeTitle = document.getElementById('storeTitle').value;
    const profileImage = document.getElementById('profileImage').files[0];
    const accLevel = document.getElementById('accLevel').value;
    const accId = document.getElementById('accId').value;
    const collectionImage = document.getElementById('collectionImage').files[0];
    const collectionInfo = document.getElementById('collectionInfo').value;
    const welcomeMessage = document.getElementById('welcomeMessage').value;
    const payments = Array.from(document.querySelectorAll('input[name="payment"]:checked')).map(el => el.value).join(', ');

    const previewStoreTitle = document.getElementById('previewStoreTitle');
    const previewProfileImage = document.getElementById('previewProfileImage');
    const previewAccLevel = document.getElementById('previewAccLevel');
    const previewAccId = document.getElementById('previewAccId');
    const previewCollectionImage = document.getElementById('previewCollectionImage');
    const previewCollectionInfo = document.getElementById('previewCollectionInfo');
    const previewWelcomeMessage = document.getElementById('previewWelcomeMessage');
    const previewPayments = document.getElementById('previewPayments');

    previewStoreTitle.textContent = storeTitle;
    previewProfileImage.src = URL.createObjectURL(profileImage);
    previewAccLevel.textContent = accLevel;
    previewAccId.textContent = accId;
    previewCollectionImage.src = URL.createObjectURL(collectionImage);
    previewCollectionInfo.textContent = collectionInfo;
    previewWelcomeMessage.textContent = welcomeMessage;
    previewPayments.textContent = payments;

    document.getElementById('preview').classList.remove('hidden');
});

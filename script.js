// HTML öğelerini seç
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

// "Ekle" butonuna tıklama olayını dinle
addItemButton.addEventListener('click', addItem);

// Yeni öğe ekle
function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        alert('Lütfen bir şey yazın!');
        return;
    }

    // Yeni liste öğesi oluştur
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    // Silme butonu ekle
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Sil';
    deleteButton.addEventListener('click', () => listItem.remove());
    listItem.appendChild(deleteButton);

    // Listeye ekle
    itemList.appendChild(listItem);

    // Girdi kutusunu temizle
    itemInput.value = '';
}

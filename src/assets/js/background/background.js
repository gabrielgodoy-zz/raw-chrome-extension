listenStorageChanges();

/**
 * Listen for storage changes and log it
 */
function listenStorageChanges() {
  chrome.storage.onChanged.addListener((changes, storageArea) => {
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        let storageChange = changes[key];
        console.log(`Storage mode is "${storageArea}"`);
        console.log(`Value in "${key}" key was "${storageChange.oldValue}",`);
        console.log(`and now is "${storageChange.newValue}"`);
      }
    }
  });
}

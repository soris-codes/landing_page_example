// Get tab items from DOM
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Define functions

//Select tab content items and add border
function selectItem(e) {
  removeBorder();
  hideContent();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  //Display selected content only
  tabContentItem.classList.add('show');
}

function removeBorder(e) {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function hideContent() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Add event listeners
tabItems.forEach(item => item.addEventListener('click', selectItem));
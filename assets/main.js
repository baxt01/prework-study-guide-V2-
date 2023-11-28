const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item.
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // show content
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Hide the content of the previous card.
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


// Listen for tab click.
tabItems.forEach(item => item.addEventListener('click', selectItem));

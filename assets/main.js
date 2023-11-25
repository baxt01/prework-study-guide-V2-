const tabItems = document.quertSelectorAll('.card');
const tabContentItems = document.quertSelectorAll('.tab-content-item');

//Select tab content item.
function selectItem(e) {
    removeBoder();
    removeShow();
    // 1add border to current tab
    this.classList.add('tab-border')
    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


// Listen for tab click.
tabItems.forEach(item => item.addEventListener('click', selectItem));

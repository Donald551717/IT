// script.js
function toggleAnswer(element) {
    const faqItem = element.parentElement;
    const icon = element.querySelector('.faq-icon');
    const isOpen = faqItem.classList.contains('open');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-icon').textContent = '+'; // Change all icons to +
    });

    // If the item was not open, open it and change its icon to '×'
    if (!isOpen) {
        faqItem.classList.add('open');
        icon.textContent = '×'; // Change icon to '×' for the open item
    }
}

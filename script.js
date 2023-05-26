const toggleText = () => {
    const paragraph = document.getElementById('1');
    paragraph.classList.add('hidden');
    const button = document.getElementById('3');
    button.style.visibility = 'hidden';
    const second_paragraph = document.getElementById('2');
    second_paragraph.classList.remove('hidden');
    second_paragraph.classList.add('active');
  
}
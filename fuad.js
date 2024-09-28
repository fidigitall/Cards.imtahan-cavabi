
const items = [
    { title: 'Başlıq 1', txt: 'lorem ipsun falan 1.' },
    { title: 'Başlıq 2', txt: 'lorem ipsun falan 2.' },
    { title: 'Başlıq 3', txt: 'lorem ipsun falan 3.' }
];


const contentDiv = document.getElementById('content');


items.forEach(item => {
    
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    
    const titleElement = document.createElement('div');
    titleElement.className = 'title';
    titleElement.textContent = item.title;

  
    const textElement = document.createElement('div');
    textElement.className = 'text';
    textElement.textContent = item.txt;

    
    containerDiv.appendChild(titleElement);
    containerDiv.appendChild(textElement);

    
    contentDiv.appendChild(containerDiv);
});

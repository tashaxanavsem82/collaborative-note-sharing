const socket = io();

const noteArea = document.getElementById('noteArea');

noteArea.addEventListener('input', () => {
    socket.emit('noteChange', noteArea.value);
});

socket.on('noteUpdate', (newText) => {
    noteArea.value = newText;
});

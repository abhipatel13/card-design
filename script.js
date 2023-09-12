const card = document.getElementById('myCard');
let isDragging = false;
let initialX, currentX, deltaX, rotationAngle = 0;

card.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX;
});

card.addEventListener('touchstart', (e) => {
    isDragging = true;
    initialX = e.touches[0].clientX;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    deltaX = currentX - initialX;

    rotationAngle += deltaX / 5;
    card.style.transform = `rotateY(${rotationAngle}deg)`;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    deltaX = currentX - initialX;

    rotationAngle += deltaX / 5;
    if (rotationAngle > 180) {
        rotationAngle = 180;
    } else if (rotationAngle < 0) {
        rotationAngle = 0;
    }

    card.style.transform = `rotateY(${rotationAngle}deg)`;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
});

document.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
});
console.log('cica');

const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const randomizeElements = (elements) => {
    elements.forEach(elem => {
        elem.style.transform = `rotate(${generateRandomNum(-80, 80)}deg)`
        elem.style.top = `${generateRandomNum(100,500)}px`
        elem.style.left = `${generateRandomNum(100,500)}px`
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.draggable');
    randomizeElements(elements);
    let draggingElem;
    let x = 0;
    let y = 0;
    const mouseDownHandler = (e) => {
        draggingElem = e.target;
        draggingElem.style.transform = 'rotate(0deg)'
        x = e.clientX;
        y = e.clientY;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = (e) => {
        let dx = e.clientX - x;
        let dy = e.clientY - y;
        draggingElem.style.top = `${draggingElem.offsetTop + dy}px`
        draggingElem.style.left = `${draggingElem.offsetLeft + dx}px`
        x = e.clientX;
        y = e.clientY;
    }

    const mouseUpHandler = (e) => {
        // draggingElem.style.border = 'none';
        draggingElem = null;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mousedown', mouseDownHandler);
    }
    elements.forEach((elem) =>
        elem.addEventListener('mousedown', mouseDownHandler))
});
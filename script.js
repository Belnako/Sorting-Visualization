document.addEventListener('DOMContentLoaded', () => {
    arrayDraw = [];
    let comparisons = 0;
    let swaps = 0;
    let height = 200;
    let width = 150;
    let canvas = document.querySelector('.draw');
    let button = document.querySelector('.btn');

    function randomArr() {
        for (let i = 0; i < width; i++) {
            let j = Math.round(Math.random(height) * height);
            arrayDraw.push(j);
        }
        return arrayDraw;
    }
    
    function draw(arr) {
        if (canvas.children.length === width) {
            canvas.innerHTML = '';
            console.log(canvas);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            stroke = document.createElement('div');
            if(arr[i] < height/2) {
                stroke.className = `green stroke ${arr[i]}`;
            } else {
                stroke.className = `black stroke ${arr[i]}`;
            }
            stroke.setAttribute("style", `width: 4px; height: ${arr[i]}px;`);
            canvas.appendChild(stroke);
        }
        return canvas;
    }

    async function bubblesort() {
        console.log(arrayDraw);
        for (let i = 0; i < arrayDraw.length; i++) {
            for (let j = 0; j < arrayDraw.length; j++) {
                comparisons++;
                if (arrayDraw[j] < arrayDraw[i]) {
                    await sleep(1);
                    let tmp = arrayDraw[j];
                    arrayDraw[j] = arrayDraw[i];
                    arrayDraw[i] = tmp;
                    swaps++;
                    eraseCanvas();
                    draw(arrayDraw);
                }
            }
        }
        console.log(`It took ${comparisons} comparisons and ${swaps} swaps to change the ${arrayDraw}`);
    }

    function eraseCanvas() {
        canvas.innerHTML = '';
    }

    draw(randomArr());

    button.addEventListener('click', () => bubblesort());
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

})
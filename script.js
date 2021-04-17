document.addEventListener('DOMContentLoaded', () => {
    arrayDraw = [];
    let comparisons = 0;
    let swaps = 0;
    let height = 150;
    let width = 70;
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
        let hasToSort = arrayDraw.length-1;
        for (let i = 0; i < arrayDraw.length; i++) { //Loops
            for (let j = 0; j < hasToSort; j++) {  //Compare
                comparisons++;
                if (arrayDraw[j] > arrayDraw[j+1]) {
                    await sleep(1);
                    let tmp = arrayDraw[j+1];
                    arrayDraw[j+1] = arrayDraw[j];
                    arrayDraw[j] = tmp;
                    swaps++;
                    eraseCanvas();
                    draw(arrayDraw);
                }
            }
            if (swaps === 0) {
                console.log(`It took ${comparisons} comparisons`);
                return;
            }

            if (swaps > 0) {
                swaps = 0;
            }

            hasToSort--;
        }
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
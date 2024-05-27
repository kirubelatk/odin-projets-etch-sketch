let cont = document.querySelector('#container');
        const but = document.querySelector('.size');

        but.addEventListener('click', () => {
            let gridSize = parseInt(prompt("Enter the number of divs per row and column (max 100):"), 10);

            if (isNaN(gridSize) || gridSize <= 0 || gridSize > 1200) {
                alert("Please enter a valid number between 1 and 100.");
                return;
            }

            // Clear existing grid
            cont.innerHTML = '';

            const screenWidth = window.innerWidth;
            const gridItemSize = screenWidth / gridSize;

        
            cont.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                border: 2px solid black;
                width: ${screenWidth}px;
                height: ${screenWidth}px; /* Optional: make it a square grid */
                margin-top: 20px; /* Space between button and grid */
            `;

            for (let i = 0; i < gridSize * gridSize; i++) {
                let di = document.createElement('div');
                di.style.cssText = `
                    border: 1px solid black;
                    width: ${gridItemSize}px;
                    height: ${gridItemSize}px;
                    box-sizing: border-box; /* Ensures padding and border are included in the element's total width and height */
                    
                    `;
                di.addEventListener('mouseenter', () => {
                    di.style.backgroundColor = getRandomValue();
                        
                    
                });
                cont.appendChild(di);
            }
        });
        function getRandomValue() {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            return `rgb(${red}, ${green}, ${blue})`;
        }
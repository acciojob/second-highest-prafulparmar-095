function secondHighest(arr) {
            
            const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);

           
            if (uniqueSortedArr.length < 2) {
                return -Infinity;
            }

           
            return uniqueSortedArr[uniqueSortedArr.length - 2];
        }

        
        function findSecondHighest() {
            const arrayInput = document.getElementById('arrayInput');
            const resultDisplay = document.getElementById('result');
            const errorMessageDisplay = document.getElementById('errorMessage');

           
            resultDisplay.textContent = '';
            errorMessageDisplay.textContent = '';

            const inputString = arrayInput.value.trim();

            if (!inputString) {
                errorMessageDisplay.textContent = 'Please enter numbers.';
                resultDisplay.textContent = ''; // Clear result if input is empty
                return;
            }

           
            const arr = inputString.split(',').map(numStr => parseFloat(numStr.trim())).filter(num => !isNaN(num));

            
            if (arr.length === 0) {
                errorMessageDisplay.textContent = 'No valid numbers found. Please enter comma-separated numbers.';
                resultDisplay.textContent = '';
                return;
            }

            const result = secondHighest(arr);
            resultDisplay.textContent = `Second Highest: ${result}`;
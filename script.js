
function secondHighest(arr) {
    
    if (arr.length <= 1) {
        return -Infinity;
    }

   
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);

    
    if (uniqueSortedArr.length <= 1) {
        return -Infinity;
    }

    
    return uniqueSortedArr[uniqueSortedArr.length - 2];
}


document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');

    const testCases = [
        { input: [5, 1, 2, 3, 4], expected: 4 },
        { input: [-1, -2, -3, -4, -5], expected: -2 },
        { input: [], expected: -Infinity },
        { input: [1], expected: -Infinity },
        { input: [1, 1, 1, 1], expected: -Infinity },
        { input: [10, 20, 30, 40, 50], expected: 40 },
        { input: [7, 7, 1, 7, 2, 7], expected: 2 },
        { input: [100, 50, 200, 150, 10], expected: 150 }
    ];

    testCases.forEach((test, index) => {
        const actualOutput = secondHighest(test.input);
        const testCaseDiv = document.createElement('div');
        testCaseDiv.classList.add('test-case');

        let outputClass = '';
        if (actualOutput === -Infinity) {
            outputClass = 'infinity';
        }

        testCaseDiv.innerHTML = `
            <strong>Test Case ${index + 1}:</strong>
            <p>Input: <code>[${test.input.map(val => (val === -Infinity ? '-Infinity' : val)).join(', ')}]</code></p>
            <p>Expected Output: <span class="output ${test.expected === -Infinity ? 'infinity' : ''}">${test.expected === -Infinity ? '-Infinity' : test.expected}</span></p>
            <p>Actual Output: <span class="output ${outputClass}">${actualOutput === -Infinity ? '-Infinity' : actualOutput}</span></p>
        `;
        resultsContainer.appendChild(testCaseDiv);
    });
});

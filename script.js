const evaluatedText = document.getElementById('evaluatedText');
  const letterCount = document.getElementById('letterCount');

  evaluatedText.addEventListener('input', () => {
    // Get the current value of the input field
    const inputValue = evaluatedText.value;

    // Count the number of characters in the input
    const count = inputValue.length;

    // Update the letter count in the h3 tag
    letterCount.textContent = count;
  });
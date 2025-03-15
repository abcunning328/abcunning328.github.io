// Get elements
const form = document.getElementById('madlib-form');
const storyContainer = document.getElementById('story-container');
const storyElement = document.getElementById('story');
const newStoryButton = document.getElementById('new-story-button');
const generateStoryButton = document.getElementById('generate-story-button');

// Add event listener to the 'Generate Story' button
generateStoryButton.addEventListener('click', function () {
    // Get values from the input fields
    const adjective1 = document.getElementById('adjective1').value;
    const noun1 = document.getElementById('noun1').value;
    const technology = document.getElementById('technology').value;
    const pluralNoun1 = document.getElementById('plural-noun1').value;
    const verb1 = document.getElementById('verb1').value;
    const adjective2 = document.getElementById('adjective2').value;
    const noun2 = document.getElementById('noun2').value;
    const pluralNoun2 = document.getElementById('plural-noun2').value;

    // Check if all fields are filled
    if (!adjective1 || !noun1 || !technology || !pluralNoun1 || !verb1 || !adjective2 || !noun2 || !pluralNoun2) {
        alert("Please fill in all fields before generating the story!");
        return;
    }

    // Create the story
    const story = `Once upon a time, a ${adjective1} mom decided to take an 8-week course on web development. She was eager to learn ${noun1} and build her very own website using ${technology}. 

    By the third week, she had already built ${pluralNoun1} and learned to ${verb1}. It was a ${adjective2} experience! 

    After the course, she felt ${adjective2} and proud of her ${noun2}, ready to take on even more ${pluralNoun2} in the tech world.`;

    // Display the story and hide the form
    storyElement.textContent = story;
    storyContainer.classList.remove('hidden');

    // Hide the form and instructions
    form.style.display = 'none';  // Hides the form
});

// Reset the story when "Create New Story" button is clicked
newStoryButton.addEventListener('click', function () {
    // Reset the form and hide the story
    form.reset();
    storyContainer.classList.add('hidden');

    // Show the form again
    form.style.display = 'block';  // Shows the form again
});

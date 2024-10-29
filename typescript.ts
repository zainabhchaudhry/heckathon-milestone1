const button = document.getElementById("Button") as HTMLButtonElement
        const formData = new FormData();
        const resumeData: { [key: string]: FormDataEntryValue } = {};

        button.addEventListener("click", () => {
            button.innerText = "Button clicked!";
        });

        formData.forEach((value, key) => {
            resumeData[key] = value;
        });

        console.log('Resume Data:', resumeData);
        alert("Resume generated!");

        // Select the button and paragraph elements
const toggle = document.getElementById("toggle") as HTMLButtonElement;
const toggleText = document.getElementById("toggleText") as HTMLParagraphElement;

// Add an event listener to handle the toggle action
toggle.addEventListener("click", () => {
    if (toggleText.style.display === "none") {
        toggleText.style.display = "block";
        toggle.innerText = "Hide Text"; // Change button text to "Hide Text"
    } else {
        toggleText.style.display = "none";
        toggle.innerText = "Show Text"; // Change button text to "Show Text"
    }
});

// Get the form
const form = document.getElementById("myForm");

// Add submit event
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // Get input values
    const name = document.getElementById("name").value;
    const rollno = document.getElementById("rollno").value;
    const mobile = document.getElementById("mobile").value;

    // Validation
    if (name === "" || rollno === "" || mobile === "") {
        alert("Please enter all details");
    } else {
        console.log("Name:", name);
        console.log("Roll No:", rollno);
        console.log("Mobile:", mobile);
    }
});

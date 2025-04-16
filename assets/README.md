### Project Structure

1. **index.html** - The main HTML file.
2. **styles.css** - The CSS file for styling.
3. **script.js** - The JavaScript file for functionality.

### Step 1: Create the HTML File (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Information Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Student Information Management</h1>
        <form id="studentForm">
            <input type="text" id="name" placeholder="Student Name" required>
            <input type="number" id="age" placeholder="Age" required>
            <input type="text" id="grade" placeholder="Grade" required>
            <button type="submit">Add Student</button>
        </form>
        <h2>Student List</h2>
        <ul id="studentList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Step 2: Create the CSS File (styles.css)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
```

### Step 3: Create the JavaScript File (script.js)

```javascript
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Age: ${age}, Grade: ${grade}`;

    // Append the new list item to the student list
    document.getElementById('studentList').appendChild(li);

    // Clear the input fields
    document.getElementById('studentForm').reset();
});
```

### How It Works

1. **HTML Structure**: The HTML file contains a form for entering student information and a list to display the added students.
2. **CSS Styling**: The CSS file styles the form and the list to make it visually appealing.
3. **JavaScript Functionality**: The JavaScript file handles the form submission, creates a new list item with the student information, and appends it to the list.

### Running the Project

1. Create a new directory for your project.
2. Inside the directory, create three files: `index.html`, `styles.css`, and `script.js`.
3. Copy the respective code snippets into each file.
4. Open `index.html` in a web browser to see your student information management system in action.

### Future Enhancements

- **Data Persistence**: Use local storage to save student data so that it persists even after refreshing the page.
- **Edit and Delete Functionality**: Allow users to edit or delete student entries.
- **Validation**: Add more robust validation for the input fields.
- **Styling**: Enhance the UI with more advanced CSS or frameworks like Bootstrap.

This project serves as a foundational example, and you can expand upon it based on your learning goals!
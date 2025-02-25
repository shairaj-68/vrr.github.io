
    
    document.addEventListener("DOMContentLoaded", function() {
        const notesInput = document.getElementById("notes");
        const saveButton = document.getElementById("save-notes");

        
        const savedNotes = localStorage.getItem("userNotes");
        if (savedNotes) {
            notesInput.value = savedNotes;
        }

        
        saveButton.addEventListener("click", function() {
            const notes = notesInput.value;
            localStorage.setItem("userNotes", notes);
            alert("Notes saved successfully!");
        });
    });


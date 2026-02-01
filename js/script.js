document.getElementById("akanform").addEventListener("submit", function (e)){
    e.preventDefault();
    
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year || !gender ||){
        alert("Please fill in all fields and select your gender.");
        return;
    }
    
    if (day < 1 || day > 31 || month < 1 || month > 12){
        alert("Invalid date or month");
        return;
    }
    
}
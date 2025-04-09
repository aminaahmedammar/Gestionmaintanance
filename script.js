document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("serviceSelect");
    const formsContainer = document.getElementById("formsContainer");
    const formLinks = document.querySelectorAll(".form-link");
    const formFrames = document.querySelectorAll(".form-frame");

    // عند اختيار خدمة، إظهار النماذج التابعة لها
    serviceSelect.addEventListener("change", function () {
        const selectedService = serviceSelect.value;
        
        document.querySelectorAll(".service-forms").forEach(section => {
            section.style.display = "none";
        });

        if (selectedService) {
            document.getElementById(selectedService + "-forms").style.display = "block";
        }
    });

    // عند النقر على اسم النموذج، فتحه في الإطار المناسب
    formLinks.forEach(link => {
        link.addEventListener("click", function () {
            const targetFrame = document.getElementById(this.dataset.target);
            formFrames.forEach(frame => frame.style.display = "none");
            targetFrame.style.display = "block";
        });
    });
	
	
	function addTrainee() {
    let name = document.getElementById("name").value;
    let institution = document.getElementById("institution").value;
    let date = document.getElementById("date").value;

    if (name && institution && date) {
        let traineeList = document.getElementById("traineeList");

        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${institution}</td>
            <td>${date}</td>
            <td><button class="delete-btn" onclick="deleteTrainee(this)">❌</button></td>
        `;

        traineeList.appendChild(row);

        // عرض رسالة نجاح
        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
        }, 2000);

        // إعادة تعيين الحقول
        document.getElementById("name").value = "";
        document.getElementById("institution").value = "Fabricon Biomedical";
        document.getElementById("date").value = "";
    }
}

function deleteTrainee(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}


	
	
});


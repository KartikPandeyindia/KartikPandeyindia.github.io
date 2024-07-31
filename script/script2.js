document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/data.json')
        .then(response => response.json())
        .then(data => {
            // Populate Education section
            const educationList = data.profile.education;
            const educationContainer = document.getElementById('education-list');
            educationList.forEach(degree => {
                const degreeElement = document.createElement('li');
                degreeElement.innerHTML = `
                    <img src="${degree.icon}" alt="School Icon" class="custom-icon">
                    <div class="details">
                        <div>
                            ${degree.title} | ${degree.date}
                        </div>
                        <div>
                            ${degree.institution} | ${degree.place} | ${degree.grade}
                        </div>
                    </div>
                `;
                educationContainer.appendChild(degreeElement);
            });

            // Populate Domain section
            const domainList = data.profile.domain;
            const domainContainer = document.getElementById('domain-list');
            domainList.forEach(area => {
                const areaElement = document.createElement('li');
                areaElement.textContent = area;
                domainContainer.appendChild(areaElement);
            });

            // Other sections can be populated similarly if needed
        })
        .catch(error => console.error('Error loading JSON:', error));
});

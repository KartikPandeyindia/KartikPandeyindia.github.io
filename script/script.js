document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/data.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');

            
            // Populate Experience section
            const experienceList = xmlDoc.querySelectorAll('experience > job');
            const experienceContainer = document.getElementById('experience-list');
            experienceList.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.className = 'experience-item';
                jobElement.innerHTML = `
                    <img src="${job.querySelector('icon').textContent}" alt="Company Icon" class="custom-icon">
                    <div class="details">
                        <div class="company">${job.querySelector('title').textContent}</div>
                        <div class="tenure"><span class="highlight-alpha">${job.querySelector('company').textContent} | ${job.querySelector('date').textContent}</span></div>
                        <p>${job.querySelector('description').textContent}</p>
                    </div>
                `;
                experienceContainer.appendChild(jobElement);
            });

            // Populate Education section
            const educationList = xmlDoc.querySelectorAll('education > degree');
            const educationContainer = document.getElementById('education-list');
            educationList.forEach(degree => {
                const degreeElement = document.createElement('li');
                degreeElement.innerHTML = `
                    <img src="${degree.querySelector('icon').textContent}" alt="School Icon" class="custom-icon">
                    <div class="details">
                        <div>
                            ${degree.querySelector('title').textContent} | ${degree.querySelector('date').textContent}
                            </div>
                        <div>
                            ${degree.querySelector('institution').textContent} | ${degree.querySelector('place').textContent} | ${degree.querySelector('grade').textContent}
                            </div>
                    </div>
                `;
                educationContainer.appendChild(degreeElement);
            });

            // Populate Certifications section
            const certificationsList = xmlDoc.querySelectorAll('certifications > certification');
            const certificationsContainer = document.getElementById('certifications-list');
            certificationsList.forEach(cert => {
                const certElement = document.createElement('li');
                certElement.innerHTML = `
                    <img src="${cert.querySelector('icon').textContent}" alt="Exam Icon" class="custom-icon">
                    <a href="${cert.querySelector('c_link').textContent}">${cert.querySelector('title').textContent}</a>, <a href="${cert.querySelector('insti_link').textContent}">${cert.querySelector('institution').textContent}</a>, ${cert.querySelector('year').textContent}
                `;
                certificationsContainer.appendChild(certElement);
            });

            // Populate Publications section
            const publicationsList = xmlDoc.querySelectorAll('publications > publication');
            const publicationsContainer = document.getElementById('publications-list');
            publicationsList.forEach(pub => {
                const pubElement = document.createElement('li');
                pubElement.innerHTML = `
                    <a href="${pub.querySelector('link').textContent}">${pub.querySelector('title').textContent}</a>, <a href="${pub.querySelector('p_link').textContent}">${pub.querySelector('publisher').textContent}</a>, ${pub.querySelector('year').textContent}
                `;
                publicationsContainer.appendChild(pubElement);
            });

            // Populate Honors section
            const honorsList = xmlDoc.querySelectorAll('honors > honor');
            const honorsContainer = document.getElementById('honors-list');
            honorsList.forEach(honor => {
                const honorElement = document.createElement('li');
                honorElement.innerHTML = `
                    
                    <a href="${honor.querySelector('h_link').textContent}">${honor.querySelector('title').textContent}</a>,  ${honor.querySelector('year').textContent}
                
                    `;
                honorsContainer.appendChild(honorElement);
            });

            // Populate Domain section
            const domainList = xmlDoc.querySelectorAll('domain > area');
            const domainContainer = document.getElementById('domain-list');
            domainList.forEach(area => {
                const areaElement = document.createElement('li');
                    areaElement.textContent = area.textContent;
                domainContainer.appendChild(areaElement);
            });

            // // Populate Proficiency section --- out of order
            // const proficiencyTable = document.getElementById('proficiency-table');
            // const proficiencySections = [
            //     { name: 'Languages', path: 'languages > language' },
            //     { name: 'Frameworks', path: 'frameworks > framework' },
            //     { name: 'Tool-chains', path: 'toolChains > toolChain' },
            //     { name: 'Databases', path: 'databases > database' },
            //     { name: 'Platforms', path: 'platforms > platform' },
            //     { name: 'OS (Shell)', path: 'osShell' },
            //     { name: 'Suites', path: 'suites > suite' },
            //     { name: 'Paradigms', path: 'paradigms > paradigm' }
            // ];

            // // Add table headers
            // const headerRow = document.createElement('tr');
            // headerRow.innerHTML = '<th>Languages</th><th>Libraries</th>';
            // proficiencyTable.appendChild(headerRow);

            // proficiencySections.forEach(section => {
            //     const items = xmlDoc.querySelectorAll(`proficiency > table > ${section.path}`);
            //     items.forEach(item => {
            //         const row = document.createElement('tr');
            //         if (section.name === 'Languages') {
            //             row.innerHTML = `
            //                 <td>${item.getAttribute('name')}</td>
            //                 <td>${Array.from(item.querySelectorAll('library')).map(lib => lib.textContent).join(', ')}</td>
            //             `;
            //         } else {
            //             row.innerHTML = `
            //                 <th>${section.name}</th>
            //                 <td>${Array.from(items).map(i => i.textContent).join(', ')}</td>
            //             `;
            //             // Add a row for each section's details
            //             section.name = ''; // Clear section name after the first row to avoid repetition
            //         }
            //         proficiencyTable.appendChild(row);
            //     });
            // });

            // Populate Affiliations section
            const affiliationsList = xmlDoc.querySelectorAll('affiliations > affiliation');
            const affiliationsContainer = document.getElementById('affiliations-list');
            affiliationsList.forEach(aff => {
                const affElement = document.createElement('li');
                affElement.innerHTML = `
                    
                    <div>
                        <img src="${aff.querySelector('icon').textContent}" alt="Society Icon" class="custom-icon">
                        <span class="aff-text">${aff.querySelector('relation').textContent}</span>
                    </div>
                    <div>
                        <a href="${aff.querySelector('s_link').textContent}">
                            ${aff.querySelector('society').textContent}
                            </a>
                    </div>
                
                    `;
                affiliationsContainer.appendChild(affElement);
            }); 
        })
        .catch(error => console.error('Error loading XML:', error));
});

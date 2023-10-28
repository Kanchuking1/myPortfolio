const setInnerHTMLById = (html, id) => {
    document.getElementById(id).innerHTML = html;
}

const setInnerTextById = (text, id) => {
    document.getElementById(id).innerText = text;
}

const generateTileHTML = (project) => {
    return `<div>
        <a target="_blank" href="${project.target}">
            <div class="post" id="${project.id}">
                <img class="thumbnail" src="${project.thumbnail}" alt="${project.alt}">
                <div class="post-preview">
                    <h6 class="post-title">${project.title}</h6>
                    <p class="post-intro">${project.intro}</p>
                    <p><a target="_blank" href="${project.target}">Let's Go</a></p>
                </div>
            </div>
        </a>
        
    </div>`;
}

const generateContactSectionSocial = (social) => {
    return `<li id=${social.id}>
        <a target="_blank" href="${social.link}">
            <i class="${social.classes} fa-2xl"></i>
        </a>
    </li>`;
}

const generateHeroSectionSocial = (social) => {
    return `<a target="_blank" href="${social.link}" id="${social.id}"><div class="${social.classes} socials-icon-xl">
    </div></a>`
}

const generateWorkexHTML = (workex) => {
    let descriptionItems = "";
    for (const item of workex.description) {
        descriptionItems += `<li>${item}</li>`;
    }
    return `<li class="workex-item" id="${workex.id}">
        <div class="workex-icon">
            <i class="company-icon fa-solid ${workex.class} fa-2xl"></i>
        </div>
        <div class="workex-data-container">
            <div class="workex-header">
                <h3 class="workex-title" style="margin-block-end: 6px">${workex.role}</h3>
                <h5 class="workex-date">
                    <i class="fa fa-calendar calendar-icon"></i>${workex.time}
                </h5>
            </div>
            <div style="padding-block: 10px">
                <i class="fa-solid fa-location-dot fa-lg"></i>
                ${workex.location}
            </div>
            <p class="projectParagraph"><ul class="description-list">${descriptionItems}</ul></p>
        </div>
    </li>`
}

const setSectionHTML = async (projects, id) => {
    let html = '';
    for await (const project of projects) {
        html += generateTileHTML(project);
    }
    setInnerHTMLById(html, id);
}

const appendInnerHTMLById = (html, id) => {
    document.getElementById(id).innerHTML += html;
}
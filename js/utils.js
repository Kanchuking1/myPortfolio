const setInnerHTMLById = (html, id) => {
    document.getElementById(id).innerHTML = html;
}

const setInnerTextById = (text, id) => {
    document.getElementById(id).innerText = text;
}

const generateTileHTML = (project) => {
    return `<div>
        <div class="post" id="${project.id}">
            <img class="thumbnail" src="${project.thumbnail}" alt="${project.alt}">
            <div class="post-preview">
                <h6 class="post-title">${project.title}</h6>
                <p class="post-intro">${project.intro}</p>
                <p><a target="_blank" href="${project.target}">Let's Go</a></p>
            </div>
        </div>
    </div>`;
}

const setSectionHTML = async (projects, id) => {
    let html = '';
    for await (const project of projects) {
        html += generateTileHTML(project);
    }
    setInnerHTMLById(html, id);
}
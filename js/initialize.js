const initialize = async () => {
    const res = await fetch("./js/data.json");
    const data = await res.json();
    
    setInnerTextById(data.introduction.p1, 'p1');
    setInnerTextById(data.introduction.p2, 'p2');

    // Initialize Highlight Projects
    const highlights = data.projects.filter((project) => data.highlights.includes(project.id));
    setSectionHTML(highlights, "highlights-post-wrapper");

    // Initialize Games Projects
    const games = data.projects.filter((project) => data.games.includes(project.id));
    setSectionHTML(games, "games-post-wrapper");

    // Initialize AR Projects
    const ar = data.projects.filter((project) => data.ar.includes(project.id));
    setSectionHTML(ar, "ar-post-wrapper");

    // Initialize Miscallenous Projects
    const misc = data.projects.filter((project) => data.misc.includes(project.id));
    setSectionHTML(misc, "miscallenous-post-wrapper");

    // Initialize the hobbies
    const hobbies = data.projects.filter((project) => data.hobbies.includes(project.id));
    setSectionHTML(hobbies, "hobbies-post-wrapper");

    const socials = data.socials;
    //Contact Section Socials
    for (const social of socials) {
        appendInnerHTMLById(generateContactSectionSocial(social), "socials-list");
    }

    const heroSocials = socials.filter(social => data.herosocials.includes(social.id));
    for (const hero of heroSocials) {
        appendInnerHTMLById(generateHeroSectionSocial(hero), "socials-container");
    }
}

try {
    initialize();
} catch (error) {
    console.log('Failed to fetch details', error);
}

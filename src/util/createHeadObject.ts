export function createHeadObject({
    title = "Rorigue Kayembe",
    link = [],
    script = [],
} = {}) {
    return  {
        title,
        link: [
            { href: "/style.css", rel: "stylesheet" },
            ...link,
        ],
        script,
    };
} 
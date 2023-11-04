import { html } from "@presta/html";
import fm from 'front-matter';
import path from "path";

import { createHeadObject } from "@/util/createHeadObject";
import { source } from "@presta/source-filesystem";

// const hidden = []

const files = source('../writings/*.md', __filename);
const routes = files
    // .filter(filename =>
    //     !hidden.includes(path.basename(filename[0], '.md'))
    // )
    .reduce((routes, writing) => {
        const filename = path.basename(writing[0], '.md')
        return {
            ...routes,
            [`/writings/${filename}`]: writing[1],
        }
    }, {})
const writings = Object
    .keys(routes)
    .map(url => [url, fm(routes[url])])
    .map(([route, writing]) => {
        const parsedWriting = writing as { attributes: { date: string; title: string } };
        if (!parsedWriting.attributes || typeof parsedWriting.attributes.date === 'undefined' || typeof parsedWriting.attributes.title === 'undefined') {
            throw new Error(`Writing doesn't have a date or title or attributes`);
        }

        return {
            route,
            date: new Date(parsedWriting.attributes.date),
            ...(typeof parsedWriting === 'object' ? parsedWriting : {}),
        };
    })
    .sort((a, b) => (b.date as Date).getTime() - (a.date as Date).getTime());

export async function getStaticPaths() {
    return ['/writings']
}

export async function handler(ev) {
    return {
        html: html({
            head: {
                ...createHeadObject(),
                title: 'writings | rodriguekayembe',
                description: 'Fleshed out thoughts',
            },
            body: `
            <div class= "outer markdown">
             <a href='/' class='pb12 caps h6 db'>
              <strong>
               &lt; Back
              </strong>
            </a>
            <p> ${writings.length}</p>
            <ul style={{ maxWidth: "600px", listStyle: 'none', padding: 0, margin: 0 }}>
                ${writings.map(writing => {
                return (
                    `<li>
                            <a href=${writing.route}>${writing.attributes.title}</a>
                        </li>`
                )
            })}
            </ul>
        </div>
          `,
        }),
    };
}
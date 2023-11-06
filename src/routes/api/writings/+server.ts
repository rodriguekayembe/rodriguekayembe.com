import type { Writing } from "@/src/lib/types";
import { json } from "@sveltejs/kit";



async function getPosts() {
    let writings: Writing[] = []

    const paths = import.meta.glob('/src/writings/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Writing, 'slug'>
            const post = { ...metadata, slug } satisfies Writing
            post.published && writings.push(post)
        }

    }

    writings = writings.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime() 
    )


    return writings;
}



export async function GET() {
    const writings = await getPosts()
    return json(writings);
}
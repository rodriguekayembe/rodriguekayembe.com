import { promises as fs } from 'fs';
import type { RequestHandler } from './$types';
import path from 'node:path';

export const GET: RequestHandler = async () => {
    try {
        console.log('here');
        const __dirname = path.resolve();
        const filePath = path.resolve(__dirname, 'static', 'Rodrigue-Kayembe-CV.pdf');
        console.log(filePath);
        const file = await fs.readFile(filePath);
        
        return new Response(file, {
            status: 200,
            headers: {
                'Content-type': 'multipart/form-data',
                'Content-Disposition': `attachment; filename=rodrigue-kayembe.pdf`
            }
        });
    } catch(error) {
        console.log('failed');
        console.log(error);
        return new Response('', { status: 500 }); // Return a generic error response
    }
};

import { z } from 'zod';
import { GENERATE_DOCS_PROMPT } from '../prompts/docs.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../prompts/base/markdown.prompt.js';

export const generateDocsTool = {
	name: 'generate_jsdoc_docs',
	description: 'Generates professional JSDoc/TSDoc documentation.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${MARKDOWN_OUTPUT_PROMPT}\n\n${GENERATE_DOCS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

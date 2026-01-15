import { z } from 'zod';
import { GENERATE_DOCS_PROMPT } from '../prompts/docs.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../prompts/base/markdown.prompt.js';
import { autoInitializeProjectDocs } from './initializeProjectDocs.js';

export const generateDocsTool = {
	name: 'generate_jsdoc_docs',
	description: 'Generates professional JSDoc/TSDoc documentation.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${MARKDOWN_OUTPUT_PROMPT}\n\n${GENERATE_DOCS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

		return {
			content: [
				{
					type: 'text' as const,
					text: text,
				},
			],
		};
	},
};

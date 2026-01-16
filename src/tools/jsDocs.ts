import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../prompts/base/markdown.prompt.js';
import { autoInitializeProjectDocs } from './initializeProjectDocs.js';
import { GENERATE_JSDOC_PROMPT } from '../prompts/jsdoc.prompt.js';

export const generateJsDocsTool = {
	name: 'generate_jsdoc_docs',
	description: 'Generates professional JSDoc/TSDoc documentation.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${MARKDOWN_OUTPUT_PROMPT}\n\n${GENERATE_JSDOC_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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

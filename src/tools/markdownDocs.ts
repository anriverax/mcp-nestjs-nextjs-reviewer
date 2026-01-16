import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../prompts/base/markdown.prompt.js';
import { autoInitializeProjectDocs } from './initializeProjectDocs.js';
import { GENERATE_MARKDOWN_DOCS_PROMPT } from '../prompts/markdown-docs.prompt.js';

export const generateDocsTool = {
	name: 'generate_markdown_docs',
	description: 'Generates professional Markdown documentation.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${MARKDOWN_OUTPUT_PROMPT}\n\n${GENERATE_MARKDOWN_DOCS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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

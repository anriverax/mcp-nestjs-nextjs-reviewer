import { z } from 'zod';
import { HEXAGONAL_CHECK_PROMPT } from '../../prompts/nestjs/hexagonal.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { autoInitializeProjectDocs } from '../initializeProjectDocs.js';

export const hexagonalCheckTool = {
	name: 'hexagonal_architecture_check',
	description: 'Checks hexagonal architecture compliance.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${MARKDOWN_OUTPUT_PROMPT}\n\n${HEXAGONAL_CHECK_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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

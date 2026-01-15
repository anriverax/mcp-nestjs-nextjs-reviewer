import { HEXAGONAL_CHECK_PROMPT } from '../prompts/nestjs/hexagonal.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../prompts/base/markdown.prompt.js';
import { z } from 'zod';

export const hexagonalCheckTool = {
	name: 'hexagonal_architecture_check',
	description: 'Checks hexagonal architecture compliance.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${MARKDOWN_OUTPUT_PROMPT}\n\n${HEXAGONAL_CHECK_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

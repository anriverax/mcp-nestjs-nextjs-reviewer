import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { DDD_BOUNDARY_PROMPT } from '../../prompts/nestjs/ddd.prompt.js';
export const dddBoundaryCheckTool = {
	name: 'ddd_boundary_check',
	description: 'Analyzes DDD boundary violations.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${MARKDOWN_OUTPUT_PROMPT}\n\n${DDD_BOUNDARY_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

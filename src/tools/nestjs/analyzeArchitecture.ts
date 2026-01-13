import { z } from 'zod';
import { BASE_NESTJS_REVIEW_PROMPT } from '../../prompts/base/base-nestjs.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { ANALYZE_ARCHITECTURE_PROMPT } from '../../prompts/nestjs/architecture.prompt.js';

export const analyzeArchitectureTool = {
	name: 'analyze_architecture',
	description: 'Analyzes overall NestJS architecture.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${BASE_NESTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${ANALYZE_ARCHITECTURE_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

import { z } from 'zod';
import { BASE_NESTJS_REVIEW_PROMPT } from '../../prompts/base/base-nestjs.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { REVIEW_NESTJS_PROMPT } from '../../prompts/nestjs/review.prompt.js';

export const reviewNestCodeTool = {
	name: 'review_nestjs_code',
	description: 'Performs a detailed technical review of NestJS code.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${BASE_NESTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${REVIEW_NESTJS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

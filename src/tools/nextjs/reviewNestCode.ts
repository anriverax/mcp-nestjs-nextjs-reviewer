import { z } from 'zod';
import { BASE_NEXTJS_REVIEW_PROMPT } from '../../prompts/base/base-nextjs.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { REVIEW_NEXTJS_PROMPT } from '../../prompts/nextjs/review.prompt.js';

export const reviewNextjsCodeTool = {
	name: 'review_nextjs_code',
	description: 'Performs a detailed technical review of NextJS code.',
	inputSchema: z.object({
		code: z.string().describe('NextJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${BASE_NEXTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${REVIEW_NEXTJS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

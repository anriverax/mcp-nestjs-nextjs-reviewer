import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { BASE_NEXTJS_REVIEW_PROMPT } from '../../prompts/base/base-nextjs.prompt.js';
import { PERFORMANCE_NEXTJS_PROMPT } from '../../prompts/nextjs/performance.prompt.js';

export const performanceNextjsReviewTool = {
	name: 'performance_nextjs_review',
	description: 'Performance review for Next.js',
	inputSchema: z.object({
		code: z.string().describe('NextJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${BASE_NEXTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${PERFORMANCE_NEXTJS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

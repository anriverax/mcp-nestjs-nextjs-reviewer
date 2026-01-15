import { z } from 'zod';
import { BASE_NESTJS_REVIEW_PROMPT } from '../../prompts/base/base-nestjs.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { SECURITY_REVIEW_PROMPT } from '../../prompts/nestjs/security.prompt.js';
import { autoInitializeProjectDocs } from '../initializeProjectDocs.js';

export const securityReviewTool = {
	name: 'security_review',
	description: 'Performs a security-focused review.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${BASE_NESTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${SECURITY_REVIEW_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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

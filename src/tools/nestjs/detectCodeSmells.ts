import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { CODE_SMELLS_PROMPT } from '../../prompts/nestjs/smell.prompt.js';
import { autoInitializeProjectDocs } from '../initializeProjectDocs.js';

export const detectCodeSmellsTool = {
	name: 'detect_code_smells',
	description: 'Detects code smells in NestJS code.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${MARKDOWN_OUTPUT_PROMPT}\n\n${CODE_SMELLS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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

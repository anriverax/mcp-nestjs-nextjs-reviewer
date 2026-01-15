import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { SMELLS_NEXTJS_PROMPT } from '../../prompts/nextjs/smells.prompt.js';

export const detectNextjsCodeSmellsTool = {
	name: 'detect_nextjs_code_smells',
	description: 'Detects code smells in NextJS code.',
	inputSchema: z.object({
		code: z.string().describe('NextJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${MARKDOWN_OUTPUT_PROMPT}\n\n${SMELLS_NEXTJS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};

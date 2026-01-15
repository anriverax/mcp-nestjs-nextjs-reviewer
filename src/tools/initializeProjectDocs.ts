import { promises as fs } from 'fs';
import { join, resolve } from 'path';
import { z } from 'zod';

interface DocDefinition {
	filename: string;
	title: string;
	description: string;
	framework: 'nestjs' | 'nextjs' | 'shared';
}

const DOC_DEFINITIONS: DocDefinition[] = [
	// NestJS Docs
	{
		filename: 'nestjs-review.md',
		title: 'NestJS - Revisión de Código',
		description: 'Análisis técnico detallado del código NestJS.',
		framework: 'nestjs',
	},
	{
		filename: 'nestjs-architecture.md',
		title: 'NestJS - Análisis de Arquitectura',
		description: 'Evaluación de la arquitectura general de la aplicación NestJS.',
		framework: 'nestjs',
	},
	{
		filename: 'nestjs-code-smells.md',
		title: 'NestJS - Detección de Code Smells',
		description: 'Identificación de problemas de calidad de código en NestJS.',
		framework: 'nestjs',
	},
	{
		filename: 'nestjs-security.md',
		title: 'NestJS - Revisión de Seguridad',
		description: 'Análisis de vulnerabilidades y riesgos de seguridad en NestJS.',
		framework: 'nestjs',
	},
	{
		filename: 'nestjs-ddd.md',
		title: 'NestJS - Análisis DDD',
		description: 'Validación de principios de Domain-Driven Design en NestJS.',
		framework: 'nestjs',
	},
	{
		filename: 'nestjs-hexagonal.md',
		title: 'NestJS - Arquitectura Hexagonal',
		description: 'Evaluación de cumplimiento con patrones de arquitectura hexagonal.',
		framework: 'nestjs',
	},

	// NextJS Docs
	{
		filename: 'nextjs-review.md',
		title: 'Next.js - Revisión de Código',
		description: 'Análisis técnico detallado del código Next.js.',
		framework: 'nextjs',
	},
	{
		filename: 'nextjs-architecture.md',
		title: 'Next.js - Análisis de Arquitectura',
		description: 'Evaluación de la arquitectura general de la aplicación Next.js.',
		framework: 'nextjs',
	},
	{
		filename: 'nextjs-code-smells.md',
		title: 'Next.js - Detección de Code Smells',
		description: 'Identificación de problemas de calidad de código en Next.js.',
		framework: 'nextjs',
	},
	{
		filename: 'nextjs-security.md',
		title: 'Next.js - Revisión de Seguridad',
		description: 'Análisis de vulnerabilidades y riesgos de seguridad en Next.js.',
		framework: 'nextjs',
	},
	{
		filename: 'nextjs-performance.md',
		title: 'Next.js - Revisión de Rendimiento',
		description: 'Análisis de optimización de rendimiento en aplicaciones Next.js.',
		framework: 'nextjs',
	},
];

async function initializeDocsInPath(projectRoot: string): Promise<string> {
	try {
		const docsDir = join(projectRoot, 'docs');

		// Crear la carpeta docs si no existe
		await fs.mkdir(docsDir, { recursive: true });

		// Crear o actualizar cada archivo de documentación
		for (const doc of DOC_DEFINITIONS) {
			const filePath = join(docsDir, doc.filename);
			const content = generateDocTemplate(doc);

			try {
				await fs.access(filePath);
				// El archivo existe, no lo sobrescribimos
				console.error(`[MCP] Documentación encontrada: ${doc.filename}`);
			} catch {
				// El archivo no existe, lo creamos
				await fs.writeFile(filePath, content, 'utf-8');
				console.error(`[MCP] Documentación creada: ${doc.filename}`);
			}
		}

		// Crear un índice de documentación
		await createDocsIndex(docsDir);

		const message = `✅ Carpeta de documentación inicializada en: ${docsDir}`;
		console.error(`[MCP] ${message}`);
		return message;
	} catch (error) {
		const errorMessage = `❌ Error al inicializar documentación: ${
			error instanceof Error ? error.message : String(error)
		}`;
		console.error(`[MCP] ${errorMessage}`);
		throw error;
	}
}

function generateDocTemplate(doc: DocDefinition): string {
	return `# ${doc.title}

## Descripción
${doc.description}

## Resumen
Esta documentación se genera automáticamente cuando el MCP se ejecuta en tu proyecto.

## Cómo Usar
1. Ejecuta el MCP en tu proyecto
2. Las herramientas disponibles analizarán tu código
3. Los resultados se mostrarán en esta documentación

### Framework: ${doc.framework.toUpperCase()}

---

*Esta documentación fue generada automáticamente por MCP NestJS/NextJS Reviewer*
`;
}

async function createDocsIndex(docsDir: string): Promise<void> {
	const indexPath = join(docsDir, 'README.md');

	const nestjsDocs = DOC_DEFINITIONS.filter((d) => d.framework === 'nestjs');
	const nextjsDocs = DOC_DEFINITIONS.filter((d) => d.framework === 'nextjs');

	const nestjsLinks = nestjsDocs.map((d) => `- [${d.title}](./${d.filename})`).join('\n');

	const nextjsLinks = nextjsDocs.map((d) => `- [${d.title}](./${d.filename})`).join('\n');

	const indexContent = `# Documentación del Proyecto

Documentación generada automáticamente por **MCP NestJS/NextJS Reviewer**.

## NestJS

${nestjsLinks}

## Next.js

${nextjsLinks}

---

*Actualizado: ${new Date().toLocaleString('es-ES')}*
`;

	try {
		await fs.access(indexPath);
		// El archivo existe, lo actualizamos con la nueva fecha
		await fs.writeFile(indexPath, indexContent, 'utf-8');
		console.error('[MCP] Índice de documentación actualizado: README.md');
	} catch {
		// El archivo no existe, lo creamos
		await fs.writeFile(indexPath, indexContent, 'utf-8');
		console.error('[MCP] Índice de documentación creado: README.md');
	}
}

export const initializeProjectDocsTool = {
	name: 'initialize_project_docs',
	description:
		'Initialize documentation structure in your project. Creates a docs/ folder with templates for all NestJS and Next.js analysis types. Use this in your project root directory.',
	inputSchema: z.object({
		projectPath: z
			.string()
			.describe(
				'The path to your project root (e.g., /path/to/myproject, C:\\Users\\YourName\\projects\\myproject)'
			),
	}),

	async execute({ projectPath }: { projectPath: string }, _extra: any) {
		try {
			const result = await initializeDocsInPath(projectPath);
			return {
				content: [
					{
						type: 'text' as const,
						text: `# Documentation Initialization\n\n${result}\n\n## What was created:\n\n- **docs/README.md** - Index of all documentation\n- **docs/nestjs-*.md** - NestJS analysis templates\n- **docs/nextjs-*.md** - Next.js analysis templates\n\n## Next steps:\n\n1. The docs folder is now ready in your project\n2. You can safely edit these files - they won't be overwritten\n3. Run analysis tools to populate the documentation with results`,
					},
				],
			};
		} catch (error) {
			return {
				content: [
					{
						type: 'text' as const,
						text: `# Error\n\nFailed to initialize documentation: ${
							error instanceof Error ? error.message : String(error)
						}`,
					},
				],
			};
		}
	},
};

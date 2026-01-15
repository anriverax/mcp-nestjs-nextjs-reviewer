# Mejoras de Consistencia para MCP Reviewer

## Problema Identificado

El MCP estaba dando respuestas inconsistentes cuando se ejecutaba el mismo análisis múltiples veces sobre el mismo código. Esto es común en sistemas que usan modelos de IA (LLMs) sin configuración de determinismo.

## Cambios Realizados

### 1. **Prompts Mejorados** ✅

Se han actualizado todos los prompts base para incluir:

- **Instrucciones de determinismo**: Explícitamente pide que la respuesta sea reproducible
- **Estructura fija**: Define un orden exacto para cada análisis
- **Formato consistente**: Establece convenciones de Markdown obligatorias
- **Validación de respuestas**: Pide estados consistentes (GOOD ✓ | NEEDS IMPROVEMENT ⚠️ | PROBLEMATIC ✗)

**Archivos modificados:**

- `src/prompts/base/base-nestjs.prompt.ts`
- `src/prompts/base/base-nextjs.prompt.ts`
- `src/prompts/nestjs/review.prompt.ts`
- `src/prompts/nextjs/review.prompt.ts`
- `src/prompts/base/markdown.prompt.ts`

### 2. **Pasos Siguientes Recomendados**

Para **máxima consistencia**, deberías implementar:

#### A. Temperatura = 0 (Recomendado - Determinismo Total)

En la configuración de VS Code o Copilot Chat:

```json
{
	"temperature": 0,
	"top_p": 1
}
```

Esto asegura que el modelo siempre elige la respuesta más probable, sin variabilidad.

#### B. Cache de Respuestas (Opcional pero útil)

Si Copilot lo soporta, agregar caché de respuestas para el mismo código:

```typescript
// En tools/nestjs/reviewNestCode.ts (ejemplo)
const codeHash = createHash('sha256').update(code).digest('hex');
const cacheKey = `review_nestjs_${codeHash}`;

// Verificar si ya existe en cache
if (responseCache.has(cacheKey)) {
	return responseCache.get(cacheKey);
}
```

#### C. Validación Post-Generación

Agregar validación para asegurar que la respuesta cumple con el formato esperado:

```typescript
export function validateStructuredResponse(response: string, analysisType: string) {
	const requiredSections = getRequiredSections(analysisType);

	for (const section of requiredSections) {
		if (!response.includes(`## ${section}`)) {
			throw new Error(`Missing required section: ${section}`);
		}
	}

	// Verificar estados válidos
	const validStatuses = ['GOOD ✓', 'NEEDS IMPROVEMENT ⚠️', 'PROBLEMATIC ✗'];
	const hasStatus = validStatuses.some((status) => response.includes(status));

	if (!hasStatus) {
		throw new Error(
			'Response must include status indicators (GOOD, NEEDS IMPROVEMENT, PROBLEMATIC)'
		);
	}

	return true;
}
```

#### D. Versionamiento de Prompts

Agregar versionamiento para rastrear cambios de prompts que afecten resultados:

```typescript
export const REVIEW_NESTJS_PROMPT_V2 = `...`;
export const PROMPT_VERSION = '2.0';
```

Esto permite identificar si cambios en el prompt causaron variaciones.

### 3. **Testing de Consistencia**

Crear un script de test para validar reproducibilidad:

```typescript
// test/consistency.test.ts
import { reviewNestCodeTool } from '../src/tools/nestjs/reviewNestCode';

const testCode = `
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.findAll();
  }
}
`;

async function testConsistency() {
	const result1 = await reviewNestCodeTool.execute({ code: testCode }, {});
	const result2 = await reviewNestCodeTool.execute({ code: testCode }, {});

	// Comparar estructuras (ignorar timestamps)
	const text1 = extractStructure(result1.content[0].text);
	const text2 = extractStructure(result2.content[0].text);

	if (text1 !== text2) {
		console.error('CONSISTENCY FAILURE: Different outputs for same code');
		console.log('Output 1:', text1);
		console.log('Output 2:', text2);
	} else {
		console.log('✅ Consistency test passed');
	}
}
```

Ejecutar con: `npm run test:consistency`

## Cómo Verificar que Funciona

1. **Compila el proyecto:**

   ```bash
   npm run build
   ```

2. **Reinicia VS Code completamente**

3. **Prueba con el mismo código 2 veces:**

   - Copia el mismo fragmento de código
   - Ejecuta `@office-nestjs-nextjs-reviewer review_nestjs_code`
   - Espera a que termine
   - Repite con el mismo código
   - **Las respuestas deben tener la misma estructura y conclusiones**

4. **Verifica el formato:**
   - Busca los indicadores: `GOOD ✓`, `NEEDS IMPROVEMENT ⚠️`, `PROBLEMATIC ✗`
   - Verifica que las secciones estén siempre en el mismo orden
   - Confirma que el "Impact level" está presente

## Próximos Pasos

Para implementar **máxima consistencia**, sugiero:

1. ✅ **YA HECHO**: Mejorar prompts (COMPLETADO)
2. **TODO**: Implementar validación de respuestas post-generación
3. **TODO**: Agregar tests de consistencia
4. **TODO**: Configurar temperatura = 0 en Copilot
5. **TODO**: Agregar caché opcional para evitar repetir análisis

## Recursos

- [Claude API Temperature](https://docs.anthropic.com/en/docs/build-with-claude/temperature)
- [MCP Best Practices](https://modelcontextprotocol.io/docs)
- [NestJS Architecture Guidelines](https://docs.nestjs.com/modules)

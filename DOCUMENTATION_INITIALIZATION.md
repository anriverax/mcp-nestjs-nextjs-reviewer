# Inicialización Automática de Documentación

## ¿Qué hace esta característica?

Cuando ejecutas el MCP en tu proyecto, se crea automáticamente una carpeta `docs` con archivos de documentación en markdown. Esto ocurre para cada proyecto donde uses el MCP, ya sea `primeraInfancia`, `coffee` o cualquier otro.

## Estructura generada

```
tu-proyecto/
├── docs/
│   ├── README.md (índice de documentación)
│   ├── nestjs-review.md
│   ├── nestjs-architecture.md
│   ├── nestjs-code-smells.md
│   ├── nestjs-security.md
│   ├── nestjs-ddd.md
│   ├── nestjs-hexagonal.md
│   ├── nextjs-review.md
│   ├── nextjs-architecture.md
│   ├── nextjs-code-smells.md
│   ├── nextjs-security.md
│   └── nextjs-performance.md
```

## Comportamiento

1. **Primera ejecución**: Se crea la carpeta `docs` con todos los archivos de plantilla
2. **Ejecuciones posteriores**:
   - Los archivos existentes no se sobrescriben (preservan tu contenido)
   - Se actualiza el `README.md` con la fecha actual
   - Se crean los archivos faltantes si los eliminas

## Archivos generados

### NestJS

- **nestjs-review.md**: Análisis técnico detallado del código
- **nestjs-architecture.md**: Evaluación de la arquitectura
- **nestjs-code-smells.md**: Detección de problemas de calidad
- **nestjs-security.md**: Análisis de vulnerabilidades
- **nestjs-ddd.md**: Validación de principios Domain-Driven Design
- **nestjs-hexagonal.md**: Evaluación de arquitectura hexagonal

### Next.js

- **nextjs-review.md**: Análisis técnico detallado del código
- **nextjs-architecture.md**: Evaluación de la arquitectura
- **nextjs-code-smells.md**: Detección de problemas de calidad
- **nextjs-security.md**: Análisis de vulnerabilidades
- **nextjs-performance.md**: Análisis de rendimiento

### Índice

- **README.md**: Índice central con enlaces a toda la documentación

## Modificación de archivos

Puedes editar cualquier archivo en la carpeta `docs/` sin preocuparte de que se sobrescriba. Los cambios se preservarán en futuras ejecuciones del MCP.

## Cómo usar

1. Ejecuta el MCP en tu proyecto
2. Se generará automáticamente la carpeta `docs`
3. Consulta el `docs/README.md` para ver el índice
4. Edita los archivos según tus necesidades
5. El MCP completará la información cuando analices el código

## Ejemplo de ejecución

```bash
# En tu proyecto (primeraInfancia, coffee, etc.)
npm run build
npm start
```

Verás un mensaje como:

```
[MCP] Documentación creada: nestjs-review.md
[MCP] Documentación creada: nestjs-architecture.md
...
[MCP] Carpeta de documentación inicializada en: /ruta/a/tu/proyecto/docs
```

---

_Implementado automáticamente en el servidor MCP_

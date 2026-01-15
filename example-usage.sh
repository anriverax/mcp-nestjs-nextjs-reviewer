#!/bin/bash

# Script de ejemplo para probar la funcionalidad de inicialización automática de docs
# Este script muestra cómo usar el MCP en un nuevo proyecto

# Crear un proyecto de prueba
mkdir -p ~/projects/example-project
cd ~/projects/example-project

# Copiar o instalar el MCP
npm install mcp-nestjs-nextjs-reviewer

# Ejecutar el MCP
npm run setup:mcp

# El MCP creará automáticamente:
# ~/projects/example-project/docs/
#   ├── README.md
#   ├── nestjs-review.md
#   ├── nestjs-architecture.md
#   ├── nestjs-code-smells.md
#   ├── nestjs-security.md
#   ├── nestjs-ddd.md
#   ├── nestjs-hexagonal.md
#   ├── nextjs-review.md
#   ├── nextjs-architecture.md
#   ├── nextjs-code-smells.md
#   ├── nextjs-security.md
#   └── nextjs-performance.md

echo "Verificar que la carpeta docs fue creada:"
ls -la ~/projects/example-project/docs/

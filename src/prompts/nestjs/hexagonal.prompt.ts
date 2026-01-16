export const HEXAGONAL_CHECK_PROMPT = `
Analyze whether the code respects hexagonal (ports & adapters) architecture principles.

Validate:
- Business logic isolation: domain layer free from framework/library dependencies
- Clear separation between domain, ports (interfaces), and adapters layers
- Dependency direction: outer layers depend on inner layers, never reverse
- No circular dependencies between layers
- Proper use of interfaces (ports) to decouple layers
- Module naming clearly reflects its layer (domain, ports, adapters)

Provide:
- Layer violations with specific code examples and impact
- Recommended restructuring to achieve proper separation
- Module and interface naming improvements
`;

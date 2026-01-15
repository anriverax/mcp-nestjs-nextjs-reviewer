export const HEXAGONAL_CHECK_PROMPT = `
Analyze whether the code respects hexagonal (ports & adapters) architecture principles.

Validate:
- Business logic isolation from framework code
- Framework/library dependency leakage into domain layer
- Clear separation between domain, ports, and adapters
- Dependency direction (outer layers depend on inner layers, never reverse)
- Module naming reflects its layer (domain, ports, adapters)
- No circular dependencies between layers
- Proper use of interfaces (ports) to decouple layers

Provide:
- Layer violations with specific code examples
- Recommended restructuring to achieve proper separation
- Naming improvements for layers and modules
`;

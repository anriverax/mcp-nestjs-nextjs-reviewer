export const DDD_BOUNDARY_PROMPT = `
Analyze the code for Domain-Driven Design (DDD) boundary violations and architecture.

Review:
- Bounded context separation and encapsulation: proper isolation between modules, no improper entity sharing
- Cross-module/bounded context dependencies: unidirectional flow, no circular dependencies
- Domain invariants and validation: business rules enforced in entities and aggregates
- Aggregate design: proper root entity identification, transaction boundaries
- Module/folder structure alignment with business domains
- Naming clarity of domain entities, value objects, and bounded contexts

Provide:
- Specific violations with code locations and business impact
- Recommended refactoring to respect boundaries
- Clear explanation of each DDD principle violated
`;

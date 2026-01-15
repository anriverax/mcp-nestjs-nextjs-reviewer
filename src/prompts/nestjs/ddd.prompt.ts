export const DDD_BOUNDARY_PROMPT = `
Analyze the code for Domain-Driven Design (DDD) boundary violations and architecture.

Review:
- Bounded context separation and encapsulation
- Improper entity sharing between modules
- Cross-module/bounded context dependencies
- Missing domain invariants and validation
- Naming clarity of domain entities and value objects
- Module/folder structure alignment with business domains
- Aggregates design and root entity identification

Provide:
- Specific violations with code locations
- Recommended refactoring to respect boundaries
- Clear explanation of each DDD principle violated
`;

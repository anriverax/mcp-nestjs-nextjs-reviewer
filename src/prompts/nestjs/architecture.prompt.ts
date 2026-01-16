export const ANALYZE_ARCHITECTURE_PROMPT = `
Analyze the overall architecture of the provided NestJS code.

Focus on:
- Module responsibilities: clear separation of concerns, single responsibility principle
- Dependency direction: unidirectional flow, no circular dependencies
- Coupling and cohesion: module isolation, appropriate level of abstraction
- Layer separation: proper boundaries between controllers, services, repositories
- Scalability risks: potential bottlenecks, monolithic patterns, testability issues

Provide:
- Current architecture assessment with specific examples
- Identified problems with locations and impact
- Recommendations for improvement
`;

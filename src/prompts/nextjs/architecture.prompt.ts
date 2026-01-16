export const ANALYZE_NEXTJS_ARCHITECTURE_PROMPT = `
Analyze the overall architecture of the provided Next.js code.

Focus on:
- App Router usage: proper file structure, route organization, nested layouts
- Component boundaries: clear separation between server and client components
- Server vs Client components: appropriate use of each, data fetching location
- Data fetching patterns: efficient strategies, avoiding waterfall requests, caching

Provide:
- Current architecture assessment with specific examples
- Identified problems with locations and impact
- Recommendations for improvement
`;

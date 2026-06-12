---
title: "EF Core vs Dapper — When to Use Which"
date: 2026-06-12 10:00:00 +0200
categories: [C# and .NET, Entity Framework]
tags: [csharp, dotnet, efcore, dapper, orm, data-access]
---

*Content coming soon.*

Two excellent data-access tools, two very different philosophies. This post breaks down when each one earns its place in a production codebase.

## Outline

- What EF Core does well — migrations, change tracking, LINQ queries
- What Dapper does well — raw SQL, stored procs, maximum performance
- The hidden cost of EF Core: N+1 queries, lazy loading traps
- The hidden cost of Dapper: manual mapping, no migration story
- Using both in the same project — a clean pattern
- Real-world decision guide: reads vs writes, team size, complexity
- Performance benchmarks: where the gap actually matters

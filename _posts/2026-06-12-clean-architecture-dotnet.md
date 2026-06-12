---
title: "Clean Architecture in .NET — A Practical Guide"
date: 2026-06-12 13:00:00 +0200
categories: [Architecture, Clean Architecture]
tags: [dotnet, clean-architecture, architecture, csharp, solid, design-patterns]
---

*Content coming soon.*

Clean Architecture is widely discussed but inconsistently applied. This post cuts through the theory and shows how it looks in a real .NET project.

## Outline

- The core idea: dependency direction and the dependency inversion principle
- The four layers: Domain, Application, Infrastructure, Presentation
- What belongs in each layer — and what doesn't
- The role of interfaces and abstractions
- Mapping between layers: AutoMapper, manual mappers, record projections
- MediatR and the CQRS pattern inside Clean Architecture
- Common mistakes: over-engineering small systems, leaking infrastructure concerns
- When Clean Architecture is the right call and when it isn't

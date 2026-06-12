---
title: "Relational Database Schema Design — Getting It Right"
date: 2026-06-12 12:00:00 +0200
categories: [Database, Schema Design]
tags: [sql-server, database, schema, normalisation, data-modelling]
---

*Content coming soon.*

A well-designed schema is the difference between a system that scales and one that becomes impossible to change. This post covers the principles I apply on every project.

## Outline

- Normalisation: 1NF through 3NF with real examples
- When to denormalise and why it's a deliberate trade-off
- Naming conventions — consistency saves hours of debugging
- Primary keys: identity vs GUID vs natural keys
- Foreign keys and referential integrity — always enforce at the DB level
- Soft deletes: the right way and the wrong way
- Audit columns: CreatedAt, UpdatedAt, CreatedBy
- Designing for change — avoiding schema lock-in

---
title: "SQL Server Performance Tuning — Where to Start"
date: 2026-06-12 11:00:00 +0200
categories: [Database, SQL Server]
tags: [sql-server, database, performance, indexing, query-optimization]
---

*Content coming soon.*

Most SQL Server performance problems have the same handful of root causes. This post covers the diagnostic process and the fixes that make the biggest difference.

## Outline

- Reading an execution plan — what to look for first
- Index types: clustered, non-clustered, covering, filtered
- The index tipping point — why more isn't always better
- Statistics and why they go stale
- Parameter sniffing — the silent killer in stored procedures
- Identifying blocking and deadlocks with sys.dm_exec_requests
- TempDB pressure and how to spot it
- Query rewrites that consistently improve performance

---
title: "Messaging and Event-Driven Architecture in .NET"
date: 2026-06-12 20:00:00 +0200
categories: [Architecture, Event-Driven]
tags: [dotnet, messaging, rabbitmq, azure-service-bus, events, microservices]
---

*Content coming soon.*

When synchronous APIs aren't enough — how to build loosely coupled, resilient systems using messaging in .NET.

## Outline

- Why messaging: decoupling, resilience, scalability
- Events vs commands vs queries — the distinction in event-driven systems
- RabbitMQ fundamentals: exchanges, queues, bindings, routing keys
- Azure Service Bus: queues vs topics, dead-letter queues
- MassTransit: abstracting the broker in .NET
- Consumer patterns: at-least-once delivery and idempotency
- Handling poison messages and dead-lettering
- Outbox pattern: guaranteed delivery without dual writes
- When NOT to use messaging — the complexity trade-off

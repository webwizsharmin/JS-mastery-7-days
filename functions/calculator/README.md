# Calculator:A High Reliability Arithmetic Engine

This is a lightweight, zero dependency JavaScript utility designed for deterministic basic arithmetic. while the logic is traightforward, the implementation focuses on defensive programming, strict type safety and graceful error handling for production environments.

<hr>

## Overview

In production systems, a simple calculator error or an unhandled Infinity result can crash a financial dashboard or corrupt a data processing pipeline. This project demonstrates how to wrap core mathematical logic in a "fail-fast" architectural pattern, ensuring that invalid data is caught before it can propagate through a system.

## Tech Stack & "Why"

- vanila JavaScript(ES6+): chosen for zero dependency overhead, making it easily portable across Node.js and Browser environments.
- Defensive Design: Prioritized over type coercion to prevent bugs caused by "truthy/falsy" values or string to number auto-conversion

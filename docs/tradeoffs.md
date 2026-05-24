# Tradeoffs

## Database

SQLite selected:

Pros:

- Lightweight
- Easy local setup
- Sufficient for assessment

Cons:

- Less suitable for large production workloads

---

## Testing

Unit tests prioritized:

Pros:

- Fast
- Deterministic
- Easy to maintain

Cons:

- Limited database coverage

---

## Pagination

Server-side pagination chosen:

Pros:

- Better performance for 10,000 employees

Cons:

- Slightly more API complexity
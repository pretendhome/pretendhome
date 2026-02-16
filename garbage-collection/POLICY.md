# Garbage Collection Policy (v1.0)

## Scope

This policy governs the single repository-level archive folder:

- `garbage-collection/`

No implementation-level or palette-level garbage folders should be created.

## Purpose

`garbage-collection/` is for superseded, draft, duplicate, or accidental files that should not stay in active working paths.

It is an archive area, not an active source-of-truth location.

## Required Structure

Keep original provenance when moving files:

- `garbage-collection/palette/...`
- `garbage-collection/implementations/<implementation-name>/...`

## What Goes Here

- Superseded drafts
- One-off exports or scratch notes
- Misplaced files created during automation or manual operations
- Legacy artifacts retained temporarily for traceability

## What Must NOT Go Here

- Canonical Tier files (`palette/.kiro/steering/...`)
- Active implementation runtime files (`implementations/*/fde/...`)
- Active agent fixtures or validation assets
- Secrets (API keys, credentials, tokens) in plain text

If a secret is found, redact it immediately before keeping or remove the file.

## Retention Rule

- Default retention target: 30 days
- Review on each significant cleanup cycle
- Remove items when no longer needed for traceability

## Operating Rules

1. Move, do not copy, from active paths into `garbage-collection/`.
2. Preserve folder context to show source location.
3. Keep this folder outside normal implementation workflows.
4. Do not reference files here as authoritative inputs.
5. If in doubt, log a brief note in `palette/decisions.md` before deleting high-impact archives.

## Naming Note

Historical references to `garbage_collection` may still exist in older docs.
The canonical name is `garbage-collection`.

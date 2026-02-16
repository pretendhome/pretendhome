# Palette Package Builder

This script creates a shareable ZIP package of the Palette toolkit with all current updates.

## Usage

```bash
./build-palette-package.sh
```

## What It Does

1. Removes old package (if exists)
2. Creates fresh ZIP from current `palette/` directory
3. Excludes:
   - `.git/` (version control)
   - `garbage_collection/` (legacy files)
   - `kgdrs/` (experimental tracking)
4. Reports package size and contents

## Output

- **File**: `palette-toolkit-v1.0.zip`
- **Location**: Same directory as script
- **Size**: ~298 KB

## When to Run

Run this script whenever you want to share the latest version:
- After updating agents
- After updating documentation
- After adding new features
- Before sharing with others

## Package Contents

The generated ZIP includes:
- 7 agents (Argy, Rex, Theri, Raptor, Yuty, Anky, Para)
- Taxonomy v1.2 (104 RIUs)
- Knowledge library v1.2 (86 questions)
- Three-tier system (palette-core, assumptions, decisions)
- Demo guide with live agent switching
- Quick start guide (README_QUICKSTART.md)
- Installation guide (INSTALL_PALETTE.md)
- Vision document

## Testing the Package

After building:

```bash
# Extract to test directory
mkdir test-palette
cd test-palette
unzip ../palette-toolkit-v1.0.zip

# Verify contents
cd palette/
cat INSTALL_PALETTE.md
```

## Sharing

The generated ZIP is ready to share via:
- Email
- File sharing services
- GitHub releases
- Direct download

Recipients can extract and use immediately with any AI tool (Claude, Cursor, Kiro CLI, etc.).

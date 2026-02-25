# Commands used in this session

Shell and Git commands run during the session (project root: `simple_react_app`).

## Dev server

```bash
# Start Vite dev server
npm run dev

# Restart app (kill existing Vite, then start)
pkill -f "vite" 2>/dev/null; sleep 1; cd /Users/rhaynes/Documents/bang/simple_react_app && npm run dev
```

## Git – commit & push

```bash
# Commit and push (example)
git add src/App.jsx && git commit -m "Increase button reset timeout to 10s" && git push

git add src/App.jsx && git commit -m "Reduce button reset timeout to 5s" && git push

git add src/App.css && git commit -m "Change background to green gradient" && git push

git add index.html src/App.css src/App.jsx && git commit -m "Add Vibe Code Demo title, Space Grotesk font, lighter green background" && git push origin demo

git add src/App.css src/App.jsx && git commit -m "Add apology flow: disable button after press, show 'Are you sorry' and sorry button, then 'ok, then' and reset" && git push origin demo
```

## Git – branches & sync

```bash
# Create and switch to branch demo (after committing on main)
git checkout -b demo

# Publish demo branch
git push -u origin demo

# Switch back to main
git checkout main

# Sync local main with remote
git fetch origin && git checkout main && git pull origin main
```

## Git – status & info

```bash
git status
git branch --show-current
git diff src/App.jsx
```

## Pull request

```bash
gh pr create --base main --head demo --title "Merge demo into main" --body "Vibe Code Demo: title, Space Grotesk font, lighter green background, apology flow (Are you sorry / Yes I'm very sorry / ok then)."
```

## Endor (via MCP)

- **Scan:** `scan` tool with `path`: project path, `scan_types`: `['vulnerabilities', 'secrets', 'dependencies']`
- **Get resource:** `get_resource` with `resource_type`: `Finding`, `uuid`: finding UUID

## Other

```bash
# Optional backend (removed later) – was run separately from the app
npm run server
```

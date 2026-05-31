# LD Cares

This folder contains the LD Cares website project.

GitHub repository: https://github.com/msuzann3/ldcares

## Project Notes for Codex

This project may be opened from more than one Mac. Treat GitHub as the source of truth, even if the local folder is synced through iCloud.

Before making changes:

1. Check the current Git status.
2. Pull the latest changes from `origin/main`.
3. Review the relevant files before editing.

After making changes:

1. Test or inspect the changed pages when practical.
2. Commit the changes with a clear message.
3. Push to `origin/main` so the other laptop can pick them up.

When making meaningful edits, update this README with any context that would help a future Codex session or another laptop understand what changed, why it changed, or how to continue safely.

Avoid editing the same project on two Macs at the same time. iCloud may sync files, but GitHub should be used to preserve history and prevent conflicting versions.

## Main Files

- `index.html` - Main site page
- `membership.html` - Membership page
- `mentor-select.html` - Mentor selection page
- `mentor-select.js` - Mentor selection behavior
- `styles.css` - Site styling
- `script.js` - Shared site JavaScript
- `google-apps-script/mentor-selection.gs` - Google Apps Script support file
- `CNAME` - Custom domain configuration

## Local Workflow

Open this folder in Codex:

`/Users/michelle/Documents/_AI-Workspace/Codex/LD Cares`

On Dolly's MacBook Air, Codex may still show the previous Google Drive workspace path:

`/Users/dolly/Library/CloudStorage/GoogleDrive-lentz.michelles@gmail.com/My Drive/LD Cares/New WebSite - Codex`

That path is intentionally a symlink to the iCloud workspace:

`/Users/dolly/Library/Mobile Documents/com~apple~CloudDocs/Documents/_AI-Workspace/Codex/LD Cares`

macOS may display the same iCloud folder as:

`/Users/dolly/Documents/_AI-Workspace/Codex/LD Cares`

Useful Git checks:

```bash
git status
git pull origin main
git push origin main
```

If local files and GitHub ever disagree, stop and compare carefully before overwriting anything.

## Handoff Notes

- 2026-05-31: Removed Cindy Huggett from the password-protected mentor selection page by adding her name to `removedMentorNames` in `mentor-select.js`. The encrypted roster data was not regenerated; the page filters her out after decrypting and also filters any older session-storage roster.

# LD Cares

This folder contains the LD Cares website project.

Working directory on both Macs:

`/Users/dolly/Library/Mobile Documents/com~apple~CloudDocs/Documents/_AI-Workspace/Codex/LD Cares`

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

- 2026-06-05: Updated Brandon Carson's bio in both `index.html` Directors section and the password-protected mentor page data in `mentor-select.js`, then published the full 2026-06-05 bio/headshot batch to GitHub Pages.
- 2026-06-05: Updated Michelle Lentz's Directors headshot on the main page by replacing `assets/directors/michelle-lentz.webp` with the new image from `Michelle-Headshot.png`.
- 2026-06-05: Updated Suzanne Frawley on the password-protected mentor selection page. `assets/mentors/suzanne-frawley.jpg` now uses the new headshot from `Frawley.png`, and `mentor-select.js` applies a post-decryption profile update for her new bio and credentials because the encrypted roster data was not regenerated.
- 2026-06-01: Updated LaQuin Taylor on the password-protected mentor selection page. `assets/mentors/laquin-taylor.jpg` now uses the new headshot, and `mentor-select.js` applies a post-decryption profile update for her new bio because the encrypted roster data was not regenerated.
- 2026-05-31: Removed Cindy Huggett from the password-protected mentor selection page by adding her name to `removedMentorNames` in `mentor-select.js`. The encrypted roster data was not regenerated; the page filters her out after decrypting and also filters any older session-storage roster.

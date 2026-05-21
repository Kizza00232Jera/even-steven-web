# Even Steven — Web Layer

Lightweight Next.js app deployed on Vercel (`even-steven.vercel.app`). No business logic — redirect and static pages only.

## Pages

- `/invite/{token}` — Smart deep link: opens the Even Steven app if installed, otherwise redirects to App Store (iOS) or Play Store (Android)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Architecture

This repo is the web layer only. All business logic lives in the mobile app (`Kizza00232Jera/even-steven`) and Supabase.

The invite redirect uses:
- Server-side User-Agent detection to distinguish iOS / Android / desktop
- Custom URL scheme `evensteven://invite/{token}` to attempt opening the installed app
- A 2.5-second timeout fallback to the App Store / Play Store

## Deploy

Push to `master` → Vercel deploys automatically.

## Development

```bash
npm install
npm run dev
```

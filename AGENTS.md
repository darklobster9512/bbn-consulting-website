<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Translations: each page keeps a `{ de, en }` text object and reads it via `useT` from `src/lib/i18n.tsx` (same URLs, language stored in the browser) — keeps the two language versions side by side and easy to edit.
- Images are real files in public/photos/ referenced as /photos/... (not Lovable asset pointers) — the site is self-hosted on the owner's server where the asset CDN path does not exist.

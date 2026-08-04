# nihonGO!

Mobile practice hub for Japanese drills. Static site — works on GitHub Pages.

## Live site

After Pages is enabled:

`https://benmidwinter.github.io/nihonGO/`

Add that URL to your Home Screen.

## Apps

| Path | Status |
|------|--------|
| [`/`](./index.html) | Home hub |
| [`/kana/`](./kana/) | Hiragana & katakana flashcards |
| [`/phrases/`](./phrases/) | Placeholder for common phrases |

## Local preview

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765`.

## Enable GitHub Pages

1. Repo **Settings → Pages**
2. Source: **GitHub Actions**
3. Save — the deploy workflow publishes on every push to `main`

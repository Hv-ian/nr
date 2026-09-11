# Publishing blog posts

The blog is edited at **https://relopartner.org/admin/**.

Logins are handled by [DecapBridge](https://decapbridge.com/). Writers sign in
with their own email and password, or with Google or Microsoft. They do not
need a GitHub account and never handle a token. Anyone can open the `/admin/`
page, but without an account it shows only the login screen.

## Adding a writer

1. Open the DecapBridge dashboard for this site.
2. Invite them by email address.
3. They get an email, click the link, and set their own password.

That is the whole process. They can reset a forgotten password themselves.
Removing someone from the dashboard revokes their access immediately, with no
change to this repository.

## Writing a post

Click **Blog posts → New**. Each post has three language tabs, `en`, `ru` and
`hy`, across the top.

| Field | Notes |
| --- | --- |
| Title | The headline. Becomes the card title and the page's H1. |
| Short description | One or two sentences. Shown on the card and used by Google. |
| Cover image | Upload once; shared by all three languages. Landscape, 1600px wide or more. |
| Image crop | Which part to keep when the photo is cropped to fit. Use "top" when the subject sits high in the frame, like a flag or a mountain peak. |
| Category | Drives the filter tabs and the category pages. |
| Publication date | Controls ordering; newest first. |
| Feature at the top | Fills the large panel above the grid. Newest wins if several are set. |
| Draft | Saved to the repository but never published. |
| Article | The body. |

Formatting in the body maps onto the design:

- **Heading 2** becomes a section title, and every Heading 2 appears in the
  table of contents beside the article.
- A **numbered list** renders as the numbered step circles.
- A **bulleted list** renders as the blue tick list.
- A **quote block** renders as the highlighted "keep in mind" note.

### A post appears only when all three languages are filled in

This is deliberate. Each article is published at three URLs that point at each
other with `hreflang` tags, telling Google they are translations of one page.
If one language were missing, that relationship would be broken. Fill in all
three tabs, or leave **Draft** ticked until they are ready.

## Publishing

Hit **Save**. That writes a commit to the repository, which starts the GitHub
Actions build. The article is live at `relopartner.org/blog/` about two to
three minutes later. Progress is visible under the repository's Actions tab.

Commits are attributed to the repository owner's GitHub account rather than to
the writer, because **Hide commit author** is enabled in DecapBridge. The
writer's name still appears in the commit message, so you can see who published
what. Turning that setting off makes each writer the commit author instead, at
the cost of listing them as repository contributors.

## Where the files live

```
content/blog/en/<slug>.md     English
content/blog/ru/<slug>.md      Russian
content/blog/hy/<slug>.md      Armenian
public/images/blog/            uploaded cover images
```

The file name is the URL. `content/blog/en/cost-of-living-in-armenia.md`
is served at `/blog/cost-of-living-in-armenia/`.

Posts can equally be written by editing those files directly. The CMS is a
convenience on top of them, not a separate system.

## Maintenance

**The GitHub token.** DecapBridge holds a fine-grained personal access token,
scoped to this repository only, with Contents read and write. It is what commits
posts on a writer's behalf. If it is ever revoked or expires, publishing stops
working but the live site is unaffected. Replace it by generating a new token at
<https://github.com/settings/personal-access-tokens/new> and pasting it into the
DecapBridge site settings; no code change or deploy is needed.

**Keep at least one published post.** The site is a static export, and an empty
blog leaves the article route with no pages to generate, which fails the build.
Use the **Draft** switch to retire a post rather than deleting the last one.

**Decap CMS is pinned** to an exact version in `public/admin/index.html`, so a
new upstream release cannot change the admin panel without a deliberate edit.
DecapBridge's PKCE login needs v3.8.3 or newer.

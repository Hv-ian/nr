# Publishing blog posts

The blog is edited at **https://relopartner.org/admin/**.

There is no separate password database. The admin panel runs entirely in the
browser and saves posts directly into this GitHub repository, so signing in
means proving you have write access to the repository. Anyone can open the
`/admin/` page, but without a valid token it shows only the sign-in screen and
can neither read nor change anything.

## One-time setup for each editor

1. The editor needs a GitHub account, added as a collaborator on `Hv-ian/nr`
   with write access (Settings → Collaborators → Add people).
2. They create a personal access token:
   - GitHub → Settings → Developer settings → Personal access tokens
   - Fine-grained token, repository access limited to `Hv-ian/nr`
   - Repository permissions: **Contents → Read and write**
   - Set an expiry that suits you; the token has to be regenerated after it lapses
3. They open https://relopartner.org/admin/, click **Sign in with Token**, and
   paste it. The token is stored in that browser only and is not sent anywhere
   except GitHub.

Ignore the **Sign in with GitHub** button. Without extra infrastructure it
routes through Netlify's OAuth service, which this project does not use. See
the note in `public/admin/config.yml` if you later want that one-click button:
it needs a small free Cloudflare Worker.

## Writing a post

Click **Blog posts → New**. Each post has three language tabs, `en`, `ru` and
`hy`, across the top.

| Field | Notes |
| --- | --- |
| Title | The headline. Becomes the card title and the page's H1. |
| Short description | One or two sentences. Shown on the card and used by Google. |
| Cover image | Upload once; shared by all three languages. Landscape, 1600px wide or more. |
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

## One caveat

At least one post must be published in all three languages at any time. The
site is a static export, and an empty blog leaves the article route with no
pages to generate, which fails the build. Use the **Draft** switch to retire a
post rather than deleting the last one.

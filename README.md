# salmanadnan-com

**The live site is now in here, under `live-site/`.** Imported 2026-08-23,
byte for byte from `/root/salmanadnan.com` on the VPS, which until that day was
the only copy in existence.

`new-design-reference/` is a separate thing: a proposed redesign, deployed
nowhere. Do not confuse the two.

## What is actually where

Three different versions of this site exist, and no two of them match.

| Version | Where it lives | In git? |
|---|---|---|
| The live site | `/root/salmanadnan.com` on the VPS | **Yes, now.** Mirrored here in `live-site/` since 2026-08-23 |
| An unlisted preview | `/srv/digitalise-agency/second-option/salmanadnan` on the VPS, served at `/second-option-test-it-out/` | **No** |
| `new-design-reference/` | This repository | Yes, and deployed nowhere |

Compared by hashing `index.html` from each: all three differ.

`salmanadnan.com` and `www.salmanadnan.com` both resolve to the VPS and both
answer 200. Caddy serves them from `/root/salmanadnan.com` with a `handle_path`
for the unlisted preview, which carries `X-Robots-Tag: noindex, nofollow` so it
stays reachable by direct link only. That vhost lives in the `auth-digitalise`
repository, at `edge/Caddyfile`, not here.

## What was fixed, and what is still owed

The live site is now in version control. It was not, until 2026-08-23: one
directory on one machine, owned by `ubuntu`, no history, nothing to diff
against.

**What is still owed: nothing syncs the two.** `live-site/` is a snapshot taken
on the day it was imported. Edit the box and this goes stale; edit this and the
box never sees it. Until a deploy path exists, treat the box as authoritative
and re-import after changing it:

```bash
rsync -az --delete --exclude '.git' da:/root/salmanadnan.com/ live-site/
git diff --stat
```

If that diff is ever non-empty when you did not expect it, somebody edited the
live site by hand.

## The deploy workflow is disabled

`.github/workflows-disabled/deploy.yml.disabled` would ship a `[deploy]`-marked
push to `/root/salmanadnan.com` over SSH. It is disabled on purpose, presumably
because this repository does not hold what is live, so running it would
overwrite the real site with a design that is not finished.

Do not enable it until this repository actually contains the live site.

## The reference design

`new-design-reference/` is a proposed redesign: one page, its stylesheet and one
script. It is not launch-ready and says so. `assets/ASSETS.md` lists what is
still needed, starting with the hero photo `assets/salman.jpg`, which the HTML
already references and which is not there. That is a documented gap, not a bug.

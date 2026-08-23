# salmanadnan-com

**This repository is not the live site.** Checked on 2026-08-23, and worth
stating plainly before anyone edits something here expecting it to ship.

## What is actually where

Three different versions of this site exist, and no two of them match.

| Version | Where it lives | In git? |
|---|---|---|
| The live site | `/root/salmanadnan.com` on the VPS | **No.** Not a checkout, not in any repository here |
| An unlisted preview | `/srv/digitalise-agency/second-option/salmanadnan` on the VPS, served at `/second-option-test-it-out/` | **No** |
| `new-design-reference/` | This repository | Yes, and deployed nowhere |

Compared by hashing `index.html` from each: all three differ.

`salmanadnan.com` and `www.salmanadnan.com` both resolve to the VPS and both
answer 200. Caddy serves them from `/root/salmanadnan.com` with a `handle_path`
for the unlisted preview, which carries `X-Robots-Tag: noindex, nofollow` so it
stays reachable by direct link only. That vhost lives in the `auth-digitalise`
repository, at `edge/Caddyfile`, not here.

## The thing worth fixing

**The live site is in no repository at all.** It sits in one directory on one
machine, owned by `ubuntu`, and if that disk goes the site goes with it. There
is no history, nothing to diff against, and no way to tell what changed or when.
That is the same gap that has already cost this estate time on other properties.

Getting it into version control is a small job and nobody has done it.

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

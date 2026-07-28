# Assets checklist — salmanadnan.com

Drop real assets here, then update the HTML as noted.

## Required before launch

| File | Size | Where used | HTML change needed |
|---|---|---|---|
| `salman.jpg` | 1200px tall min, 2:3 ratio | Hero photo left side | Replace `.hero-photo-placeholder` div with `<img src="/assets/salman.jpg" alt="Salman Adnan" style="width:100%;height:100%;object-fit:cover;object-position:top;">` |
| `thumbs/work-1.jpg` | 800x450px | Work grid card 1 | Add `style="background-image:url('/assets/thumbs/work-1.jpg')"` to `.wt1` |
| `thumbs/work-2.jpg` | 800x450px | Work grid card 2 | Same pattern for `.wt2` through `.wt6` |
| `thumbs/work-3.jpg` | 800x450px | Work grid card 3 | |
| `thumbs/work-4.jpg` | 800x450px | Work grid card 4 | |
| `thumbs/work-5.jpg` | 800x450px | Work grid card 5 | |
| `thumbs/work-6.jpg` | 800x450px | Work grid card 6 | |
| `case-1.jpg` | 1200x750px | Case study 1 visual | Add `background-image` to `.cv1` |
| `case-2.jpg` | 1200x750px | Case study 2 visual | Add `background-image` to `.cv2` |
| `favicon.svg` | 32x32 | Browser tab | Add `<link rel="icon" href="/assets/favicon.svg">` in `<head>` |
| `og-image.png` | 1200x630px | Social share | Update `og:image` meta tag |

## Numbers to update

Search for `data-target` in `index.html` (metrics band) and replace all four values with real numbers.
Search for the three `hero-mini-num` divs in the hero and update those too.

## Booking link

Search for `YOUR_CAL_LINK` in `index.html` and replace with the actual booking URL.

## Client names

Three `<!-- UPDATE -->` comments in the work grid and case study sections mark placeholder client entries.

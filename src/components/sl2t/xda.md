# XDA Post — Final (ready to paste)

**Subforum:** Gboard (or Samsung). **Type:** Discussion/Showcase.
**Title:** `I got Gboard's new sign-language-to-text running on four non-Pixel phones. Google has only shipped it on the Pixel 11.`

> Devices confirmed: **Galaxy S23 Ultra (SM-S918U)**, **Galaxy S23 (SM-S911U)**, **Galaxy S26 Ultra (SM-S948U)**, **Galaxy S21+ (SM-G996U)** — plus an ARM64 API-35 emulator built and run on an Apple Silicon Mac.

```bbcode
On Aug 12, 2026, Google DeepMind announced sign-language-to-text (SL2T) in Gboard — "first on Pixel 11, more devices coming soon," with no timeline. Neither the announcement nor the co-authored AISLAC impact report states a hardware requirement.

I'm a Deaf developer, so I tested whether one exists.

[b]What I did[/b]

I removed the client-side gate in Gboard and re-signed it, then tested on four physical phones — none of them Pixels — plus one emulator:

[list]
[*] Galaxy S23 Ultra (SM-S918U, Snapdragon 8 Gen 2, Android 16)
[*] Galaxy S23 (SM-S911U)
[*] Galaxy S26 Ultra (SM-S948U)
[*] Galaxy S21+ (SM-G996U)
[*] ARM64 API-35 emulator, built and run on an Apple Silicon Mac — a separate build/sign pipeline on a different chipmaker entirely
[/list]

[img]https://jgamworks.com/assets/images/sl2t-post/sl2t-onboarding-screen.png[/img]

No root on any of them. On a non-Pixel, stock Gboard receives zero Phenotype flags, so the Signboard module never reports "available." I patched about 8 smali sites (module availability plus a few is-Pixel checks) and re-signed — same 8 patches, same result, on all five targets.

[b]What I observed[/b]

[list]
[*] [code]dumpsys input_method[/code] shows the Signboard extension instantiated on every device.
[*] MediaPipe pose extraction ran on-device, and the cloud recognizer was called.
[*] logcat shows [code]S3Response DONE_SUCCESS[/code], error code 0, on each target.
[*] Screen recording: signing in, English text out — the logcat line only proves the request succeeded, the video shows it actually working.
[/list]

[video]https://jgamworks.com/assets/images/sl2t-post/sl2t-screen-recording.mp4[/video]
[video]https://jgamworks.com/assets/images/sl2t-post/sl2t-emulator-screen-recording.mp4[/video]
REPLACE_ME: dumpsys/logcat capture screenshot — not taken yet, see checklist below.

The Signboard split ships an arm64-v8a native lib and needs Android 12+ (minSdk 32). Across five independent targets on two unrelated chipmakers, I found no Tensor, GPU, or region dependency. That's not proof for every device on earth, but it's a lot more than "works once."

[b]Install caveat[/b]

Where Gboard is a normal user app (all four phones above), swapping it in is a one-line [code]adb install[/code]. Where the OEM ships it as a locked [code]/product[/code] prebuilt (Pixel 8, and a stock emulator image), the signature mismatch means it needs root — my emulator repro sidestepped this by building a custom AVD with the patched Gboard pre-installed via [code]-writable-system[/code], rather than swapping it into a stock image.

[b]Why this matters[/b]

SL2T is the first time the platform itself translates sign language for the user. Deaf communication has long depended on human relays: the TTY (1964), then video relay services. Sign languages are the native languages of a linguistic minority, and access to them is a right under UN CRPD Art. 30(4).

The gate I removed was client-side, and the server accepted input from every one of these non-Pixel devices. That's a fact about this feature. Whether it's deliberate or a staged rollout, Google hasn't said.

[b]The earlier promise[/b]

In Jun 2025, Google announced SignGemma as "an open model coming to the Gemma family" later that year. Forum replies in Oct 2025 and Jan 2026 gave no release or timeline. On Aug 12, 2026, a closed, Pixel-first model shipped instead. I'm not claiming SL2T [i]is[/i] SignGemma — only that the open model was promised and hasn't appeared. The AISLAC report, co-signed by NAD, WFD, RIT/NTID and DPAN, lists open-weights SignGemma as "exploring… in consultation with the AISLAC."

REPLACE_ME: Aug 13, 2026 forum reply screenshot — not taken yet, see checklist below.

[b]A little about me[/b]

I'm Deaf, and I've been modding Android since 2010. In 2012, when Linus Torvalds asked whether anybody really cares about a tablet's front-facing camera, I answered that I do: it's what lets Deaf people use video relay on the go. Features that look like throwaways are often communication access. This is the same case.

[img]https://jgamworks.com/assets/images/sl2t-post/linus-torvalds-rebuttal.png[/img]

[b]What this is[/b]

A proof of concept. Re-signing Gboard violates its ToS, so I'm not distributing the patched APK. Google can close this in an update.

[b]The ask[/b]

The community asked in writing: release the API, or release the weights. Do it, or give a date.

Full write-up, sources, and repro steps: [url=https://jgamworks.com/#/sl2t]jgamworks.com/sl2t[/url]

Thanks to [url=https://xdaforums.com/m/azrienoch.2818898/]Azrienoch[/url] (Android Cues) — who's been on XDA since the early days and [i]gets[/i] that this is about access, not a spec — and to Dsixda, whose Android Kitchen taught me that unblocking what's already there is the whole point.

— Joe Merino, [url=https://xdaforums.com/m/jakister.2805356/#recent-content]Jakister (jaxister)[/url]
```

**Images/videos already inserted above, hosted at stable jgamworks.com URLs:**
1. `sl2t-onboarding-screen.png` — Google's official Sign-to-text onboarding screen (sets context before the repro).
2. `sl2t-screen-recording.mp4` and `sl2t-emulator-screen-recording.mp4` — the two repro screen recordings (phone + emulator), placed right after the "What I observed" bullet list.
3. `linus-torvalds-rebuttal.png` — the 2012 Linus Torvalds blog screenshot, placed in the "A little about me" section.

**Still need to capture and swap in (marked `REPLACE_ME:` in the BBCode above):**
1. A `dumpsys input_method` / logcat capture — pick the S23 Ultra run (matches the write-up's lead device). Not currently in the repo.
2. The Aug 13, 2026 forum reply screenshot ("15 months ago you announced SignGemma…"). Not currently in the repo — only referenced as text on the site.

**Optional, kept out of the OP to stay tight (post as a follow-up reply instead):**
- Calvin Young's post: `https://jgamworks.com/assets/images/sl2t-post/calvin-young-post.png`
- Christiane Nogueira Mendes's post: `https://jgamworks.com/assets/images/sl2t-post/christiane-mendes-post.png`
- Ryan Commerson's post: `https://jgamworks.com/assets/images/sl2t-post/ryan-commerson-post.png`

**Links:**
- Full write-up: https://jgamworks.com/#/sl2t
- DeepMind blog: https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/
- AISLAC joint impact report: https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/putting-sign-language-ai-into-users-hands/aislac-joint-impact-report-for-sl2t-1-0.pdf
- SignGemma release-date thread: https://discuss.ai.google.dev/t/signgemma-release-date/113794
- SignGemma access thread: https://discuss.ai.google.dev/t/how-to-get-access-to-signgemma/106766
- Torvalds review (ZDNet): https://www.zdnet.com/article/linus-torvalds-reviews-loves-the-google-nexus-7/

**Before posting — confirm:**
- [ ] **`[video]` tag caveat:** XDA's editor (XenForo) usually doesn't inline-embed arbitrary `.mp4` URLs via `[video]`/`[img]` — those tags are built for YouTube/Streamable-style embeds or XDA's own attachment uploader. Safest path: upload both `.mp4` files directly through XDA's attach/upload button instead of relying on the raw URLs in the BBCode above, then delete those two lines once the real attachments are inserted.
- [ ] Capture and insert the S23 Ultra `dumpsys input_method` / logcat screenshot (marked `REPLACE_ME:` above) — doesn't exist in the repo yet.
- [ ] Capture and insert the Aug 13, 2026 forum reply screenshot (marked `REPLACE_ME:` above) — doesn't exist in the repo yet, only referenced as text on the live site.
- [ ] `jgamworks.com/#/sl2t` is live and matches everything claimed here (devices, dates, quotes).
- [ ] No claim of "exclusive" — Google only ever said "first on Pixel 11, more coming soon."
- [ ] A quick read for anything that reads as distributing the patch rather than describing it (repro steps are close to the line — keep it descriptive, not a how-to).

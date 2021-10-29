---
name: "Euclidean Delay"
path: "/models/effects/euclidean-delay"
brand: "Line 6"
model: "Original"
url: ""
image: "../../../images/line6-logo.jpg"
icon: "../../../images/icon-models/effects/euclidean-delay.png"
type: ["Delay"]
channel: ["Mono", "Stereo"]
update: ["3.10"]
---

#### Description

Delay based on Euclidean algorithms. Creates multitap patterns by setting the length of the pattern (Steps) and the number of taps (Fill) in the pattern. The Euclidean algorithm spaces taps as evenly as possible throughout the pattern, resulting in rhythms from traditional to highly complex.

#### Settings

- **Step Time** — Sets the time between steps. The total delay time is Time x Steps, so [Time: 1/16 x Steps: 8] is a 1/2-note. Press the knob to toggle between ms/sec and note values
- **Feedback** — Controls the overall number of repeats heard for the entire sequence. If you want to hear all fills in the sequence only once, set to 0%
- **Steps** — Determines the number of steps in the sequence (1-16; see diagram below)
- **Fill** — The number of active taps, whose spacing is set by Euclidean algorithms (1-16, see diagram below). If Fill is higher than Steps, the extra taps are ignored
- **Rotate** — Rotates all fills forward by the same amount (0-15; see diagram below). Used If you like the sound of a repeat pattern but want the fills and gaps shifted forward
- **Mix** — Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard
- **Low Cut** — Applies a low cut (high pass) filter to the fills, letting you remove the effected signal below a certain frequency
- **High Cut** — Applies a high cut (low pass) filter to the fills, letting you remove the effected signal above a certain frequency
- **Level** — Controls the overall output level of the block
- **Trails** — When on, delay repeats continue to ring out after the block is bypassed

**TIP:** Add two Euclidean Delays in parallel (with different settings) for interesting polyrhythm patterns. When using a stereo playback system, try panning Paths A and B in the Mixer to L100 and R100.

If you'd like to read more about Euclidean rhythms, [check this out](https://splice.com/blog/euclidean-rhythms/)

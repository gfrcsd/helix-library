---
name: "Dynamic Hall"
path: "/models/effects/dynamic-hall"
brand: "Line 6"
model: "Original"
url: ""
image: "../../../images/line6-logo.jpg"
icon: "../../../images/icon-models/effects/dynamic-hall.png"
type: ["Reverb"]
channel: ["Mono", "Stereo"]
update: ["3.10"]
---

#### Description

Hall reverb

#### Settings

- **Decay** — Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity)
- **Predelay** — Determines the amount of delay heard before the signal enters the hall. Can sometimes result in more definition between the dry and effected signals
- **Room Size** — Sets the size of the hall (10, 20, or 30 meters). _NOTE: This parameter actually changes the algorithm so you'll hear a small bump when changing it. Therefore, we don't recommend assigning Room Size to snapshots or other controllers_
- **Diffusion** — Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal
- **Damping** — Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty
- **Mix** — Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard
- **Motion** — Sets the amount of randomization, which can be helpful to minimize any metallic artifacts common in extremely static reverbs. At higher values, can impart a bit of modulation to the effected signal
- **Low Freq** — Sets the frequency below which the Low Gain parameter is applied
- **Low Gain** — Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies
- **Low Cut** — Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency
- **High Cut** — Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency
- **Level** — Controls the overall output level of the block
- **Trails** — When on, reverb decay continues to ring out after the block is bypassed

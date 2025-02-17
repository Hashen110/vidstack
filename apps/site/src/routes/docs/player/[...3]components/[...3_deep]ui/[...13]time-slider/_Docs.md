---
description: This component is used to create a range input for controlling the current time of playback.
---

## Usage

The `<vds-time-slider>` component (aka scrubber) extends [`<vds-slider>`](../slider/index.md) ,
and two-way binds the slider's value with the provider's current playback time position.

The slider receives time updates from the provider through the media store, and it'll actively
dispatch a `vds-seeking-request:ignore` event (<ApiLink hash="properties--seekingrequestthrottle">throttled</ApiLink>
to once per `100ms`) as the slider value changes. Seeking requests let the media controller know
that the user is actively seeking, but they haven't determined the final playback position they want
to seek to. When the user stops dragging the slider, a `vds-seek-request:ignore` event will be
fired to request updating the current playback time to the slider's value.

The slider's range is assumed to be in seconds between `0` (min) and length of media (max).

<slot name="usage" />

## Styling

In the following example, we add a conventional time slider inside some media:

:::stackblitz_example name="styling"
:::

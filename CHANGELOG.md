## [0.13.1](https://github.com/vidstack/vidstack/compare/v0.13.0...v0.13.1) (2022-03-19)

### Bug Fixes

- **kit-plugins:** incorrectly escaping `<` and `>` symbols in `<code>` ([849387e](https://github.com/vidstack/vidstack/commit/849387e3fac11ce7aba238ae6e82bd886e3a5524))
- **player:** package types are leaking ([ab0d9c9](https://github.com/vidstack/vidstack/commit/ab0d9c98cd893a7e159eeae040c235289023cc56)), closes [#634](https://github.com/vidstack/vidstack/issues/634)

# [0.13.0](https://github.com/vidstack/vidstack/compare/v0.12.3...v0.13.0) (2022-03-17)

### Bug Fixes

- include screen orientation events in media events ([f4fd62c](https://github.com/vidstack/vidstack/commit/f4fd62cb32e696b9d8e2ff4aaf93d65fa07c612a))
- **player:** imports in node context fail ([982cc2c](https://github.com/vidstack/vidstack/commit/982cc2c7d0a6777bcb71901f1161cd01ad71f964))

## [0.12.3](https://github.com/vidstack/vidstack/compare/v0.12.2...v0.12.3) (2022-03-09)

### Bug Fixes

- `repeat` and `priority` attrs on `<vds-gesture>` not converted to number ([6e4f1b0](https://github.com/vidstack/vidstack/commit/6e4f1b0d2569cc536a1d0d20b0a8ffd5d9a6f9ca))
- rename `shared-playback` to `single-playback` on `<vds-media-sync>` ([25b887d](https://github.com/vidstack/vidstack/commit/25b887d07b4994eed3b1c7f9af3c60282167b69f))
- set better default styles for `<vds-slider-video>` ([b513aca](https://github.com/vidstack/vidstack/commit/b513aca9461201c5b7aee3c16590a0ddf58fdbab))

## [0.12.2](https://github.com/vidstack/vidstack/compare/v0.12.1...v0.12.2) (2022-03-07)

### Bug Fixes

- `paused`, `muted`, `src`, and `poster` attrs not in-sync ([6beca8b](https://github.com/vidstack/vidstack/commit/6beca8b46810ab4c9f5df3d72fc737e7a73cf1b9))
- clean up aspect ratio implementation ([e8b9027](https://github.com/vidstack/vidstack/commit/e8b90277df0b50f5d5dad30bcd21dbc1d5cb0ed0))
- media does not automatically fill aspect ratio container ([c50b9a8](https://github.com/vidstack/vidstack/commit/c50b9a869616a089c1a68753b9c0aaa55a2c08d3))
- reflect additional `Html5MediaElement` attributes ([1bd08bc](https://github.com/vidstack/vidstack/commit/1bd08bc1296cb407645d35d5d7289c51f51e6b73))
- set slightly better defaults for audio/video ([572c394](https://github.com/vidstack/vidstack/commit/572c3942825fcd2b71200d90cd42de05ffbd7ce9))

## [0.12.1](https://github.com/vidstack/vidstack/compare/v0.12.0...v0.12.1) (2022-03-02)

### Bug Fixes

- drop node requirement from `>=16` to `>=14.9` ([c8ac432](https://github.com/vidstack/vidstack/commit/c8ac432e0adbcb4ba8adcf479d949e5262fb4f21))

# [0.12.0](https://github.com/vidstack/vidstack/compare/v0.11.0...v0.12.0) (2022-03-02)

### Bug Fixes

- rename `provider.mediaStore` -> `provider.store` ([ac6cf7f](https://github.com/vidstack/vidstack/commit/ac6cf7fc105c07659df4f895bc84c62ca066ee0b))
- rename `slider.sliderStore` -> `slider.store` ([c0563e8](https://github.com/vidstack/vidstack/commit/c0563e86a35ce2eb46bc2926acd20b5dc596922c))

### Features

- include `elements.json` (metadata file) in package distribution ([59a5b6f](https://github.com/vidstack/vidstack/commit/59a5b6f281b0562f4dfb6e4d1c5f958deff7c9d4))

# [0.11.0](https://github.com/vidstack/vidstack/compare/v0.10.6...v0.11.0) (2022-03-01)

### Bug Fixes

- refactor autoplay logic and remove unintended side-effects ([d7065f1](https://github.com/vidstack/vidstack/commit/d7065f1dcfa8b0c62308d4045cd4decef340cc64))
- remove `.ts` extension when importing custom elements into react wrapper ([18e6eb0](https://github.com/vidstack/vidstack/commit/18e6eb0a2aa14d27f1fa06a58e39859e92def0fd))
- rename `canRequestFullscreen` -> `canFullscreen` ([253f472](https://github.com/vidstack/vidstack/commit/253f472d9728ad90a66c6fce0b2c0f44920ea825))

### Features

- register `<vds-media-ui>` when registering player elements ([0380357](https://github.com/vidstack/vidstack/commit/0380357ad04890b625064511872d03d635e09cba))

## [0.10.6](https://github.com/vidstack/vidstack/compare/v0.10.4...v0.10.6) (2022-02-17)

### Bug Fixes

- `mediaEventListener` waiting for wrong connect event ([9c4b3d3](https://github.com/vidstack/vidstack/commit/9c4b3d38e2458921493dae6070becc0315b1b61c))
- **react:** better event types inference + component docs ([08d24b9](https://github.com/vidstack/vidstack/commit/08d24b99915525c6da08cd48dc96dfff1e74abaa))

### Features

- react support 🎉 ([6dec35a](https://github.com/vidstack/vidstack/commit/6dec35ac13cac220bf84bcb78a24f2feb1214da9)), closes [#585](https://github.com/vidstack/vidstack/issues/585)

## [0.10.4](https://github.com/vidstack/vidstack/compare/v0.10.3...v0.10.4) (2022-02-15)

### Bug Fixes

- requests are executed twice on media controller handler ([976cbfa](https://github.com/vidstack/vidstack/commit/976cbfa2e243e9f83e952e4af0b62c10a6fb7dee))

## [0.10.3](https://github.com/vidstack/vidstack/compare/v0.10.2...v0.10.3) (2022-02-15)

### Bug Fixes

- `<vds-media-ui>` blocks gestures ([a68fb19](https://github.com/vidstack/vidstack/commit/a68fb1904274d9c9362d2cfe5b4223940d671179))

## [0.10.2](https://github.com/vidstack/vidstack/compare/v0.10.1...v0.10.2) (2022-02-15)

### Bug Fixes

- default to light version of `hls.js` ([33e5bd1](https://github.com/vidstack/vidstack/commit/33e5bd1a875f94e00703c96ad17a2e6ea3b6476b))
- process media requests earlier if possible ([5766a86](https://github.com/vidstack/vidstack/commit/5766a861e1da41ab19d3a129ebd8a11e3838d732))
- **ui/slider:** dragging on mobile not working - drags page ([3fc1258](https://github.com/vidstack/vidstack/commit/3fc12584bae96a05daa6ee56727181bb598c04b4))
- **ui/time-slider:** set better default steps that handles short media ([efc836f](https://github.com/vidstack/vidstack/commit/efc836f6da21a5d4ece383c55ecf33c9046af0c9))

### Features

- tailwind plugin for media/slider attrs ([3e9b9de](https://github.com/vidstack/vidstack/commit/3e9b9de07d440f0c7208c45b1488dab0eedff66d)), closes [#598](https://github.com/vidstack/vidstack/issues/598)

## [0.10.1](https://github.com/vidstack/vidstack/compare/v0.10.0...v0.10.1) (2022-02-15)

### Bug Fixes

- `vds-waiting` trigger event not added to `vds-play` event ([04c4c38](https://github.com/vidstack/vidstack/commit/04c4c389cd6bdc3f2dd7b8e9cd23a3ba3aa276a0))
- include `index.js` in `dist` ([fc370b6](https://github.com/vidstack/vidstack/commit/fc370b61637066d9a7d0253f198579185c09bcde))

# [0.10.0](https://github.com/vidstack/vidstack/compare/v0.9.2...v0.10.0) (2022-02-14)

### Bug Fixes

- `node_modules` ignored by npm when included in `dist` dir ([d4f775e](https://github.com/vidstack/vidstack/commit/d4f775ec72a7906380735696e518c81845c9e76c))
- add `vds-` prefix to media CSS props ([db9b840](https://github.com/vidstack/vidstack/commit/db9b840e8224e4bc443540eb5020a6ac35b32206))
- avoid infinite trigger events on `vds-can-play` event ([7a108f4](https://github.com/vidstack/vidstack/commit/7a108f4d4bc2d3e14bf27d728d7e784d6af8bce0))
- cleanup removed scrubber types ([4de7b25](https://github.com/vidstack/vidstack/commit/4de7b250ff6417e79126910c530d3c9e521ef105))
- complex type kebab-case attrs not set in some frameworks ([dbf97ba](https://github.com/vidstack/vidstack/commit/dbf97ba7d906e06da439d611074ea64387361c7d)), closes [#583](https://github.com/vidstack/vidstack/issues/583)
- drop `<vds-buffering-indicator>` ([0f96143](https://github.com/vidstack/vidstack/commit/0f96143d503a9870e71644bf18cc3563f55729ed)), closes [#582](https://github.com/vidstack/vidstack/issues/582)
- drop `<vds-scrubber-* />` components ([f09abf1](https://github.com/vidstack/vidstack/commit/f09abf19976ffe35aae19c9b014df866f12df605)), closes [#614](https://github.com/vidstack/vidstack/issues/614)
- drop `<vds-seekable-progress-bar />` ([dda4b17](https://github.com/vidstack/vidstack/commit/dda4b170049229c2cdf617407e54a7e2df1fd395)), closes [#609](https://github.com/vidstack/vidstack/issues/609)
- drop `<vds-time-* />` components ([97e3769](https://github.com/vidstack/vidstack/commit/97e376937fd0783f4394890b50f78b6bf9da7b2c)), closes [#608](https://github.com/vidstack/vidstack/issues/608) [#610](https://github.com/vidstack/vidstack/issues/610)
- expose media attrs and css props on `<vds-media-ui>` ([843dc3d](https://github.com/vidstack/vidstack/commit/843dc3d8f6718830d914f3f2875acf4791ae9f2b)), closes [#581](https://github.com/vidstack/vidstack/issues/581)
- improve media error event handling ([bfdf790](https://github.com/vidstack/vidstack/commit/bfdf79065555ae1b6b09d96a3edbcbe23fc3d443))
- improve media event handling flow in controller ([ffb1fd5](https://github.com/vidstack/vidstack/commit/ffb1fd5ce09e40b38309630c124684156ab5105f))
- make `<vds-slider />` headless ([eb0c2b3](https://github.com/vidstack/vidstack/commit/eb0c2b32aaa92b21de32e1aab62c91d9a0f27165)), closes [#612](https://github.com/vidstack/vidstack/issues/612)
- **media:** set `target` of media events to `MediaProviderElement` ([00505ef](https://github.com/vidstack/vidstack/commit/00505ef1dd85ec884d6c1aac0b8dfcca06b4bdf8))
- prefix media event types with `Media` ([77e02c1](https://github.com/vidstack/vidstack/commit/77e02c1179de9b40d61bf1091bf5eefac6b3f657))
- preserve modules in `dist-*` output ([5aa4515](https://github.com/vidstack/vidstack/commit/5aa45157f0874d4c7a0c710298d7fe490cd81cb2))
- **provider/html5:** media events are being dispatched twice ([3300389](https://github.com/vidstack/vidstack/commit/3300389ba566caa517870fd4c374c1a24712d7e8))
- refactor `<vds-media-text />` into `<vds-time />` ([71dc76e](https://github.com/vidstack/vidstack/commit/71dc76e988dc09e16c0d6b89c154fd3e2bc163e2)), closes [#608](https://github.com/vidstack/vidstack/issues/608) [#610](https://github.com/vidstack/vidstack/issues/610)
- remove `<vds-scrim>` ([3dfbe2c](https://github.com/vidstack/vidstack/commit/3dfbe2cef0ab3941d3d5af05d4001ece97198852)), closes [#582](https://github.com/vidstack/vidstack/issues/582)
- remove duplicate imports in `define/dangerously-all` ([73e5e7a](https://github.com/vidstack/vidstack/commit/73e5e7a22e071faed94e0c55a22dbbe3448cde66))
- remove invalid export statements from `ui/index.ts` ([11a24e4](https://github.com/vidstack/vidstack/commit/11a24e46550fac6af123e65535753cbecee7ae4e))
- remove redundant `MediaElement` ([d269297](https://github.com/vidstack/vidstack/commit/d269297e1f8e7fd5686d5f307ac5b6ea08f0fd8b))
- rename `createHostedRequestQueue` -> `hostRequestQueue` ([f479cf6](https://github.com/vidstack/vidstack/commit/f479cf68b4b1df6d5293eaad7df1a449bad81a8f))
- rename `dispatchDiscoveryEvents` -> `discover` ([2d57950](https://github.com/vidstack/vidstack/commit/2d57950e5025da6fb0dfd11d58b3b3f824274b04))
- rename `elements.html-data.json` -> `vscode.html-data.json` ([8fac8da](https://github.com/vidstack/vidstack/commit/8fac8da70882ee2fa5aa92637bc74b322fa501a7))
- rename `hostedEventListener` -> `eventListener` ([23456e5](https://github.com/vidstack/vidstack/commit/23456e548934be93469026eed15df77bef68900a))
- rename `hostedMediaEventListener` -> `mediaEventListener` ([a98d51f](https://github.com/vidstack/vidstack/commit/a98d51f29515baecd3ebdce5a8e68279ff921201))
- rename `hostedMediaStoreSubscription` -> `mediaStoreSubscription` ([a2e614c](https://github.com/vidstack/vidstack/commit/a2e614cf58882252678647b15272b9d19ae3d317))
- rename `hostedStoreRecordSubscription` -> `storeRecordSubscription` ([d142592](https://github.com/vidstack/vidstack/commit/d14259250593c19e5e2fe4a18880569fd7790932))
- rename `hostedStoreSubscription` -> `storeSubscription` ([01bec4f](https://github.com/vidstack/vidstack/commit/01bec4f23b33ee3a50a624ea3965b951b30edb13))
- rename `loading-strategy` to `loading` - matching native `<img />` ([adc84f3](https://github.com/vidstack/vidstack/commit/adc84f31aad673be9a20276981ff9657fac4dcdc))
- rename `originalEvent` to `triggerEvent` ([4d08a37](https://github.com/vidstack/vidstack/commit/4d08a37d929444263ffb452f14137c521c6e005a))
- **ui:** custom poster should prevent native poster rendering ([4fff98b](https://github.com/vidstack/vidstack/commit/4fff98bf65ba1b1900538471e1f5d341b7b3698d))
- **ui:** keyboard not updating time slider ([8770ab3](https://github.com/vidstack/vidstack/commit/8770ab39bbbf3f2a06bc452ff321b4fc202c9bd1))
- **ui:** refactor time slider to use value instead of % ([b4d5aa1](https://github.com/vidstack/vidstack/commit/b4d5aa1028d19946c29ef012e420351500524fd5))
- **ui:** refactor volume slider internals ([c97b127](https://github.com/vidstack/vidstack/commit/c97b1275d3d9808ce12223a06f6f8f560bc71eee))
- **ui:** set `target` of slider events to `SliderElement` ([06f8b97](https://github.com/vidstack/vidstack/commit/06f8b976ea85c57c25f2afb6fc544826e4be84e1))

### Features

- `hls.js` 1.0 support 🎉 ([f3ac886](https://github.com/vidstack/vidstack/commit/f3ac8868db4883b7c5c6f240a0ebb7d29c2772c6)), closes [#591](https://github.com/vidstack/vidstack/issues/591)
- attach media request events to `triggerEvent` chain ([dc8b5d8](https://github.com/vidstack/vidstack/commit/dc8b5d88ac8bb849eb364cc620904e6d27f37391))
- include vscode custom html data ([d1b4245](https://github.com/vidstack/vidstack/commit/d1b4245ae4e632bb2f93be7493c05802993c1f60)), closes [#584](https://github.com/vidstack/vidstack/issues/584)
- new `<vds-media-text />` component ([ef4fa34](https://github.com/vidstack/vidstack/commit/ef4fa34b26c61e3fc77a4fa22541e821b74bdd87)), closes [#610](https://github.com/vidstack/vidstack/issues/610)
- new `<vds-slider-value-text />` component ([e2b3b28](https://github.com/vidstack/vidstack/commit/e2b3b287a4aef5907edd224604eea2f215727060)), closes [#611](https://github.com/vidstack/vidstack/issues/611)
- **ui:** new `<vds-gesture />` component ([4ff06c5](https://github.com/vidstack/vidstack/commit/4ff06c5bae2d9849180bdd49d077f78c44c4e8c7)), closes [#592](https://github.com/vidstack/vidstack/issues/592)
- **ui:** new `<vds-poster />` component ([304e6ea](https://github.com/vidstack/vidstack/commit/304e6eaf2124720d3850933b262a1d6069b09f2e)), closes [#589](https://github.com/vidstack/vidstack/issues/589)
- **ui:** new `<vds-slider-video />` component ([e8d4259](https://github.com/vidstack/vidstack/commit/e8d425939ea21c18ebf8b2f6a48cccc7f8eb8f0e)), closes [#613](https://github.com/vidstack/vidstack/issues/613)

## [0.9.2](https://github.com/vidstack/vidstack/compare/v0.9.1...v0.9.2) (2022-01-25)

### Bug Fixes

- drop inline `type` usage to support TS>=4.3.5 ([5df29ed](https://github.com/vidstack/vidstack/commit/5df29ed38d4fb34f4c41659040d178779ec8bf3a))

## [0.9.1](https://github.com/vidstack/vidstack/compare/v0.9.0...v0.9.1) (2022-01-22)

### Bug Fixes

- handle lazy media src change correctly when passed as `<source>` ([0a55ff8](https://github.com/vidstack/vidstack/commit/0a55ff811929f7d1ac52097dfc975d2b6d69dce9))
- update media `ended` state when seeking back playback ended ([7c58497](https://github.com/vidstack/vidstack/commit/7c58497f28841e6fb866cea1e06756edd100fb42))

# [0.9.0](https://github.com/vidstack/vidstack/compare/v0.8.4...v0.9.0) (2022-01-21)

### Bug Fixes

- move events utils to `utils` folder ([ff45b75](https://github.com/vidstack/vidstack/commit/ff45b75f6fd841e2f197b23716fecddb3572ab68))
- remove blue tap highlight on chrome mobile ([676f809](https://github.com/vidstack/vidstack/commit/676f80981440bf2c6c306e26d86fdd02f7e96f88))

### Features

- new `canLoad` and `loadingStrategy` properties ([8f50658](https://github.com/vidstack/vidstack/commit/8f506581f90f995651c2bab4f2e2f0c25309c38c))

## [0.8.4](https://github.com/vidstack/vidstack/compare/v0.8.3...v0.8.4) (2022-01-20)

### Bug Fixes

- rename `intersection-enter-delay` to `viewport-enter-delay` ([2c9a9e8](https://github.com/vidstack/vidstack/commit/2c9a9e8cc03b09a9d689898afc9d422b604c2574))

## [0.8.3](https://github.com/vidstack/vidstack/compare/v0.8.2...v0.8.3) (2022-01-20)

### Bug Fixes

- update `waiting` to false once media has seeked ([998b2f5](https://github.com/vidstack/vidstack/commit/998b2f5183f041cdc162d11e527f70683eb0ba37))

## [0.8.2](https://github.com/vidstack/vidstack/compare/v0.8.1...v0.8.2) (2022-01-20)

### Bug Fixes

- media ended store is not updated ([10ef1c3](https://github.com/vidstack/vidstack/commit/10ef1c382e3b15529ce0890954b7ee35c106e71a))
- rename globals file from `global.d.ts` to `globals.d.ts` ([04b0813](https://github.com/vidstack/vidstack/commit/04b08134752e36510480abd2234719def366cc9a))

## [0.8.1](https://github.com/vidstack/vidstack/compare/v0.8.0...v0.8.1) (2022-01-20)

### Bug Fixes

- minification is breaking decorators ([d90af7b](https://github.com/vidstack/vidstack/commit/d90af7bb2fae83a030acc0413e988abd4c52aece))

# [0.8.0](https://github.com/vidstack/vidstack/compare/v0.7.1...v0.8.0) (2022-01-19)

### Bug Fixes

- do not actively update `currentTime` while seeking ([e56009c](https://github.com/vidstack/vidstack/commit/e56009c9c70446eaf8c853eb3a95c06d40e6b34e))
- improve focus styling of toggle button and slider ([3b6fc51](https://github.com/vidstack/vidstack/commit/3b6fc5105a04545839a82af66c89c2dc2fc366fe))
- improve keyboard support on toggle buttons ([97368cd](https://github.com/vidstack/vidstack/commit/97368cd9c995297ea44439a34d36be63cda7d04d))
- mark `lit` as external in dev/prod builds correctly ([27f45ab](https://github.com/vidstack/vidstack/commit/27f45ab924b6c232992128ea8914f882d9be0ece))
- prevent media idling while slider is active ([044a649](https://github.com/vidstack/vidstack/commit/044a649a39f856c880f832031180a10137765422))
- reduce media idle delay default down to `2000ms` ([f6a815c](https://github.com/vidstack/vidstack/commit/f6a815c8941d283b8c72624902a8a1dde752dc27))
- scrubber preview video should playinline on ios ([cb836d1](https://github.com/vidstack/vidstack/commit/cb836d17923cc226670f682291e5fb7ed208bacc))

### Features

- add `media-seeking` attr to `vds-media-ui` ([60dea3c](https://github.com/vidstack/vidstack/commit/60dea3c29e9a1759c879b276ae353fbf4c450fdb))
- add `media-seeking` attr to `vds-play-button` ([3c24d8a](https://github.com/vidstack/vidstack/commit/3c24d8a333dfc32f591cb7b9464d00942f4bf57b))
- add intersection/page enter action delays ([a9ba6c6](https://github.com/vidstack/vidstack/commit/a9ba6c69c24e6b8fdf6ed571fc84e605894f6d3e))
- enable media idle state to paused/resumed ([ecc5b88](https://github.com/vidstack/vidstack/commit/ecc5b88479ed1159d9dd14f1e8b13e92666708c2))
- separate slider drag value from current value ([c801da1](https://github.com/vidstack/vidstack/commit/c801da109a9e6c3cd331e687db90972d943c89bb))

## [0.7.1](https://github.com/vidstack/vidstack/compare/v0.7.0...v0.7.1) (2022-01-18)

### Bug Fixes

- reduce bundle size by not re-exporting all utils ([a0169d9](https://github.com/vidstack/vidstack/commit/a0169d9aef928257f3f298dbe61550703fb418c5))

# [0.7.0](https://github.com/vidstack/vidstack/compare/v0.6.0...v0.7.0) (2022-01-18)

### Bug Fixes

- simplify styling of toggle buttons ([68d623e](https://github.com/vidstack/vidstack/commit/68d623ead09a25794525b9881427e93b4bf4d77d))
- simplify styling scrubber element ([bec5094](https://github.com/vidstack/vidstack/commit/bec5094c15570c5a065a031821aa729bc51a92b1))
- simplify styling seekable progress bar ([3697a4a](https://github.com/vidstack/vidstack/commit/3697a4a164aba3d8a753efa99294fe053bb3b081))
- simplify styling slider elements ([0784f97](https://github.com/vidstack/vidstack/commit/0784f9756811fc634eede3fb085b25b493a4c071))

# [0.6.0](https://github.com/vidstack/vidstack/compare/v0.5.0...v0.6.0) (2022-01-18)

### Features

- split page/viewport media visibility actions ([8aba33b](https://github.com/vidstack/vidstack/commit/8aba33b9551623b90657b2f501cdc1e08b76e082))

# [0.5.0](https://github.com/vidstack/vidstack/compare/v0.4.1...v0.5.0) (2022-01-18)

### Bug Fixes

- rename `isNonNativeHlsStreamingPossible` -> `isHlsjsSupported` ([f547f05](https://github.com/vidstack/vidstack/commit/f547f05c6a1ed08199f36de7738bece271a7d0c4))

### Features

- allow `hls.js` to be dynamically imported ([8fc3df1](https://github.com/vidstack/vidstack/commit/8fc3df1b2691ff4c6bb96363edfd23c5629ae169))

## [0.4.1](https://github.com/vidstack/vidstack/compare/v0.4.0...v0.4.1) (2022-01-17)

### Bug Fixes

- simplify ui container by merging `ControlsElement` into `MediaUiElement` ([7fad866](https://github.com/vidstack/vidstack/commit/7fad866fa734d299dd0b4bda8c8d5bbda36cd533))

# [0.4.0](https://github.com/vidstack/vidstack/compare/v0.3.0...v0.4.0) (2022-01-17)

### Bug Fixes

- `button` should match dimensions of host `vds-toggle-button` element ([9e2610f](https://github.com/vidstack/vidstack/commit/9e2610fc9a8208604cd127a0e0d5208da627e984))
- reduce bundle size by not re-exporting unnecessary styles ([f26163c](https://github.com/vidstack/vidstack/commit/f26163c8c5411d9f2a8fd1b3478542407a1c4422))
- simplify styling `vds-media-ui` when media is ready ([9f42cf7](https://github.com/vidstack/vidstack/commit/9f42cf7dc8d03a9ebf71dd6bf9d022926e5e749a))

### Features

- `MediaIdleController` ([090ab2a](https://github.com/vidstack/vidstack/commit/090ab2a6e7b04b9b8b65de9c46396acb1cbb0272))
- add `vds-media-sync` to all definitions ([095afa2](https://github.com/vidstack/vidstack/commit/095afa227470d990e7b7f1d5f9f5c6ed9db2abef))
- add `vds-media-visibility` to all definitions ([5d2e009](https://github.com/vidstack/vidstack/commit/5d2e00954291430ebf433b7303ce7bb07f271760))
- add media styling attrs to `ControlsElement` ([baa2dc4](https://github.com/vidstack/vidstack/commit/baa2dc4b59ddd21e6bc0c6b9997b794cbc461681))
- allow media request events to be listened on `hostedMediaEventListener` ([c9430d0](https://github.com/vidstack/vidstack/commit/c9430d0c4984d1806b98ec6cc802087533374336))

# [0.3.0](https://github.com/vidstack/vidstack/compare/v0.2.0...v0.3.0) (2022-01-14)

### Features

- media management ([#558](https://github.com/vidstack/vidstack/issues/558)) ([7d0e2d7](https://github.com/vidstack/vidstack/commit/7d0e2d77c7bb18dc7373d1ce6beb04fbed5407aa))

# [0.2.0](https://github.com/vidstack/vidstack/compare/v0.1.2...v0.2.0) (2022-01-12)

### Features

- `@vidstack/elements` -> `@vidstack/player` ([da6b197](https://github.com/vidstack/vidstack/commit/da6b19757f0d485db193ebec3c1f02b01e459d0e))
- logger rework ([#533](https://github.com/vidstack/vidstack/issues/533)) ([d2a0e27](https://github.com/vidstack/vidstack/commit/d2a0e27c3261294db7a5f2b1073a5289dd0fbde6))
- major internals cleanup ([#529](https://github.com/vidstack/vidstack/issues/529)) ([3c47a4e](https://github.com/vidstack/vidstack/commit/3c47a4ec20bbacfa0e56dd49486617c67823a98a))

## [0.1.2](https://github.com/vidstack/vidstack/compare/v0.1.1...v0.1.2) (2021-12-10)

### Bug Fixes

- replace `node_modules` in `dist-prod` to avoid consumer bundling issues ([ae8c670](https://github.com/vidstack/vidstack/commit/ae8c670635cddb79d3d2cf6d5db12a101499daee))

## [0.1.1](https://github.com/vidstack/vidstack/compare/v0.1.0...v0.1.1) (2021-12-10)

### Bug Fixes

- temp remove package `"type": "module"` ([45f6689](https://github.com/vidstack/vidstack/commit/45f6689cbec346d02f4df09915185e2be2df379f))

# [0.1.0](https://github.com/vidstack/vidstack/compare/v1.1.0-next.7...v0.1.0) (2021-12-10)

### Bug Fixes

- `_logger` statement leaking to production ([1a6c914](https://github.com/vidstack/vidstack/commit/1a6c914c6b4827c358a99bf7c78685dc653983b2)), closes [#463](https://github.com/vidstack/vidstack/issues/463)
- `canplay` event not fired on iOS ([7e5ce45](https://github.com/vidstack/vidstack/commit/7e5ce45fbb6327b14223aea65bad654602154312))
- `isFunction` does not correctly validate async functions ([4e40a42](https://github.com/vidstack/vidstack/commit/4e40a429290ac0ad44eac61debf51325cdb3778b)), closes [#421](https://github.com/vidstack/vidstack/issues/421)
- `mediaContext.live` should return `boolean` not tuple ([7f4b052](https://github.com/vidstack/vidstack/commit/7f4b05281e972181c7d57035c1fe624c963ec230))
- `originEvent` should return self if no `originalEvent` ([2da6736](https://github.com/vidstack/vidstack/commit/2da6736ccc355121a76ed2f3d3b02cd037c30060))
- `seeked` and `vds-seeked` should not be dispatched while seeking ([9ecd4cf](https://github.com/vidstack/vidstack/commit/9ecd4cf5267e740f1603244ef5721eef855932ec)), closes [#437](https://github.com/vidstack/vidstack/issues/437)
- `vds-ended` not firing ([040af3f](https://github.com/vidstack/vidstack/commit/040af3f331645b762428d26ce1eacaf2bf3d96f9)), closes [#464](https://github.com/vidstack/vidstack/issues/464)
- `vds-fullscreen-change` not dispatched from controller ([7160c34](https://github.com/vidstack/vidstack/commit/7160c345e7443538587fbcdc19dd36e365b605bf)), closes [#438](https://github.com/vidstack/vidstack/issues/438)
- `vds-replay` should not fire when seeking after ended ([dc8c426](https://github.com/vidstack/vidstack/commit/dc8c4263468adfe685d76fa0e05891d19e0b6dcd))
- add typescript support for export paths ([f39afd3](https://github.com/vidstack/vidstack/commit/f39afd35e24eba34851d2da031b4dd68e05c3ec5))
- autoplay not handled after initial update ([6da208c](https://github.com/vidstack/vidstack/commit/6da208cbed81a9b98e2290f0c382e45c1bd75f17))
- autoplay retrying more than max limit ([40159f5](https://github.com/vidstack/vidstack/commit/40159f586f800e55d235fa7379663bc4421bd2ee))
- **base/context:** `consumeContext` decorator should not redefine ([653bf2c](https://github.com/vidstack/vidstack/commit/653bf2cbc21f1b6efb16b74b20ccee4db1086753))
- **base/context:** add `debug` option for backwards compatibility ([fc37940](https://github.com/vidstack/vidstack/commit/fc37940dd1e540c7c4dd7dcf2e6cabd390767438))
- **base/context:** consumers intializing on wrong constructors ([5b2c91f](https://github.com/vidstack/vidstack/commit/5b2c91fe57d35cc87db65aabc2c7f48f855eb0d3))
- broken exports paths in `package.json` ([34a5d48](https://github.com/vidstack/vidstack/commit/34a5d489a1b2a8669d9251be618d78fdc32c470c))
- browsers fire `canplay` and `canplaythrough` more than once ([63a6dba](https://github.com/vidstack/vidstack/commit/63a6dba9572dc95a539f912574168a5cb07cd233))
- **bundle:** add missing `ui/controls/controls` imports ([e8b6876](https://github.com/vidstack/vidstack/commit/e8b68761a6d8c153b664fdfc75017f469c40f421))
- **bundle:** add missing audio provider exports ([9452bab](https://github.com/vidstack/vidstack/commit/9452babf9ea8c1cd03f0f67d19a2e6cb8230d895))
- **bundle:** add missing scrubber subcomponent exports ([ca176d1](https://github.com/vidstack/vidstack/commit/ca176d15c77530d24ace4fc65fd0e79ffff1c436))
- **bundle:** include entry point `.d.ts` file ([fa69315](https://github.com/vidstack/vidstack/commit/fa69315767b534607003c93a4fe31853b9ea2655))
- bundling fails because `default` exports should be last ([34b2ce5](https://github.com/vidstack/vidstack/commit/34b2ce581636d2a84c219f2cbaf3c64d6a1ac4a0))
- circular dep between logger and context ([9e581ed](https://github.com/vidstack/vidstack/commit/9e581ed1a1a112c6e12ca8eb703ec18a7bfe8e02)), closes [#462](https://github.com/vidstack/vidstack/issues/462)
- clear pending media requests on disconnect ([e42c1b4](https://github.com/vidstack/vidstack/commit/e42c1b4a9a1258e940cb0ea1407b4bb01425990a))
- context not working if used on class getter/setter ([af2108b](https://github.com/vidstack/vidstack/commit/af2108b3630b92d19af1234236ed1dd00dff0f24))
- correct exported types and include short `define` export ([de21cfe](https://github.com/vidstack/vidstack/commit/de21cfef3cd60e3e196fb8f65e726e4c16e8e7f7))
- do not include source maps in release ([22f8c01](https://github.com/vidstack/vidstack/commit/22f8c0161dbc6e0da0afe815bd5bafddae7f8ef3))
- dont update engine property if not changed ([dbe1dba](https://github.com/vidstack/vidstack/commit/dbe1dba7f977f5f67bc7f7e90a94483622629c2c))
- drop `clsx` in favour of `classMap` ([ea809cd](https://github.com/vidstack/vidstack/commit/ea809cd6b92b06364acc9654b62a3166f55248ff))
- drop generic provider argument on `MediaControllerElement` ([e644f1a](https://github.com/vidstack/vidstack/commit/e644f1a8ae5488cdaa97c9c9306a6a48e962b1c4))
- ensure controller targets can be set for framework support ([501856b](https://github.com/vidstack/vidstack/commit/501856b238ab8003aae62a4066e2cc6b64bd67c7))
- fire `vds-started` once playback begins ([5d1a4d3](https://github.com/vidstack/vidstack/commit/5d1a4d3aea687e75defb205be444ca6785a38618))
- follow lit guidelines on publishing ([d88fc6f](https://github.com/vidstack/vidstack/commit/d88fc6fe8b982900d79dd5d3479fa0e6dff423e5))
- **foundation/context:** events in iOS 12/13 are objects (not instances of a class) ([af22c03](https://github.com/vidstack/vidstack/commit/af22c03657809e6f1eadae9b6e748c582892174d))
- **foundation/events:** getters/methods are not defined for events on iOS 12/13 ([a77348e](https://github.com/vidstack/vidstack/commit/a77348ed9eeb4425e3c87d09d1b2576319d743d4))
- fullscreen broken on ios safari ([689feb0](https://github.com/vidstack/vidstack/commit/689feb0327a9e90ebb96ed99a07b9c9489a74be6))
- fullscreen error events should bubble ([b913102](https://github.com/vidstack/vidstack/commit/b913102ed32985e87a47a3148660852696f169a7)), closes [#438](https://github.com/vidstack/vidstack/issues/438)
- fullscreen event listeners not attached correctly ([99f74a0](https://github.com/vidstack/vidstack/commit/99f74a0eed7212511e5b6f9a04aff6d8e33b1ee8))
- improve `currentTime` accuracy ([1e1aa73](https://github.com/vidstack/vidstack/commit/1e1aa733a7ebd74104112a0064ba1656ede477e7))
- improve request queue and disposal bin logging ([859dcd0](https://github.com/vidstack/vidstack/commit/859dcd02f83f943ff02f233b488f6cc9cdddd714))
- improve ts exports type detection ([fc42ded](https://github.com/vidstack/vidstack/commit/fc42ded6cff4151c57570b6f9dade4d3516f27ee))
- include media ui in exports ([9f223e5](https://github.com/vidstack/vidstack/commit/9f223e563abde1bf11e67f783d09ae3ca25c01e1))
- incorrect return type on `contextProviders` in `WithContext` mixin ([6d33ca2](https://github.com/vidstack/vidstack/commit/6d33ca2f81b790ea1a4c96e01a0b095345c46bee))
- media ready log is not levelled ([0b381a0](https://github.com/vidstack/vidstack/commit/0b381a09b605314c7c0a782081935ef63726b45f))
- **media/controller:** call seek on media provider when seeking request received ([#374](https://github.com/vidstack/vidstack/issues/374)) ([fb8fe23](https://github.com/vidstack/vidstack/commit/fb8fe23afa5696780d1706d658a9790626863cd9))
- **media/controller:** copy context values before injecting on media provider ([e54d49e](https://github.com/vidstack/vidstack/commit/e54d49e668f08c5e7616670bc547b06e4cdfc76f))
- **media/controller:** fix mapped types becoming properties and not methods ([aa3a740](https://github.com/vidstack/vidstack/commit/aa3a740010232471c6a2757c7c70f2912604b95d))
- **media/controller:** fullscreen property not reflecting true state ([#375](https://github.com/vidstack/vidstack/issues/375)) ([348b8b1](https://github.com/vidstack/vidstack/commit/348b8b1a4c6b9986955275a4cdce8a7a1c0ffcd2))
- **media/controller:** lower snap to end threshold ([5f05273](https://github.com/vidstack/vidstack/commit/5f052738f774a893e283cde4484f0d61680529a8))
- **media/controller:** should update global log level ([0ff324f](https://github.com/vidstack/vidstack/commit/0ff324f2c42b860d0c74d2ad09883027923b72b5))
- **media/provider:** `canRequestFullscreen` context is never updated ([36aab34](https://github.com/vidstack/vidstack/commit/36aab34b41307ac48860b1fea17acddd6ac83bfc))
- **media/provider:** do not reset media request queue ([fac3ac4](https://github.com/vidstack/vidstack/commit/fac3ac45f816ce4e10dfa5e8e43af0e23b83f8b2))
- **media/provider:** initial provider queue is reset prior to first render ([738242a](https://github.com/vidstack/vidstack/commit/738242af96eccf0824a23e1ff9e8bac7ed7c5417))
- **media/provider:** old context provider record is not destroyed ([287ff0f](https://github.com/vidstack/vidstack/commit/287ff0f9333553317fe84574a426ad5288c801e2))
- **media/provider:** skip first queue flush to ensure props are passed through ([7bf1d89](https://github.com/vidstack/vidstack/commit/7bf1d89ad80ab812b1882dfcf1f4db5a174d8c03))
- **media/ui:** add missing context consumers ([6f765a7](https://github.com/vidstack/vidstack/commit/6f765a73badf5e34e2924248c78e1a0c9f9ad350))
- **media/ui:** return type of `renderRootChildren` is invalid template type ([8083f6c](https://github.com/vidstack/vidstack/commit/8083f6c77949468712ece312a3a55b8141139ba4))
- **media:** add `vds-fullscreen-change` event to `MediaEvents` ([85ce103](https://github.com/vidstack/vidstack/commit/85ce103fc5023ea5f8d91c979ea3d4e45ae74871))
- **media:** cancel firing waiting if `seeked` fires ([87564b5](https://github.com/vidstack/vidstack/commit/87564b564f7dd36b8e467313fe306226a65eaacc))
- **media:** ensure derived properties work on `MediaProviderElement` ([f10826a](https://github.com/vidstack/vidstack/commit/f10826a493b51ed9ea0fd11cb8ee583f57afd5bd))
- **media:** major improvements to media event handling and requests ([e577c6e](https://github.com/vidstack/vidstack/commit/e577c6ec79374e65749918becb028ac3d0a6e4fb))
- **media:** play trigger events should have priority over seeked ([f28f3a6](https://github.com/vidstack/vidstack/commit/f28f3a60e19f16755008b006410db256d012a2c5))
- **media:** prefer shallow clone of media state to avoid circular errors ([a2154b2](https://github.com/vidstack/vidstack/commit/a2154b27c0031fd6cf33b299769b60f3a4397b28))
- **media:** remove observed media event listeners when controller disconnects ([5b41a33](https://github.com/vidstack/vidstack/commit/5b41a3371037bce1f434431de31eec5e03de3f66))
- **media:** safeguard against pending media requests stacking ([b9e2f73](https://github.com/vidstack/vidstack/commit/b9e2f73d65ac87d92dee539d2716e0209f2159de))
- move `lit` to peer deps ([af82217](https://github.com/vidstack/vidstack/commit/af8221742087b98e4117d6d8032fd8dd24b1a697))
- never assume native autoplay will work ([f54c3a8](https://github.com/vidstack/vidstack/commit/f54c3a8634b34427a9928aa50395394a1e7521ef))
- normalize `vds-waiting` event when seeking ([e6f82b1](https://github.com/vidstack/vidstack/commit/e6f82b1cc0dfaccda5acb93da193e963accc7fbc))
- **package.json:** point `types` to root `index.d.ts` ([bac0c15](https://github.com/vidstack/vidstack/commit/bac0c154499645fc6ba5fb421c2a1d52baab0080))
- patch up missing global types ([a897b71](https://github.com/vidstack/vidstack/commit/a897b71c31a3b555041dff25552e8ca007ba754e))
- prefer original `ended` event over validated ([1bc7594](https://github.com/vidstack/vidstack/commit/1bc7594c04e92b817cfa24df2e4332147621dfd6))
- prevent `vds-play` and `vds-playing` firing when loop resets ([dab8952](https://github.com/vidstack/vidstack/commit/dab8952a92474f820cb909ff55e762592fa57599))
- **providers/hls:** `hlsConfig` object should be partial config ([34696a7](https://github.com/vidstack/vidstack/commit/34696a7011b50486a2531ac88580fe008a15ba00))
- **providers/hls:** do not load `hls.js` if environment not supported ([7336b10](https://github.com/vidstack/vidstack/commit/7336b10310014fae2665daad64b1f3700eb825b3))
- **providers/hls:** native hls streams not attaching correctly ([8772f57](https://github.com/vidstack/vidstack/commit/8772f573ef9abb90e85b10346767e73ac3c464c2))
- **providers/hls:** remove repetitive log for setting video `src` ([bdf0149](https://github.com/vidstack/vidstack/commit/bdf0149900e093462f9f0492d85002032846ecdb))
- **providers/html5:** `load` must be called on iOS when `src` changes ([f3bcb4d](https://github.com/vidstack/vidstack/commit/f3bcb4d656253f2a5ab401794c8ca0b0feb64791))
- **providers/html5:** ensure only one set of time updates are running at any given time ([85944cd](https://github.com/vidstack/vidstack/commit/85944cda0e135961594d9284e92a872af12a326a))
- **providers/html5:** fire final time update when media ends ([21a49cc](https://github.com/vidstack/vidstack/commit/21a49cc5acc04f8f6391ac6fdfe173c5b25e7f9b))
- **providers/html5:** resolve `currentTime` having greater precision than `duration` ([5dbde8f](https://github.com/vidstack/vidstack/commit/5dbde8fc8da9ab34497495882a0e33c9b1bf8762))
- **providers/video:** improve fullscreen support check on iOS ([99d7db0](https://github.com/vidstack/vidstack/commit/99d7db08ce2d200885e8396b17545834236263d2))
- refactor controller naming `target` -> `ref` ([b118aba](https://github.com/vidstack/vidstack/commit/b118aba70dc3ec75146d018b7af9c3df9376112d))
- refactor events away from classes to support iOS 12/13 ([9a37ab7](https://github.com/vidstack/vidstack/commit/9a37ab794cafcd64c2dcce8ecdf4de982ed78c74))
- refactor fullscreen and screen orientation api ([a9c977a](https://github.com/vidstack/vidstack/commit/a9c977ae248d5bae1b70fc952e96368c48a5f4f4))
- remove global `define` (not recommended) ([866925c](https://github.com/vidstack/vidstack/commit/866925cd8336f496d5d6682043e97622cad870fc))
- request update after any native media event is handled ([86082e1](https://github.com/vidstack/vidstack/commit/86082e136d38d45b50265118fb150ac9d362385d))
- request update if autoplay has failed ([70bba58](https://github.com/vidstack/vidstack/commit/70bba58cd3a145aa71ca48a678635555c5686159))
- reset `autoplayError` when `src` changes ([0801f81](https://github.com/vidstack/vidstack/commit/0801f813ee9b17a48884ebe1cbdfc34fc00ff497))
- resolve a few type issues when consuming package ([68cc02d](https://github.com/vidstack/vidstack/commit/68cc02d93b0dfb46f9dbd498247e523c348f4156))
- resolve additional type issues for consumers ([f650c7a](https://github.com/vidstack/vidstack/commit/f650c7ab21274ceffd62444cb2d8b4a06bae8d0e))
- screen orientation events should bubble ([feb978f](https://github.com/vidstack/vidstack/commit/feb978f798208240e62041ba35965a856a76e47b))
- seeked should not be playing trigger when not playing ([16cd99d](https://github.com/vidstack/vidstack/commit/16cd99d3cf611646e2c54f716e5a751831a5b879))
- set default log level to `silent` ([70fd202](https://github.com/vidstack/vidstack/commit/70fd2027916be3d822fdaa27315dcb34b53e4fbb))
- set es target version to `es2017` for compatability with modern browers ([c6e3695](https://github.com/vidstack/vidstack/commit/c6e3695d80702a9c66e36e04ab90f407bfb2c8ae))
- stop logging noisy time update events for now ([bbb92c8](https://github.com/vidstack/vidstack/commit/bbb92c8d341239dd16f5fd88de69bdb03b39f1a8))
- types not exporting global definitions correctly ([953bd60](https://github.com/vidstack/vidstack/commit/953bd60b1b0fb3de9452e075a6d36e7860bf2e8a))
- **ui/buffering-indicator:** add back removed `globals.ts` file ([710faf5](https://github.com/vidstack/vidstack/commit/710faf5fb2668b931c80bcb21fd81ee764063174))
- **ui/controls/scrubber:** `--vds-scrubber-preview-time` not updating correctly ([a061cc3](https://github.com/vidstack/vidstack/commit/a061cc38bf54aa8b024db0c8f6aa4d3a708210c2))
- **ui/controls/scrubber:** set better default slider steps ([3b7ded4](https://github.com/vidstack/vidstack/commit/3b7ded4bed9da378532ddcbda713965c9e0993ea))
- **ui/controls/scrubber:** smooth out scrubbing ([1467e26](https://github.com/vidstack/vidstack/commit/1467e26966d3b98b223cd76a9c321db827424eb5))
- **ui/controls/slider:** improve keyboard support ([7fa86ba](https://github.com/vidstack/vidstack/commit/7fa86ba64e47718626c87d8a956ae810b026ce65))
- **ui/fullscreen-button:** add logic for hiding button when not supported ([4c59d48](https://github.com/vidstack/vidstack/commit/4c59d4818464d378ef5c8fe488c5660bd4a379fd))
- **ui/play-button:** apply `media-ended` attribute ([1778126](https://github.com/vidstack/vidstack/commit/1778126c2296b64109279332f5e079828c13889f))
- **ui/scrubber:** `pause-while-dragging` attr not forwarded ([b6061bf](https://github.com/vidstack/vidstack/commit/b6061bf77468792cb9c8fc4ecba799659e6719b6))
- **ui/scrubber:** dont hide preview on drag end if still hovering ([91fbe14](https://github.com/vidstack/vidstack/commit/91fbe145b718418de8d040bf1692c7bba20ee48a))
- **ui/scrubber:** pointer, slider and preview events not heard ([722afd2](https://github.com/vidstack/vidstack/commit/722afd2a0f55262830f2eae62e765fdfa4c31dcf))
- **ui/scrubber:** typo in attribute `value-tex` -> `value-text` ([ce117e1](https://github.com/vidstack/vidstack/commit/ce117e1e41b0dba26b1d9d880f30e7aba4e05526))
- **ui:** host elements should apply default `hidden` styles ([779ee53](https://github.com/vidstack/vidstack/commit/779ee53f42bd35a52a444b0c7bf8d506bf4ca458))
- update warn/error emojis so they work in console ([ffad9d9](https://github.com/vidstack/vidstack/commit/ffad9d9f3e278aeba2d0681f84877845109e0c22))
- **utils/dom:** bridged elements should remove attr if null ([d9adbdf](https://github.com/vidstack/vidstack/commit/d9adbdff582313e5afb77497750afb0882663238))
- **utils/object:** prefer parent definitions over proxy ([2607cb9](https://github.com/vidstack/vidstack/commit/2607cb928a0a523037090c64fd52b521b776795b))

### Features

- `_` safe protected/private class fields to improve minification ([fe6225f](https://github.com/vidstack/vidstack/commit/fe6225f92348360152d5c84888dd6294d7400b04))
- add `debug` option to context provider options ([27d76a5](https://github.com/vidstack/vidstack/commit/27d76a53f5dea3569299f77fc74cef59dca926a5))
- add `logLevel` property to media provider element ([6c41af8](https://github.com/vidstack/vidstack/commit/6c41af846ce5bdf830e81c935bbc0d14fc7241e2))
- add `requestEvent` to `vds-replay` event ([bb2fab8](https://github.com/vidstack/vidstack/commit/bb2fab8c661ebbb4a3344471bcb8fa5ab8daf8fb))
- add `triggerEvent` to `vds-replay` event ([f24b283](https://github.com/vidstack/vidstack/commit/f24b2836f6d5cc114f320dfee1e6439ab4f8e7eb))
- add detailed levelled logging in dev ([5afa940](https://github.com/vidstack/vidstack/commit/5afa940dbe1aa5588f73cce2eba147a23b72e668))
- add new `bundle/` to quickly load/test elements from CDN ([b8124ef](https://github.com/vidstack/vidstack/commit/b8124ef3ec3cc78c3c3469c8c12ba1797e09330a))
- allow `RequestKey` to be a symbol in `RequestQueue` ([6aed5a6](https://github.com/vidstack/vidstack/commit/6aed5a69f68839747a2d408216a656f584bcfcbf))
- autoplay fail detection ([2f017b2](https://github.com/vidstack/vidstack/commit/2f017b21965c86dc97af3f7c278c6d25467e0358))
- build and distribute typescript declaration files ([04c976f](https://github.com/vidstack/vidstack/commit/04c976f0d83702027be9a8918b304033dfa71050))
- **bundle:** include `utils/*` in main export ([0be3747](https://github.com/vidstack/vidstack/commit/0be3747e73af123453ea93ff3802bc5ace5a4661))
- controls support ([#301](https://github.com/vidstack/vidstack/issues/301)) ([302b382](https://github.com/vidstack/vidstack/commit/302b382156b817e17cbcb087d14a5cb738538f2b))
- **foundation/context:** make `WithContext` optional when using context decorators ([3a6b12c](https://github.com/vidstack/vidstack/commit/3a6b12cb5812c271873360774d0f9268b62af0d0))
- include dev and prod `iife` bundles ([ea0e064](https://github.com/vidstack/vidstack/commit/ea0e0647461b71001fc6195e5c32add990d514d4))
- include production version ([083c379](https://github.com/vidstack/vidstack/commit/083c37982f41d39b2b8616f4a8619f5adadc3495))
- log controls/fullscreen changes on media controller ([dd00df5](https://github.com/vidstack/vidstack/commit/dd00df50470063e56e9bc6bded45f138b7168f99))
- log vds media events ([1de4cc0](https://github.com/vidstack/vidstack/commit/1de4cc04b72e977c7cca10250cc7b6a91949b213))
- media controller bridge ([#300](https://github.com/vidstack/vidstack/issues/300)) ([f46d295](https://github.com/vidstack/vidstack/commit/f46d29590fce76abd8a43bb486bc54c9166e5ace))
- **media/container:** make media slot optional ([2872d56](https://github.com/vidstack/vidstack/commit/2872d56ab7aeefac20420625e94d26b960a2901a))
- **media:** integrate controls and idle manager into media controller ([616362c](https://github.com/vidstack/vidstack/commit/616362c49edcee23e62f254aebafc7b81868fefe))
- **media:** refactor media event observer and add decorator form ([ccb4345](https://github.com/vidstack/vidstack/commit/ccb43451fb198b140f7c909351890ac4a4c05b66))
- new `[@watch](https://github.com/vidstack/vidstack/vidstack/commit/d8759a3382a0ec7054a1779b36e33e56aedeb92e))
- new `ContextConsumerManager` ([2a7ba85](https://github.com/vidstack/vidstack/commit/2a7ba8551bc3f59bf23ed5ff3d0e8741560bc426))
- new `EventListenerController` ([72a4a86](https://github.com/vidstack/vidstack/commit/72a4a865f947e3ae7228c630aaedee764686c0e0))
- new `live` media context ([a9d5758](https://github.com/vidstack/vidstack/commit/a9d57589e5b18fe457c4434875989eaa4358dc80))
- new `MediaEventObserver` ([0cb3267](https://github.com/vidstack/vidstack/commit/0cb32674e9f5ee191942be77e898cb2ac21b63c5))
- new `mediaProviderConnectedQueue` on media controller ([e862e65](https://github.com/vidstack/vidstack/commit/e862e658928f926de4ea8ad5c4018daa77a3b753))
- new `ScrubberPreviewVideoElement` ([1fb5347](https://github.com/vidstack/vidstack/commit/1fb53479fe4fdc6b62ce40ccf2954090c81acfd7))
- new `shouldRequestUpdate` for context consumers ([7ce8fe9](https://github.com/vidstack/vidstack/commit/7ce8fe982e1d5b727cd40458e1623a10eef9a5a0))
- new `vds-aspect-ratio` element ([8462465](https://github.com/vidstack/vidstack/commit/84624651c9a6582eec70e3a481464d19513dcbfe))
- new `vds-looped` event ([4ffc1be](https://github.com/vidstack/vidstack/commit/4ffc1be7df885e1f8f5aeb9af5cd96d4d5b73e70))
- new audio provider ([c869fb8](https://github.com/vidstack/vidstack/commit/c869fb8266cf7ac79c089b5a2870f19b1d541bba))
- new context binding controllers for styling ([c3e24e5](https://github.com/vidstack/vidstack/commit/c3e24e518f941ad6cadae87b19eb249b4b496caf))
- new immutable snapshot of media state via `mediaState` property ([1961f3e](https://github.com/vidstack/vidstack/commit/1961f3e6622215fa0a89146ce0df511620c5e433))
- new player elements to simplify integration ([15edc57](https://github.com/vidstack/vidstack/commit/15edc57dddcdea505538ed5be1338076d0e83cac))
- normalize `vds-playing` event behaviour and attach trigger ([2d5e2c7](https://github.com/vidstack/vidstack/commit/2d5e2c7216627243987ec9cf71a0187acd8e70d7))
- reduce some logging noise when level set to `info` ([3100ca9](https://github.com/vidstack/vidstack/commit/3100ca9d35e3fb22b1ba264fa493518f7307601b))
- refactor media provider bridge ([4d5c12c](https://github.com/vidstack/vidstack/commit/4d5c12cbc6e367a90e190f7c1fbefadf3cf485c7))
- refactor scrubber ([3d4c8d7](https://github.com/vidstack/vidstack/commit/3d4c8d7de0c1d749d0936ef2a7794bc4d80c30ce))
- scrim component ([#366](https://github.com/vidstack/vidstack/issues/366)) ([434d9f1](https://github.com/vidstack/vidstack/commit/434d9f1f2866524fdf8cc20bdb6d38eccbe098c7))
- stage-1 of progressively enhanced hls support ([#377](https://github.com/vidstack/vidstack/issues/377)) ([75db01d](https://github.com/vidstack/vidstack/commit/75db01d19d1a30bff8a3bd19fac159f8368b7742))
- **ui/buffering-indicator:** new `media-ended` attribute for styling ([0f8a188](https://github.com/vidstack/vidstack/commit/0f8a1886fc6aa1d2f182fca340bb96b2a38db5d4))
- **ui/buffering-indicator:** refactor to use attributes ([172f052](https://github.com/vidstack/vidstack/commit/172f0528b23c090226460502e39d87494e16e820))
- **ui:** introduce `media-*` attributes for styling ([ad055f1](https://github.com/vidstack/vidstack/commit/ad055f130239f12dc69ae846f6d7450b5243bedb))
- **ui:** new `ScrubberPreviewTimeElement` ([9d17a6c](https://github.com/vidstack/vidstack/commit/9d17a6c545dd038b8df8dab8e9e806daa9cd65ac))
- **utils/promise:** add `timedPromise` function ([e7ef828](https://github.com/vidstack/vidstack/commit/e7ef8280f3c035f2df3844138184ea6bb89036e1))
- volume slider control ([#345](https://github.com/vidstack/vidstack/issues/345)) ([85c2584](https://github.com/vidstack/vidstack/commit/85c2584429e31c0987559e82719078b8ba608ad2))

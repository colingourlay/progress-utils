import acto from '@abcnews/alternating-case-to-object';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import { selectProgressPoints } from '../../dist/progress-utils.esm.js';
import External from './components/External/External.svelte';
import Inline from './components/Inline/Inline.svelte';

selectMounts('external').forEach(mountEl => {
  new External({
    target: mountEl,
    props: acto(getMountValue(mountEl))
  });
});

selectProgressPoints('inline').forEach(mountEl => {
  new Inline({
    target: mountEl,
    props: {}
  });
});

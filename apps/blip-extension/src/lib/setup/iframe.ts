import { IframeMessageProxy, heightChange } from 'blip-iframe';
import track from '../../lib/utils/track';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
IframeMessageProxy.listen();

// The iframe's parent minimum height is 100%. By setting it's height to 0px,
// the extension will take 100% of the remaining height.
void heightChange(0);
void track('opened');

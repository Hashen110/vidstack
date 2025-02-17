import { ifDefined } from 'lit/directives/if-defined.js';

import { isNumber } from '../utils/unit';

/**
 * A variant of `lit/directives/if-defined` which stops rendering if the given value is
 * not a number in addition to  `null`/`undefined`.
 *
 * For AttributeParts, sets the attribute if the value is defined and a number, and removes
 * the attribute if the value is undefined not a number.
 *
 * For other part types, this directive is a no-op.
 */
export function ifNumber(value: number | null | undefined) {
  return ifDefined(isNumber(value) ? value : undefined);
}

/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-etc
 */
/*tslint:disable:no-unused-expression*/

import { marbles } from "rxjs-marbles";
import { debounceTimeSubsequent } from "./debounceTimeSubsequent";

describe("let/debounceTimeSubsequent", () => {

    it("should debounce only subsequent notifications", marbles((m) => {

        const source =   m.cold("ab-cd---ef----|");
        const sourceSubs =      "^-------------!";
        const expected = m.cold("a------d----f-|");

        const period = m.time("---|");
        const destination = source.pipe(debounceTimeSubsequent(period, m.scheduler));
        m.expect(destination).toBeObservable(expected);
        m.expect(source).toHaveSubscriptions(sourceSubs);
    }));
});
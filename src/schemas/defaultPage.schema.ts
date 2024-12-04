import { ViewSchema } from '../abstracts';
import { ParsedContract } from '../interfaces';
import { AbstractPage } from '../abstracts';

export class DefaultPageSchema extends ViewSchema {
    public override parserPage(
        contract: ParsedContract,
        page: AbstractPage,
    ): string {
        return '';
    }
}

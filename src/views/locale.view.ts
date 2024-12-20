import { DataTable } from '../interfaces';
import { AbstractPage } from '../abstracts';
import { Page } from '../decorators';
import { DefaultPageSchema } from '../schemas';

@Page({
    schema: DefaultPageSchema,
    router: '/locale',
    output: 'public/views/locale.vue',
    form: 'public/views/localeForm.vue',
    title: '$i18n.locale',
    role: 'locale',
})
export class LocalePage extends AbstractPage {
    public override dataTable: DataTable = {
        fields: ['code', 'name', 'nameOriginal'],
        sortBy: 'name',
        sort: 'asc',
    };
}

import { 
    AbstractContract, Contract, 
    ContractField 
} from '@cmmv/core';

@Contract({
    controllerName: 'Locales',
    protoPath: 'src/protos/locales.proto',
    protoPackage: 'locales',
    auth: true,
    cache: {
        key: 'locales:',
        ttl: 10000,
        compress: true,
    },
})
export class LocalesContract extends AbstractContract {
    @ContractField({
        protoType: 'string',
        unique: true,
        index: true,
    })
    code: string;

    @ContractField({
        protoType: 'string',
    })
    code3: string;

    @ContractField({
        protoType: 'int32',
    })
    codeNum: number;

    @ContractField({
        protoType: 'string',
    })
    name: number;

    @ContractField({
        protoType: 'string',
    })
    nameOriginal: number;
}

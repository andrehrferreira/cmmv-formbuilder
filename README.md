<p align="center">
  <a href="https://cmmv.io/" target="blank"><img src="https://raw.githubusercontent.com/andrehrferreira/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" /></a>
</p>
<p align="center">Contract-Model-Model-View (CMMV) <br/> A minimalistic framework for building scalable and modular applications using TypeScript contracts.</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@cmmv/core"><img src="https://img.shields.io/npm/v/@cmmv/core.svg" alt="NPM Version" /></a>
    <a href="https://github.com/andrehrferreira/cmmv/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@cmmv/core.svg" alt="Package License" /></a>
    <a href="https://dl.circleci.com/status-badge/redirect/circleci/QyJWAYrZ9JTfN1eubSDo5u/7gdwcdqbMYfbYYX4hhoNhc/tree/main" target="_blank"><img src="https://dl.circleci.com/status-badge/img/circleci/QyJWAYrZ9JTfN1eubSDo5u/7gdwcdqbMYfbYYX4hhoNhc/tree/main.svg" alt="CircleCI" /></a>
</p>

<p align="center">
  <a href="https://cmmv.io">Documentation</a> &bull;
  <a href="https://github.com/andrehrferreira/cmmv-formbuilder/issues">Report Issue</a>
</p>

## Description

CMMV FormBuilder is a module designed for CMMV applications to streamline the creation and management of forms and pages. By leveraging TypeScript decorators, FormBuilder automates the generation of Vue components and forms, making development faster and more efficient.

## Features

- **Schema-Based Form Generation:** Define forms declaratively using TypeScript schemas.
- **Page Management:** Easily generate pages tied to contracts with navigation support.
- **Dark Mode Support:** Fully compatible with TailwindCSS dark mode.
- **Extensible:** Custom schemas and integrations are supported.
- **Vue Integration:** Outputs fully functional Vue components.

## Requirements 

To use the CMMV FormBuilder project, the following tools and frameworks are required:

1. [Vite](https://vite.dev/): A fast frontend build tool for development and production.
2. [Vue 3](https://vuejs.org/): The modern framework for building interactive user interfaces.
3. [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
4. [DataTables](https://datatables.net/): A powerful library for table manipulation and interactivity.

```bash
# Install runtime dependencies
$ pnpm add @vueform/plugin-mask datatables.net-dt datatables.net-select datatables.net-select-dt datatables.net-vue3 sass-embedded vue-i18n vue-router @vueform/vueform concurrently

# Install development dependencies
$ pnpm add -D tailwindcss terser vite vue@3 postcss postcss-nesting
```

``vite.config.ts``

Configure Vite for Vue, TailwindCSS, and Proxy settings:

```typescript 
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  envDir: './',

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@vueform/vueform/themes/vueform/scss/index.scss";`
      }
    },
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },

  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
  ],

  server: {
    host: true,
    port: 5000,
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'cmmv',
      fileName: (format) => `cmmv.${format}.js`,
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'public')
    }
  }
});
```

2. ``vueform.config.ts``

Configure Vueform for tailwind-based themes and locales:

```typescript
import en from '@vueform/vueform/locales/en';
import tailwind from '@vueform/vueform/dist/tailwind';
import { defineConfig } from '@vueform/vueform';

export default defineConfig({
  theme: tailwind,
  locales: { en },
  locale: 'en',
});
```

3. ``tailwind.config.ts``

Configure TailwindCSS with custom paths and Vueform integration:

```typescript
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.{vue,js,ts,jsx,tsx}",
    './vueform.config.js',
    './node_modules/.pnpm/@vueform+vueform@*/node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/.pnpm/@vueform+vueform@*/node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: defaultTheme.colors.gray,
      },
    },
  },
  plugins: [require('@vueform/vueform/tailwind')],
};
```

## Updated ``package.json``

To add the specified scripts to your ``package.json``, include the following configuration under the ``scripts`` section of the file. This setup includes development, testing, building, and release-related commands:

```json
"scripts": {
    "dev": "NODE_ENV=dev concurrently \"pnpm dev:server\" \"pnpm dev:client\"",
    "dev:server": "NODE_ENV=dev nodemon",
    "dev:client": "NODE_ENV=dev vite",
    "build": "vite build && tsc --emitDeclarationOnly && mv dist/src dist/types",
},
```

## Installation

Install the package via npm or pnpm:

```bash
pnpm add @cmmv/formbuilder
```

## Usage

To enable the FormBuilder transpiler, add it to your CMMV application's transpilers:

```typescript
import { FormBuilderTranspile } from "@cmmv/formbuilder";
import { Application } from "@cmmv/core";

Application.create({
  modules: [...],
  transpilers: [FormBuilderTranspile],
});
```

## Quick Start

1. Create a Contract

A contract is the backbone of the CMMV framework, defining fields, rules, and relationships. Below is an example of a ``LocalesContract``:

```typescript
import { 
    AbstractContract, Contract, 
    ContractField
} from '@cmmv/core';

import { 
    LocaleForm, LocalePage
} from "../views";

@Contract({
    controllerName: 'Locales',
    protoPath: 'src/protos/locales.proto',
    protoPackage: 'locales',
    viewForm: LocaleForm,
    viewPage: LocalePage
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
```

2. Create a Form

The form specifies the structure and behavior of the input fields. Below is an example ``LocaleForm``:

```typescript
import { 
    AbstractForm, Form, 
    VueformSchema 
} from "@cmmv/formbuilder";

@Form({
    schema: VueformSchema,
    output: "public/components/localeForm.vue",
    useRPC: true
})
export class LocaleForm extends AbstractForm {
    public components = {
        title: { 
            type: "static", 
            props: {
                content: "Locale",
                tag: "h1"
            } 
        },

        code: { 
            type: "input", 
            props: {
                "input-type": "text",
                mask: { mask: 'AA', overwrite: true },
                placeholder: "$i18n.code|Code",
                rules: ["required", "max:2", "min:2"]
            } 
        },

        code3: { 
            type: "input", 
            props: {
                "input-type": "text",
                mask: { mask: 'AAA', overwrite: true },
                placeholder: "$i18n.code3|Code A3C",
                rules: ["required", "max:3", "min:3"]
            } 
        },

        codeNum: { 
            type: "input", 
            props: {
                "input-type": "number",
                mask: { mask: '000', overwrite: true },
                placeholder: "$i18n.numeric|Numeric",
                rules: ["required"]
            } 
        },

        name: { 
            type: "input", 
            props: {
                "input-type": "text",
                placeholder: "$i18n.name|Name"
            } 
        },

        nameOriginal: { 
            type: "input", 
            props: {
                "input-type": "text",
                placeholder: "$i18n.nameOriginal|Original Name"
            } 
        },

        submit: { 
            type: "button", 
            props: {
                "button-label": "Submit",
                "button-type": "submit",
                submits: true,
                full: false
            } 
        }
    }
}
```

3. Create a Page

The page connects the form to the application’s router and defines the table structure for displaying data. Below is an example ``LocalePage``:

```typescript
import { DataTable } from "../interfaces";
import { AbstractPage } from "../abstracts";
import { Page } from "../decorators";
import { DefaultPageSchema } from "../schemas";

@Page({
    schema: DefaultPageSchema,
    router: "/locale",
    output: "public/components/locale.vue",
    form: "public/components/localeForm.vue",
    title: "$i18n.locale",
    role: "locale",
})
export class LocalePage extends AbstractPage {
    public override dataTable: DataTable = {
        fields: ["code", "name", "nameOriginal"],
        sortBy: "name",
        sort: "asc"
    };
}
```

### Generated Output

After running the transpiler, the following ``.vue`` file is generated for the form:

```vue
<!-- Generated automatically by CMMV -->

<template>
    <Vueform ref="form$">
        <StaticElement  name="title" content="Locale" tag="h1" ></StaticElement >
        <TextElement name="code" input-type="text" :mask="{'mask':'AA','overwrite':true}" :placeholder="$t('code', 'Code')" :rules="['required','max:2','min:2']" ></TextElement>
        <TextElement name="code3" input-type="text" :mask="{'mask':'AAA','overwrite':true}" :placeholder="$t('code3', 'Code A3C')" :rules="['required','max:3','min:3']" ></TextElement>
        <TextElement name="codeNum" input-type="number" :mask="{'mask':'000','overwrite':true}" :placeholder="$t('numeric', 'Numeric')" :rules="['required']" ></TextElement>
        <TextElement name="name" input-type="text" :placeholder="$t('name', 'Name')" ></TextElement>
        <TextElement name="nameOriginal" input-type="text" :placeholder="$t('nameOriginal', 'Original Name')" ></TextElement>
        <ButtonElement name="submit" button-label="Submit" button-type="submit" :submits="true" :full="false" ></ButtonElement>
    </Vueform>
</template>

<script setup>
import { ref } from 'vue';
const form$ = ref(null);
...
</script>
```

## Documentation

The complete documentation is available [here](https://cmmv.io).

Additionally, for further insights and advanced configurations:

* **Vueform Documentation**: Explore the [Vueform documentation](https://vueform.com/docs) to understand the available options for each form component, their properties, and usage examples. This is essential for maximizing the capabilities of your forms.

* **TailwindCSS Documentation**: Refer to the [TailwindCSS documentation](https://tailwindcss.com/docs) for styling customizations, extending themes, and creating responsive designs tailored to your application’s needs.

## Support

CMMV is an open-source project, and we are always looking for contributors to help improve it. If you encounter a bug or have a feature request, please open an issue on [GitHub](https://github.com/andrehrferreira/cmmv/issues).

## Stay in Touch

- Author - [André Ferreira](https://github.com/andrehrferreira)
- Twitter - [@andrehrferreira](https://twitter.com/andrehrferreira)
- Linkdin - [@andrehrf](https://www.linkedin.com/in/andrehrf)
- Youtube - [@Andrehrferreira](https://www.youtube.com/@Andrehrferreira)

## License

CMMV is [MIT licensed](LICENSE).

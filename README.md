## configure element

> element 

```bash
    yarn add element-plus
```

> element auto import

```bash
    yarn add -D unplugin-vue-components unplugin-auto-import
```

```typescript
    // vite.config.ts
import {resolve} from 'path'
import {AliasOptions, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


const pathResolve = (dir: string): string => {
    return resolve(__dirname, dir)
}

const alias: AliasOptions = {
    '@': pathResolve('src')
}

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias,
    },
    plugins: [
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
})
```

> icons

```bash
    yarn add -D @iconify/json
```

> icons auto import

```bash
    yarn add -D unplugin-icons
```

```typescript
    // vite.config.ts
import {resolve} from 'path'
import {AliasOptions, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const pathResolve = (dir: string): string => {
    return resolve(__dirname, dir)
}

const alias: AliasOptions = {
    '@': pathResolve('src')
}

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias,
    },
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'pinia'
            ],
            resolvers: [
                // auto import element functions
                ElementPlusResolver(),
            ],
            dts: false,
        }),
        Components({
            resolvers: [
                // auto register element components
                ElementPlusResolver(),
                // auto register icons components
                IconsResolver({
                    prefix: false,
                }),
            ],
            dts: false,
        }),
        // auto import @iconify/json
        Icons({
            autoInstall: true,
        }),
    ]
})
```

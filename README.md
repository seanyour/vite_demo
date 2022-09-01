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


## config router

```bash
    yarn add vue-router
```

> 在ts中使用nodejs

```bash
    yarn add @types/node -D
```
> vue中配置alias

```typescript
// vite.config.ts
import {AliasOptions, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const pathResolve = (dir:string):string => {
    return resolve(__dirname, dir)
}

const alias:AliasOptions = {
    '@': pathResolve('src')
}

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias,
    },
    plugins: [vue()]
})
```

> ts配置alias

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "paths": {
      "@": ["./src"],
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```



## config axios

```bash
    yarn add axios
```

```typescript
// server/index.ts
import axios, {AxiosInstance} from "axios";

const request: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5173',
    timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        // ...
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        // ...
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default request
```
# 03 webpack配置

使用webpack配置自动打包编译。

```html
目录结构
src----index.html
	|--js
		|--index.ts
<!--
1.初始化一个自动打包的webpack项目[配置文件见下]
2.通过tsc --init初始化TypeScript配置文件
3.通过npm install typescript ts-loader安装对应loader
4.修改webpack配置文件【不用修改，修改好的】
entry: "./src/js/index.ts",
resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
},
rules: [
    // ts编译配置
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
]
-->
```



```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require("webpack");

module.exports = {
    /*
    devServer: 自动检测文件变化
    * */
    devServer: {
        contentBase: "./bundle",
        open: true,
        port: 9090,
        hot: true, // 开启热更新, 只要开启了热更新就不会自动刷新网页了
        hotOnly: true // 哪怕不支持热更新也不要刷新网页
    },
    /*
    配置sourcemap
    * */
    devtool: "cheap-module-eval-source-map",
    /*
    mode: 指定打包的模式
    * */
    mode: "development", // "production" | "development"
    /*
    entry: 指定需要打包的文件
    * */
    // entry: "./src/js/index.js",
    entry: "./src/js/index.ts",
    /*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */
    output: {
        /*
        filename: 指定打包之后的JS文件的名称
        * */
        filename: "js/bundle.js",
        /*
        path: 指定打包之后的文件存储到什么地方
        * */
        path: path.resolve(__dirname, "bundle")
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    /*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */
    module: {
        rules: [
            // ts编译配置
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    /*
    plugins: 告诉webpack需要新增一些什么样的功能
    * */
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: './src/lib',
            to: './lib'
        }])
    ]
};
```

```json
// package.json
{
  "name": "01-webpack-introductory",
  "version": "1.0.0",
  "description": "",
  "main": "src/js/index.js",
  "scripts": {
    "dev": "npx webpack-dev-server --config webpack.config.js",
    "build": "npx webpack --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "copy-webpack-plugin": "^5.1.1",
    "html-webpack-plugin": "^3.2.0"
  },
  "dependencies": {
    "@types/jquery": "^3.5.0",
    "jquery": "^3.5.1",
    "reflect-metadata": "^0.1.13",
    "ts-loader": "^4.5.0",
    "typescript": "^3.9.5",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
}
```

```json
// tsconfig.json 可以自动生成，也可以复制。
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "system",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
     "outFile": "./js/bundle.js",                       /* Concatenate and emit output to single file. */
     "outDir": "./bundle",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
//    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
//     "strictNullChecks": true,              /* Enable strict null checks. */
//     "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    "./src/**/*.ts",
    "./src/**/*.d.ts"
  ]
}

```


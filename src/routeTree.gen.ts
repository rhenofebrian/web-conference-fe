/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as AppImport } from './routes/_app'

// Create Virtual Routes

const AppIndexLazyImport = createFileRoute('/_app/')()
const AuthLoginLazyImport = createFileRoute('/_auth/login')()
const AppVirtualAccountsLazyImport = createFileRoute('/_app/virtual-accounts')()
const AppSignatureLazyImport = createFileRoute('/_app/signature')()
const AppSettingAccountLazyImport = createFileRoute('/_app/setting-account')()
const AppManageAccountLazyImport = createFileRoute('/_app/manage-account')()
const AppBankTransferLazyImport = createFileRoute('/_app/bank-transfer')()
const AppIcodsaReceiptLazyImport = createFileRoute('/_app/icodsa/receipt')()
const AppIcodsaLoaLazyImport = createFileRoute('/_app/icodsa/loa')()
const AppIcodsaInvoiceLazyImport = createFileRoute('/_app/icodsa/invoice')()
const AppIcicytaReceiptLazyImport = createFileRoute('/_app/icicyta/receipt')()
const AppIcicytaLoaLazyImport = createFileRoute('/_app/icicyta/loa')()
const AppIcicytaInvoiceLazyImport = createFileRoute('/_app/icicyta/invoice')()

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexLazyRoute = AppIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRoute,
} as any).lazy(() => import('./routes/_app/index.lazy').then((d) => d.Route))

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/login.lazy').then((d) => d.Route))

const AppVirtualAccountsLazyRoute = AppVirtualAccountsLazyImport.update({
  id: '/virtual-accounts',
  path: '/virtual-accounts',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/virtual-accounts.lazy').then((d) => d.Route),
)

const AppSignatureLazyRoute = AppSignatureLazyImport.update({
  id: '/signature',
  path: '/signature',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/signature.lazy').then((d) => d.Route),
)

const AppSettingAccountLazyRoute = AppSettingAccountLazyImport.update({
  id: '/setting-account',
  path: '/setting-account',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/setting-account.lazy').then((d) => d.Route),
)

const AppManageAccountLazyRoute = AppManageAccountLazyImport.update({
  id: '/manage-account',
  path: '/manage-account',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/manage-account.lazy').then((d) => d.Route),
)

const AppBankTransferLazyRoute = AppBankTransferLazyImport.update({
  id: '/bank-transfer',
  path: '/bank-transfer',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/bank-transfer.lazy').then((d) => d.Route),
)

const AppIcodsaReceiptLazyRoute = AppIcodsaReceiptLazyImport.update({
  id: '/icodsa/receipt',
  path: '/icodsa/receipt',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/icodsa/receipt.lazy').then((d) => d.Route),
)

const AppIcodsaLoaLazyRoute = AppIcodsaLoaLazyImport.update({
  id: '/icodsa/loa',
  path: '/icodsa/loa',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/icodsa/loa.lazy').then((d) => d.Route),
)

const AppIcodsaInvoiceLazyRoute = AppIcodsaInvoiceLazyImport.update({
  id: '/icodsa/invoice',
  path: '/icodsa/invoice',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/icodsa/invoice.lazy').then((d) => d.Route),
)

const AppIcicytaReceiptLazyRoute = AppIcicytaReceiptLazyImport.update({
  id: '/icicyta/receipt',
  path: '/icicyta/receipt',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/icicyta/receipt.lazy').then((d) => d.Route),
)

const AppIcicytaLoaLazyRoute = AppIcicytaLoaLazyImport.update({
  id: '/icicyta/loa',
  path: '/icicyta/loa',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/icicyta/loa.lazy').then((d) => d.Route),
)

const AppIcicytaInvoiceLazyRoute = AppIcicytaInvoiceLazyImport.update({
  id: '/icicyta/invoice',
  path: '/icicyta/invoice',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/icicyta/invoice.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_app/bank-transfer': {
      id: '/_app/bank-transfer'
      path: '/bank-transfer'
      fullPath: '/bank-transfer'
      preLoaderRoute: typeof AppBankTransferLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/manage-account': {
      id: '/_app/manage-account'
      path: '/manage-account'
      fullPath: '/manage-account'
      preLoaderRoute: typeof AppManageAccountLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/setting-account': {
      id: '/_app/setting-account'
      path: '/setting-account'
      fullPath: '/setting-account'
      preLoaderRoute: typeof AppSettingAccountLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/signature': {
      id: '/_app/signature'
      path: '/signature'
      fullPath: '/signature'
      preLoaderRoute: typeof AppSignatureLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/virtual-accounts': {
      id: '/_app/virtual-accounts'
      path: '/virtual-accounts'
      fullPath: '/virtual-accounts'
      preLoaderRoute: typeof AppVirtualAccountsLazyImport
      parentRoute: typeof AppImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof AuthImport
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/icicyta/invoice': {
      id: '/_app/icicyta/invoice'
      path: '/icicyta/invoice'
      fullPath: '/icicyta/invoice'
      preLoaderRoute: typeof AppIcicytaInvoiceLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/icicyta/loa': {
      id: '/_app/icicyta/loa'
      path: '/icicyta/loa'
      fullPath: '/icicyta/loa'
      preLoaderRoute: typeof AppIcicytaLoaLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/icicyta/receipt': {
      id: '/_app/icicyta/receipt'
      path: '/icicyta/receipt'
      fullPath: '/icicyta/receipt'
      preLoaderRoute: typeof AppIcicytaReceiptLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/icodsa/invoice': {
      id: '/_app/icodsa/invoice'
      path: '/icodsa/invoice'
      fullPath: '/icodsa/invoice'
      preLoaderRoute: typeof AppIcodsaInvoiceLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/icodsa/loa': {
      id: '/_app/icodsa/loa'
      path: '/icodsa/loa'
      fullPath: '/icodsa/loa'
      preLoaderRoute: typeof AppIcodsaLoaLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/icodsa/receipt': {
      id: '/_app/icodsa/receipt'
      path: '/icodsa/receipt'
      fullPath: '/icodsa/receipt'
      preLoaderRoute: typeof AppIcodsaReceiptLazyImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppBankTransferLazyRoute: typeof AppBankTransferLazyRoute
  AppManageAccountLazyRoute: typeof AppManageAccountLazyRoute
  AppSettingAccountLazyRoute: typeof AppSettingAccountLazyRoute
  AppSignatureLazyRoute: typeof AppSignatureLazyRoute
  AppVirtualAccountsLazyRoute: typeof AppVirtualAccountsLazyRoute
  AppIndexLazyRoute: typeof AppIndexLazyRoute
  AppIcicytaInvoiceLazyRoute: typeof AppIcicytaInvoiceLazyRoute
  AppIcicytaLoaLazyRoute: typeof AppIcicytaLoaLazyRoute
  AppIcicytaReceiptLazyRoute: typeof AppIcicytaReceiptLazyRoute
  AppIcodsaInvoiceLazyRoute: typeof AppIcodsaInvoiceLazyRoute
  AppIcodsaLoaLazyRoute: typeof AppIcodsaLoaLazyRoute
  AppIcodsaReceiptLazyRoute: typeof AppIcodsaReceiptLazyRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppBankTransferLazyRoute: AppBankTransferLazyRoute,
  AppManageAccountLazyRoute: AppManageAccountLazyRoute,
  AppSettingAccountLazyRoute: AppSettingAccountLazyRoute,
  AppSignatureLazyRoute: AppSignatureLazyRoute,
  AppVirtualAccountsLazyRoute: AppVirtualAccountsLazyRoute,
  AppIndexLazyRoute: AppIndexLazyRoute,
  AppIcicytaInvoiceLazyRoute: AppIcicytaInvoiceLazyRoute,
  AppIcicytaLoaLazyRoute: AppIcicytaLoaLazyRoute,
  AppIcicytaReceiptLazyRoute: AppIcicytaReceiptLazyRoute,
  AppIcodsaInvoiceLazyRoute: AppIcodsaInvoiceLazyRoute,
  AppIcodsaLoaLazyRoute: AppIcodsaLoaLazyRoute,
  AppIcodsaReceiptLazyRoute: AppIcodsaReceiptLazyRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface AuthRouteChildren {
  AuthLoginLazyRoute: typeof AuthLoginLazyRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginLazyRoute: AuthLoginLazyRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthRouteWithChildren
  '/bank-transfer': typeof AppBankTransferLazyRoute
  '/manage-account': typeof AppManageAccountLazyRoute
  '/setting-account': typeof AppSettingAccountLazyRoute
  '/signature': typeof AppSignatureLazyRoute
  '/virtual-accounts': typeof AppVirtualAccountsLazyRoute
  '/login': typeof AuthLoginLazyRoute
  '/': typeof AppIndexLazyRoute
  '/icicyta/invoice': typeof AppIcicytaInvoiceLazyRoute
  '/icicyta/loa': typeof AppIcicytaLoaLazyRoute
  '/icicyta/receipt': typeof AppIcicytaReceiptLazyRoute
  '/icodsa/invoice': typeof AppIcodsaInvoiceLazyRoute
  '/icodsa/loa': typeof AppIcodsaLoaLazyRoute
  '/icodsa/receipt': typeof AppIcodsaReceiptLazyRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/bank-transfer': typeof AppBankTransferLazyRoute
  '/manage-account': typeof AppManageAccountLazyRoute
  '/setting-account': typeof AppSettingAccountLazyRoute
  '/signature': typeof AppSignatureLazyRoute
  '/virtual-accounts': typeof AppVirtualAccountsLazyRoute
  '/login': typeof AuthLoginLazyRoute
  '/': typeof AppIndexLazyRoute
  '/icicyta/invoice': typeof AppIcicytaInvoiceLazyRoute
  '/icicyta/loa': typeof AppIcicytaLoaLazyRoute
  '/icicyta/receipt': typeof AppIcicytaReceiptLazyRoute
  '/icodsa/invoice': typeof AppIcodsaInvoiceLazyRoute
  '/icodsa/loa': typeof AppIcodsaLoaLazyRoute
  '/icodsa/receipt': typeof AppIcodsaReceiptLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/_app/bank-transfer': typeof AppBankTransferLazyRoute
  '/_app/manage-account': typeof AppManageAccountLazyRoute
  '/_app/setting-account': typeof AppSettingAccountLazyRoute
  '/_app/signature': typeof AppSignatureLazyRoute
  '/_app/virtual-accounts': typeof AppVirtualAccountsLazyRoute
  '/_auth/login': typeof AuthLoginLazyRoute
  '/_app/': typeof AppIndexLazyRoute
  '/_app/icicyta/invoice': typeof AppIcicytaInvoiceLazyRoute
  '/_app/icicyta/loa': typeof AppIcicytaLoaLazyRoute
  '/_app/icicyta/receipt': typeof AppIcicytaReceiptLazyRoute
  '/_app/icodsa/invoice': typeof AppIcodsaInvoiceLazyRoute
  '/_app/icodsa/loa': typeof AppIcodsaLoaLazyRoute
  '/_app/icodsa/receipt': typeof AppIcodsaReceiptLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/bank-transfer'
    | '/manage-account'
    | '/setting-account'
    | '/signature'
    | '/virtual-accounts'
    | '/login'
    | '/'
    | '/icicyta/invoice'
    | '/icicyta/loa'
    | '/icicyta/receipt'
    | '/icodsa/invoice'
    | '/icodsa/loa'
    | '/icodsa/receipt'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/bank-transfer'
    | '/manage-account'
    | '/setting-account'
    | '/signature'
    | '/virtual-accounts'
    | '/login'
    | '/'
    | '/icicyta/invoice'
    | '/icicyta/loa'
    | '/icicyta/receipt'
    | '/icodsa/invoice'
    | '/icodsa/loa'
    | '/icodsa/receipt'
  id:
    | '__root__'
    | '/_app'
    | '/_auth'
    | '/_app/bank-transfer'
    | '/_app/manage-account'
    | '/_app/setting-account'
    | '/_app/signature'
    | '/_app/virtual-accounts'
    | '/_auth/login'
    | '/_app/'
    | '/_app/icicyta/invoice'
    | '/_app/icicyta/loa'
    | '/_app/icicyta/receipt'
    | '/_app/icodsa/invoice'
    | '/_app/icodsa/loa'
    | '/_app/icodsa/receipt'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/_auth"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/bank-transfer",
        "/_app/manage-account",
        "/_app/setting-account",
        "/_app/signature",
        "/_app/virtual-accounts",
        "/_app/",
        "/_app/icicyta/invoice",
        "/_app/icicyta/loa",
        "/_app/icicyta/receipt",
        "/_app/icodsa/invoice",
        "/_app/icodsa/loa",
        "/_app/icodsa/receipt"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login"
      ]
    },
    "/_app/bank-transfer": {
      "filePath": "_app/bank-transfer.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/manage-account": {
      "filePath": "_app/manage-account.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/setting-account": {
      "filePath": "_app/setting-account.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/signature": {
      "filePath": "_app/signature.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/virtual-accounts": {
      "filePath": "_app/virtual-accounts.lazy.tsx",
      "parent": "/_app"
    },
    "/_auth/login": {
      "filePath": "_auth/login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_app/": {
      "filePath": "_app/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/icicyta/invoice": {
      "filePath": "_app/icicyta/invoice.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/icicyta/loa": {
      "filePath": "_app/icicyta/loa.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/icicyta/receipt": {
      "filePath": "_app/icicyta/receipt.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/icodsa/invoice": {
      "filePath": "_app/icodsa/invoice.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/icodsa/loa": {
      "filePath": "_app/icodsa/loa.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/icodsa/receipt": {
      "filePath": "_app/icodsa/receipt.lazy.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */

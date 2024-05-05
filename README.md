# React, mantine, supabase template

Opinionated and ready to go tempalte, for when you need to bootstrap an app in a minute.

This example offers an opinionated starter preset for making web apps using a simple sensible technology stack.

## Technology

Preset uses the `yarn create vite` template using vite with `typescript + SWC`.

Big part of this template is the [Mantine](https://mantine.dev/) component library. I know there are many options, but after trying a lot of them, I found that Mantine suits me the most.

I use [Nanostores](https://github.com/nanostores/nanostores) for global state (think, better Redux). It gives me everything I need 99% of the time. It has a nice syntax and nice React integration.

## Autotyping with upabase

Create fully type safe endpoints by running `yarn typegen`.

### setup

`npx supabase login` to login to your project
`npx supabase link` link your supabase project

### usage

`yarn typegen`

## Prettier

Is installed as a dev dependency and `.vscode` recommends installing it as an editor plugin.  
Format on save is enabled for a reason. Dont write ugly code.  

## Supabase credentials are stored in .env

App will error if no supabase keys are present. Obtain them at `https://supabase.com/dashboard/{YOUR_PROJECT}/settings/general`
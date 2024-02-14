# React + TypeScript + Vite + Supabase + Mantine 7.0.0

This example offers an opinionated starter preset for making web apps using a stack of my favourite technologies.

I believe that using this preset one can spin up a simple application in a very short time.

## Technology

Preset uses the `yarn create vite` template using vite with `typescript + SWC`.

Big part of this template is the [Mantine](https://mantine.dev/) component library. I know there are many options, but after trying a lot of them, i found that Mantine suits me the most.

I use [Nanostores](https://github.com/nanostores/nanostores) for global state (think, better Redux). It gives me everything i need 99% of the time. It has a nice syntax and nice React integration.

## Autotyping with upabase

### setup

`npx supabase login` to login to your project
`npx supabase link` link your supabase project

### usage

`yarn typegens`

## Prettier

Is installed as a dev dependency and `.vscode` recommends installing it as an editor plugin.  
Format on save is enabled for a reason. Dont write ugly code.  

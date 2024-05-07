
<div align="center" id="top">
    <img src="public/logo.png"/>
</div>

![home-image](public/home-image.jpg)

Our team is carrying the 14th theme of the SDGS, where the theme is Life Below Water, where currently environmental issues are still one of the main focuses in the world, especially issues regarding the cleanliness of the sea and beaches for the survival of marine ecosystems and humans themselves. From this background, we want to help preserve the environment, especially in marine areas and beaches, then we named our project "OCEANESIA".
Oceanesia is a website based on maps or commonly referred to as "WEB GIS (Geographic Information System)".

## :dart: Project Overview

Oceanesia itself aims to help with the monitoring system, control cleanliness and can also report on the condition of the sea and beaches in an area. This is important because Indonesia is a maritime country where most of Indonesia's territory is sea and there are still many seas and beaches in Indonesia that are in poor condition. The presence of Oceanesia itself can make it easier for related agencies to map which areas should be the main focus in maintaining ocean cleanliness.

> **⚠️ IMPORTANT:**
> Key information users need to understand.

## :rocket: Main Technologies

<a href="https://react.dev/"> ![Static Badge](https://img.shields.io/badge/React-61DBFB?style=flat&logo=react&labelColor=black)</a> <a href="https://www.python.org/"> ![Static Badge](https://img.shields.io/badge/Python-ffde57?style=flat&logo=python&logoColor=4584b6&labelColor=black)</a> <a href="https://www.typescriptlang.org/">![Static Badge](https://img.shields.io/badge/TypeScript-%233178c6?style=flat&logo=typescript&logoColor=%233178c6&labelColor=black)</a> <a href="https://nextjs.org"> ![Static Badge](https://img.shields.io/badge/Nextjs-black?style=flat&logo=Next.js&logoColor=black&labelColor=white)</a> <a href="https://leafletjs.com/"> ![Static Badge](https://img.shields.io/badge/Leaflet-green?style=flat&logo=Leaflet&labelColor=black)</a> <a href="https://v2.chakra-ui.com/"> ![Static Badge](https://img.shields.io/badge/Chakraui-%2312d4af?style=flat&logo=Chakraui&logoColor=%2312d4af&labelColor=black)</a> <a href="https://code.visualstudio.com/"> ![Static Badge](https://img.shields.io/badge/VSCode-blue?style=flat&logo=Visual%20Studio%20Code&logoColor=blue&labelColor=black)</a> <a href="https://flask.palletsprojects.com/"> ![Static Badge](https://img.shields.io/badge/Flask-white?style=flat&logo=Flask&labelColor=black)</a> <a href="https://github.com/"> ![Static Badge](https://img.shields.io/badge/GitHub-white?style=flat&logo=GitHub&labelColor=black)</a> <a href="https://swr.vercel.app/"> ![Static Badge](https://img.shields.io/badge/SWR-white?style=flat&logo=SWR&labelColor=black)</a> <a href="https://shields.io/"> ![Static Badge](https://img.shields.io/badge/Shields.io-green?style=flat&logo=Shields.io&labelColor=black)</a> <a href=""> ![Static Badge](https://img.shields.io/badge/JavaScript-%23f0db4f?style=flat&logo=JavaScript&labelColor=black)</a> <a href="https://python-poetry.org/"> ![Static Badge](https://img.shields.io/badge/Poetry-blue?style=flat&logo=Poetry&labelColor=black)</a> <a href="https://supabase.com/"> ![Static Badge](https://img.shields.io/badge/Supabase-black?style=flat&logo=Supabase&labelColor=black)</a>

<a href=""> )</a>
<a href=""> </a>

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/IryIndriyanto/oceanesia-fe

# Access
$ cd oceanesia-fe

# Install dependencies
$ npm install @chakra-ui/icons @chakra-ui/next-js @chakra-ui/react @chakra-ui/toast @emotion/react @emotion/styled @types/leaflet framer-motion leaflet leaflet-defaulticon-compatibility next react react-dom react-icons react-leaflet swr


# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## :file_folder: Folder Structure

```txt
OCEANESIA-FE
   |-- public  # folder for image
   |-- src
   |   |-- app
   |   |   |-- auth
   |   |   |   |-- sign-in
   |   |   |   |   |-- page.tsx
   |   |   |   |-- sign-up
   |   |   |   |   |-- page.tsx
   |   |   |   |-- layout.tsx
   |   |   |-- main
   |   |   |   |-- bookmarks
   |   |   |   |   |-- page.tsx
   |   |   |   |-- map
   |   |   |   |   |-- page.tsx
   |   |   |   |-- report
   |   |   |   |   |-- page.tsx
   |   |   |   |-- layout.tsx
   |   |   |-- favicon.ico
   |   |   |-- layout.tsx
   |   |   |-- page.tsx
   |   |   |-- Wrappers.tsx
   |   |-- components
   |   |   |-- icons
   |   |   |   |-- IconBox.tsx
   |   |   |-- maps
   |   |   |   |-- map-drawer
   |   |   |   |   |-- MapDrawer.tsx
   |   |   |   |-- index.ts
   |   |   |   |-- Map.tsx
   |   |   |-- menu
   |   |   |   |-- ItemContent.tsx
   |   |   |-- navbar
   |   |   |   |-- searchBar
   |   |   |   |   |-- SearchBar.tsx
   |   |   |   |-- NavbarLinksMain.tsx
   |   |   |   |-- NavbarMain.tsx
   |   |   |-- reports
   |   |   |   |-- report.tsx
   |   |   |-- separator
   |   |   |   |-- Separator.tsx
   |   |   |-- sidebar
   |   |   |   |-- components
   |   |   |   |   |-- Brand.tsx
   |   |   |   |   |-- Content.tsx
   |   |   |   |   |-- Links.tsx
   |   |   |   |-- Sidebar.tsx
   |   |-- contexts
   |   |   |-- SidebarContext.ts
   |   |-- hooks
   |   |   |-- useIssue.ts
   |   |   |-- useLocation.ts
   |   |-- theme
   |   |   |-- components
   |   |   |   |-- button.tsx
   |   |   |   |-- drawer.tsx
   |   |   |   |-- input.tsx
   |   |   |-- foundations
   |   |   |   |-- breakpoints.ts
   |   |   |-- styles.ts
   |   |   |-- theme.tsx
   |   |-- types
   |   |   |-- location.d.ts
   |   |   |-- navigation.d.ts
   |   |-- utils
   |   |   |-- dummy.data.ts
   |   |   |-- fetcher.ts
   |   |   |-- navigation.ts
   |   |-- routes.tsx
   |-- .eslintrc.json
   |-- .gitignore
   |-- next-env.d.ts
   |-- next.config.mjs
   |-- package-lock.json
   |-- package.json
   |-- README.md
   |-- README.old.md
   |-- tsconfig.json
```

## :pen: Writer

| **Name**                    | **Role**               | **Email**                 | **GitHub**                                         |
| --------------------------- | ---------------------- | ------------------------- | -------------------------------------------------- |
| 1. `Iry Indriyanto`         | `Backend and Frontend` | `IryIndriyanto@gmail.com` | [Iry Indriyanto](https://github.com/IryIndriyanto) |
| 2. `Putri Noviani`          | `Frontend`             | `PutriNoviani@gmail.com`  | [Iry Indriyanto](https://github.com/IryIndriyanto) |
| 3. `Catur Ageng Pinaringan` | `Backend`              | `caturageng023@gmail.com` | [Catur Ageng](https://github.com/CaturAgeng)       |

<a href="#top">Back to top</a>


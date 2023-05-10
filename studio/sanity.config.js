import SanityConfig from '../sanity.config'
export default SanityConfig

{
  /*
   * Die Sanity.config.js ist auf Top-Level der NextJs App
   * Damit auch im Sub-Folder Stiduo über npx sanity start das Studio gehosted werden kann, muss die Config auf Top-Level des Sub-Folders exestieren.
   * Die .env- Variablen werden aus NextJS Top-Level importiert.
   
├── My Application
│   ├── pages
│   └── app
│   │── sanity.config.js
│   ├── src
│   └── studio
│       ├── schema
│       └── sanity.config.js

   */
}

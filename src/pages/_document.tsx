import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      
      <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/74d99ce9-fd19-4c81-a073-a9490f4aa12a/webchat/config.js" defer></script>
    </Html>
  )
}
import Document, { Html, Head, Main, NextScript } from 'next/document'

class BonsaiDocument extends Document {
  
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Passero+One&display=swap" 
            crossOrigin="anonymous" 
            rel="stylesheet" />
        </Head>
        <body className="bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BonsaiDocument

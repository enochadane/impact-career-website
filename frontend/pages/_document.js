import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
          crossOrigin='anonymous'
        />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>

        <link rel='icon' type='image/x-icon' href='/images/favIcon.svg' />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
        />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>
      <title>Impact Careers</title>

      <body>
        <Main />
        <NextScript />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
          crossOrigin='anonymous'
        />
        <script
          src='https://code.jquery.com/jquery-3.6.1.js'
          integrity='sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI='
          crossOrigin='anonymous'
        ></script>{" "}
      </body>
    </Html>
  );
}

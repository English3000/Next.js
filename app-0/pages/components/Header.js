import Link from 'next/link'; //client-side nav; can't style it

const linkStyle = {
  marginRight: 15
};

export default () => (
    <header>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </header>
);

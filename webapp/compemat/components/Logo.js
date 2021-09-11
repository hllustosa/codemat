import Link from "next/link";

export default function LogoImg() {
  return (
    <Link href="/">
      <a><img alt={"cm-logo"} src={"/img/logo-cm-branco.svg"} width={70} /> </a>
    </Link>
  );
}

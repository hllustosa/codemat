import Link from "next/link";

export default function LogoImg() {
  return (
    <Link href="/">
      <img alt={"cm-logo"} src={"/img/logo-cm-branco.svg"} width={70} />
    </Link>
  );
}

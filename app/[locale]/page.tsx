import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <Link href="/" locale="ja">
        {t("japanese")}
      </Link>
      <br />
      <Link href="/" locale="zh">
        {t("chinese")}
      </Link>
      <br />
      <p>{t("title")}</p>
    </div>
  );
}

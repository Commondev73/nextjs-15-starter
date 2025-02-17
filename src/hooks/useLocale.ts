"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale as i18nDefaultLocale } from "@/i18n/config";

export function useLocale(defaultLocale: string = i18nDefaultLocale) {
  const [locale, setLocale] = useState(defaultLocale);
  const router = useRouter();

  useEffect(() => {
    const storedLocale = Cookies.get("NEXT_LOCALE");

    if (storedLocale) setLocale(storedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 30 });
    setLocale(newLocale);

    router.refresh();
  };

  return { locale, changeLocale };
}

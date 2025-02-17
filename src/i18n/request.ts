import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { locales, defaultLocale } from "./config";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const getLocaleCookie = cookieStore.get("NEXT_LOCALE")?.value;

  const locale =
    getLocaleCookie && locales.includes(getLocaleCookie)
      ? getLocaleCookie
      : defaultLocale;

  try {
    // โหลดไฟล์ messages ตาม locale และ name ที่ระบุ
    const messages = (await import(`@/locales/${locale}.json`)).default;

    return { locale, messages };
  } catch (error) {
    console.error(`❌ Error loading locale file: ${locale}.json`, error);

    return { locale, messages: {} }; // ถ้าไฟล์ไม่เจอ ให้คืนค่า messages เป็น {} เพื่อป้องกัน error
  }
});

"use client";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { useLocale } from "@/hooks/useLocale";
import { locales } from "@/i18n/config";
import { ColorModeButton } from "../ui/color-mode";

const LanguageSwitcher = () => {
  const { locale, changeLocale } = useLocale();

  return (
    <MenuRoot>
      <ColorModeButton></ColorModeButton>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {locale.toLocaleUpperCase()}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {locales.map((locale) => (
          <MenuItem
            key={locale}
            value={locale}
            onClick={() => changeLocale(locale)}
          >
            {locale.toLocaleUpperCase()}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default LanguageSwitcher;

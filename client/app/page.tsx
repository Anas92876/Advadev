import { headers } from 'next/headers';
import { DEFAULT_LANG, isValidLang } from '@/lib/locale';
import TechHeroSection from '@/components/hero/TechHeroSection';
import HomeSections from '@/components/home/HomeSections';

export default async function HomePage() {
  const headersList = await headers();
  const rawLang = headersList.get('x-lang');
  const lang = isValidLang(rawLang) ? rawLang : DEFAULT_LANG;

  return (
    <>
      <TechHeroSection lang={lang} />
      <HomeSections lang={lang} />
    </>
  );
}

import { useTranslations } from 'next-intl';
import NavBar from '../components/NavBar';

export default function Index() {
  const t = useTranslations('index');
  return (
    <div>
      <NavBar />
      <main>
        <h1>{t('appName')}</h1>
      </main>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
    },
  };
}

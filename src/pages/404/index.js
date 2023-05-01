import Hero from '@/components/common/Hero';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Page404() {
  return (
    <>
      <Layout navbarHide={true} footerHide={true}>
        <Hero>
          <div className="w-auto">
            <div className="text-center">
              <Image
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                alt="404"
                src={'/img/hdd.png'}
                width={'480'}
                height={'480'}
                quality={'75'}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAlgAAAA8CAQAAAAQlQwyAAAAq0lEQVR42u3UMQ0AAADCMPBvGh0krYQdawBOVALAsAAMCzAsAMMCMCzAsAAMC8CwAMMCMCwAwwIMC8CwAAwLMCwAwwIwLMCwAAwLwLAAwwIwLADDAgwLwLAADAswLADDAgwLwLAADAswLADDAjAswLAADAvAsADDAjAsAMMCDAvAsAAMCzAsAMMCMCzAsAAMC8CwAMMCMCwAwwIMC8CwAAwLMCwAwwIMC+DDAKTAAD391KlaAAAAAElFTkSuQmCC"
              />

              <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Uh-oh!
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                We can't find that page.
              </p>
              <div className="py-6">
                <Link
                  role="button"
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  href="/">
                  Go Back!
                </Link>
              </div>
            </div>
          </div>
        </Hero>
      </Layout>
    </>
  );
}

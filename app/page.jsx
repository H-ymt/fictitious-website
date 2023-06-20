import Link from "next/link";
import styles from "./page.module.scss";
import { PrimaryButton } from "./component/button/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.headContainer}>
        <div className={styles.headText}>
          <h1 className={styles.title}>
            ここにはタイトルが、<br></br>はいります
          </h1>
          <p className={styles.textSmall}>This space is an area for text</p>
          <Link href="/about" className={styles.aboutButton}>
            <PrimaryButton text="About page" />
          </Link>
        </div>

        <div className={styles.topImage}>
          <Image src="/In_love_6sq2.png" width={933} height={694} />
        </div>
      </div>

      <section class={styles.section}>
        <h2 className={styles.sectionTitle}>
          Products<span>subtitle</span>
        </h2>

        <div className={styles.productContainer}>
          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/Weather_app_re_kcb1.png" width={981} height={768} loading="lazy" />
            </div>

            <div className={styles.productBody}>
              <div className={styles.productNumber}>products&ensp;01</div>

              <h3 className={styles.productName}>
                <span>app for xxxx</span>App Name
              </h3>

              <p className="productText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem expedita,
                quas soluta quis debitis officiis consequatur qui eum laboriosam, ea minima quidem,
                quaerat libero atque. Ratione repellat voluptates quibusdam?
              </p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/shopping_app_flsj.png" width={981} height={768} loading="lazy" />
            </div>

            <div className={styles.productBody}>
              <div className={styles.productNumber}>products&ensp;02</div>

              <h3 className={styles.productName}>
                <span>app for xxxx</span>App Name
              </h3>

              <p className="productText">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae nostrum
                odio, deserunt expedita pariatur? Assumenda eos est nihil cupiditate, similique
                earum reprehenderit labore minima commodi, repellendus perferendis perspiciatis
                animi.
              </p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/product_explainer_8jbm.png" width={981} height={768} loading="lazy" />
            </div>

            <div className={styles.productBody}>
              <div className={styles.productNumber}>products&ensp;03</div>

              <h3 className={styles.productName}>
                <span>app for xxxx</span>App Name
              </h3>

              <p className="productText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti
                labore ex ut porro tenetur quod suscipit veritatis mollitia delectus quos, fugit
                distinctio accusantium facilis!
              </p>

              <Link class={styles.moreButton} href="/about">
                <span>詳しくはこちら</span>
                <PrimaryButton text="→" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class={styles.section}>
        <h2 className={styles.sectionTitle}>
          Service<span>subtitle</span>
        </h2>
        <p class={styles.sectionCatch}>Lorem ipsum dolor sit amet.</p>

        <div class={styles.serviceContainer}>
          <div className={styles.service}>
            <div className={styles.serviceLogo}>
              <Image src="/carbon_container-services.svg" width={40} height={40} loading="lazy" />
            </div>

            <div className={styles.serviceBody}>
              <h3 className={styles.serviceName}>Service Name</h3>
              <p className={styles.serviceDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium eaque
                pariatur, voluptate autem amet ex dignissimos? Porro explicabo animi perferendis,
                repudiandae ipsa corrupti modi! Ratione vel voluptas fugit! Quaerat!
              </p>
              <Link class={styles.moreButton} href="/about">
                <span>詳しくはこちら</span>
                <PrimaryButton text="→" />
              </Link>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceLogo}>
              <Image
                src="/eos-icons_service-plan-outlined.svg"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>

            <div className={styles.serviceBody}>
              <h3 className={styles.serviceName}>Service Name</h3>
              <p className={styles.serviceDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium eaque
                pariatur, voluptate autem amet ex dignissimos? Porro explicabo animi perferendis,
                repudiandae ipsa corrupti modi! Ratione vel voluptas fugit! Quaerat!
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceLogo}>
              <Image src="/ep_service.svg" width={40} height={40} loading="lazy" />
            </div>

            <div className={styles.serviceBody}>
              <h3 className={styles.serviceName}>Service Name</h3>
              <p className={styles.serviceDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium eaque
                pariatur, voluptate autem amet ex dignissimos? Porro explicabo animi perferendis,
                repudiandae ipsa corrupti modi! Ratione vel voluptas fugit! Quaerat!
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceLogo}>
              <Image
                src="/medical-icon_i-social-services.svg"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>

            <div className={styles.serviceBody}>
              <h3 className={styles.serviceName}>Service Name</h3>
              <p className={styles.serviceDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium eaque
                pariatur, voluptate autem amet ex dignissimos? Porro explicabo animi perferendis,
                repudiandae ipsa corrupti modi! Ratione vel voluptas fugit! Quaerat!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class={styles.section}>
        <h2 className={styles.sectionTitle}>
          Works<span>subtitle</span>
        </h2>
      </section>

      <section class={styles.section}>
        <h2 className={styles.sectionTitle}>
          News<span>subtitle</span>
        </h2>
      </section>
    </>
  );
}

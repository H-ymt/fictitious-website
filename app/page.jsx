import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "../component/Button/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.headContainer}>
        <div className={styles.headText}>
          <h1 className={styles.title}>This is the space for the title</h1>
          <p className={styles.textSmall}>This space is an area for text</p>
          <Link href="/about" className={styles.aboutButton}>
            <PrimaryButton text="About page" />
          </Link>
        </div>

        <div className={styles.topImage}>
          <Image src="/In_love_6sq2.png" width={933} height={694} alt="" />
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Products<span>subtitle</span>
        </h2>

        <div className={styles.productContainer}>
          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image
                src="/Weather_app_re_kcb1.png"
                width={981}
                height={768}
                loading="lazy"
                alt=""
              />
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
              <Image src="/shopping_app_flsj.png" width={981} height={768} loading="lazy" alt="" />
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
              <Image
                src="/product_explainer_8jbm.png"
                width={981}
                height={768}
                loading="lazy"
                alt=""
              />
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

              <Link className={styles.moreButton} href="/about">
                <span>詳しくはこちら</span>
                <PrimaryButton text="→" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Service<span>subtitle</span>
        </h2>
        <p className={styles.sectionCatch}>Lorem ipsum dolor sit amet.</p>

        <div className={styles.serviceContainer}>
          <div className={styles.service}>
            <div className={styles.serviceLogo}>
              <Image
                src="/carbon_container-services.svg"
                width={40}
                height={40}
                loading="lazy"
                alt=""
              />
            </div>

            <div className={styles.serviceBody}>
              <h3 className={styles.serviceName}>Service Name</h3>
              <p className={styles.serviceDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium eaque
                pariatur, voluptate autem amet ex dignissimos? Porro explicabo animi perferendis,
                repudiandae ipsa corrupti modi! Ratione vel voluptas fugit! Quaerat!
              </p>
              <Link className={styles.moreButton} href="/about">
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
              <Image src="/ep_service.svg" width={40} height={40} loading="lazy" alt="" />
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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Works<span>subtitle</span>
        </h2>

        <p className={styles.sectionCatch}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <div className={styles.works}>
          <div className={styles.worksContainer}>
            <Image src="/in_thought_re_qyxl.png" width={891} height={859} loading="lazy" alt="" />
            <p className={styles.workNumber}>Case01</p>
            <h3 className={styles.worksName}>Lorem&ensp;ipsum&ensp;dolor&ensp;sit&ensp;amet.</h3>
            <p className={styles.worksText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat inventore sunt
              officiis dignissimos natus nesciunt aut in?
            </p>
          </div>

          <div className={styles.worksContainer}>
            <Image
              src="/Work_in_progress_re_byic.png"
              width={891}
              height={859}
              loading="lazy"
              alt=""
            />
            <p className={styles.workNumber}>Case02</p>
            <h3 className={styles.worksName}>
              Lorem&ensp;ipsum&ensp;dolor&ensp;sit&ensp;amet&ensp;consectetur&ensp;adipisicing&ensp;elit.
            </h3>
            <p className={styles.worksText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur quam dolore
              eum impedit a odio doloremque, quos, fugit earum, aliquam quaerat.
            </p>
          </div>

          <div className={styles.worksContainer}>
            <Image
              src="/Working_remotely_re_6b3a.png"
              width={891}
              height={859}
              loading="lazy"
              alt=""
            />
            <p className={styles.workNumber}>Case03</p>
            <h3 className={styles.worksName}>Lorem&ensp;ipsum&ensp;dolor&ensp;sit&ensp;amet.</h3>
            <p className={styles.worksText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis, harum
              molestiae officia optio quo delectus!
            </p>
          </div>

          <div className={styles.worksContainer}>
            <Image src="/Working_out_re_nhkg.png" width={891} height={859} loading="lazy" alt="" />
            <p className={styles.workNumber}>Case04</p>
            <h3 className={styles.worksName}>
              Lorem&ensp;ipsum&ensp;dolor&ensp;sit&ensp;amet&ensp;consectetur&ensp;adipisicing&ensp;elit.
            </h3>
            <p className={styles.worksText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur quam dolore
              eum impedit a odio doloremque, quos, fugit earum, aliquam quaerat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

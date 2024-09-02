import Image from "next/image";
import Link from "next/link";
import styles from "./styles/page.module.css";
import Button from "./components/Button";
import Logo from "./components/Logo";
import { Bubble } from "./components/Bubble";
import ImageContainer from "./components/ImageContainer";
import HeroImageLeft from "../../public/desktop/image-hero-left.png";
import HeroImageRight from "../../public/desktop/image-hero-right.png";
import HeroImageTablet from "../../public/tablet/image-hero.png";

type ImageProps = {
  id: number;
  image: string;
  imageAlt: string;
  backgroundColor?: string;
  width: number;
  height: number;
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.nav}>
          <Logo />
        </div>
        <section className={styles.hero}>
          <div className={styles.heroTabletContainer}>
            <Image
              className={styles.heroTablet}
              src={HeroImageTablet}
              alt="photos of users as hero image"
              priority
            />
          </div>
          <Image
            className={styles.desktopLeft}
            src={HeroImageLeft}
            alt="photos of users as hero image"
            priority
          />
          <Image
            className={styles.desktopRight}
            src={HeroImageRight}
            alt="photos of users as hero image"
            priority
          />
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              Group Chat
              <br />
              for Everyone
            </h1>
            <p className={styles.heroText}>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className={styles.buttonStack}>
              <Button
                content="Download"
                contentSpan="v1.3"
                // onClick={() => alert("button clicked!")}
                variant="primary"
              />
              <Button
                content="What is it?"
                // onClick={() => alert("button clicked!")}
                variant="secondary"
              />
            </div>
          </div>
        </section>

        <section className={styles.mid}>
          <Bubble content="01" />
          <div className={styles.collage}>
            <ImageContainer
              key={10}
              id={10}
              image="/desktop/image-woman-in-videocall.jpg"
              imageAlt="image of woman on video call"
              width={510}
              height={484}
            />
            <ImageContainer
              key={20}
              id={20}
              image="/desktop/image-women-videochatting.jpg"
              imageAlt="image of women on a video chat"
              width={510}
              height={484}
            />
            <ImageContainer
              key={30}
              id={30}
              image="/desktop/image-man-texting.jpg"
              imageAlt="image of a man texting"
              width={510}
              height={484}
            />
            <ImageContainer
              key={40}
              id={40}
              image="/desktop/image-men-in-meeting.jpg"
              imageAlt="image of men in a meeting"
              width={510}
              height={484}
            />
          </div>
          <div className={styles.midTextContainer}>
            <p className={styles.midSpecial}>Built for modern use</p>
            <p className={styles.midTitle}>
              Smarter meetings, all in one place
            </p>
            <p className={styles.midText}>
              Send messages, share files, show your screen, and record your
              meetings — all in one workspace. Control who can join with
              invite-only team access, data encryption, and data export.
            </p>
          </div>
        </section>
        <Bubble content="02" />
        <section className={styles.end}>
          <div className={styles.bgWrap}>
            <Image
              className={styles.backgroundImage}
              src="/tablet/image-footer.jpg"
              alt="abstract teal background image"
              quality={100}
              // width={768}
              // height={428}
              fill
              style={{ objectFit: "cover" }}
            />

            <div className={styles.endContent}>
              <div className={styles.endTextContainer}>
                <p className={`${styles.endTitle} ${styles.left}`}>
                  Experience more together
                </p>
                <p className={`${styles.endText} ${styles.center}`}>
                  Stay connected with reliable HD meetings and unlimited
                  one-on-one and group video sessions.
                </p>
                <div className={`${styles.buttonStack} ${styles.right}`}>
                  <Button
                    content="Download"
                    contentSpan="v1.3"
                    // onClick={() => alert("button clicked!")}
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.attributionWrapper}>
            <div className={styles.attribution}>
              Challenge by{" "}
              <Link
                className="text-blue"
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </Link>
              . Coded by{" "}
              <Link
                className="text-blue"
                href="https://github.com/chelsea-here"
              >
                Chelsea Anne Livingston Cruz
              </Link>
              .
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

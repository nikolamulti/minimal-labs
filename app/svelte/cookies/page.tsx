import { Nav, Footer } from "@/components/marketing/sections";
import { Section } from "@/components/marketing/ui/Section";

export default function CookiesPage() {
  return (
    <div className="bg-base">
      <Nav />
      <main>
        <Section className="py-20">
          <div>
            <article className="lg:prose-md prose mx-auto max-w-[44rem] prose-p:fg-muted prose-li:fg-muted">
              <h1>Cookies</h1>
              <p>
                This Cookie Policy applies to the Websites managed by Aleksandar
                Radovanović pr Minimal Square (referred to as "us," "we," or
                "Minimal Square"), including but not limited to, the Website
                accessible at{" "}
                <a
                  href="https://minimal-labs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  minimal-labs.com
                </a>
                . Your use of the Website signifies your agreement to the
                gathering and utilization of your personal information as
                detailed in this Cookie Policy.
              </p>
              <p>
                Minimal Square and our analytics or service providers use
                cookies and other technologies to ensure everyone who uses the
                Website has the best possible experience. This Cookie Policy
                (“Policy”) details how and when Minimal Square (we) use Cookies.
                For the purpose of this Policy, Website refers to{" "}
                <a
                  href="https://minimal-labs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  minimal-labs.com
                </a>{" "}
                as well as all other websites that Minimal Square operates.
              </p>

              <h3>What is a Cookie?</h3>
              <p>
                A cookie is a tiny text file that a web page server stores on
                your hard drive. It holds information that can be accessed later
                by a web server within the same domain. Certain cookies are only
                activated when you utilize specific features or set particular
                preferences, while others are consistently active.
              </p>
              <p>
                To learn more about Cookies please visit{" "}
                <a
                  href="https://www.aboutcookies.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aboutcookies.org
                </a>
                .
              </p>
              <h3>Why does Minimal Labs use Cookies?</h3>
              <p>
                We use Cookies on our website for various purposes, including
                enhancing user experience, analyzing usage patterns, and
                gathering navigational and statistical data to better understand
                and improve our platform.
              </p>
              <ul>
                <li>
                  <span className="font-bold fg-base">Analytics Cookies:</span>{" "}
                  These Cookies monitor website visits to facilitate
                  enhancements and performance reporting. For instance, they
                  help us analyze visitor and user interactions to deliver more
                  tailored content. Additionally, we may utilize Cookies to
                  assess the effectiveness of new advertisements, pages, or
                  functionalities.
                </li>
                <li>
                  <span className="font-bold fg-base">Security:</span> We
                  utilize these Cookies to detect and mitigate security threats.
                  For instance, they may be used to retain your session data,
                  preventing unauthorized password changes without both your
                  username and password.
                </li>
                <li>
                  <span className="font-bold fg-base">
                    Targeting or advertising Cookies:
                  </span>{" "}
                  These Cookies are used to serve advertisements, ensuring they
                  are important and valuable to consumers, while also monitoring
                  the effectiveness of our advertising endeavors. Furthermore,
                  Cookies are utilized to exhibit ads for our offerings on other
                  websites you visit, a practice commonly referred to as
                  remarketing.
                </li>
                <li>
                  <span className="font-bold fg-base">Navigation Cookies:</span>{" "}
                  These Cookies enable us to understand how you interact with
                  our website and to improve your overall experience.
                </li>
              </ul>
              <h3>How to Disable Cookies</h3>
              <p>
                You can generally activate, or later deactivate the use of
                Cookies through functionality built into your web browser. To
                learn more about how to control Cookie settings through your
                browser:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/en-au/guide/safari/ibrw1069/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                  </a>
                </li>
              </ul>
              <p>
                If you would like to learn more about Cookies, or how to
                control, disable or remove them, please visit{" "}
                <a
                  href="https://www.aboutcookies.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aboutcookies.org
                </a>
                . Certain third party advertising networks, including Google,
                permit users to opt out of or customize preferences associated
                with your internet browsing. To learn more about this feature
                from Google, click{" "}
                <a
                  href="https://myadcenter.google.com/u/0/home?hl=en&sasb=true&ref=ad-settings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <h3>Cookies Subject to Change</h3>
              <p>
                The content of this Policy is for your general information and
                use only. This policy is subject to change without notice. You
                acknowledge that this information may contain inaccuracies or
                errors and is subject to change and we expressly exclude
                liability for any such inaccuracies or errors to the fullest
                extent permitted by law.
              </p>
              <h3>Cookies Used in Our Services</h3>
              <p>
                In addition to the Cookies on our Website as described above, we
                may also use Cookies and other tracking technologies in
                connection with your access and use of our products and
                services.
              </p>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

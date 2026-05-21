import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — Even Steven',
};

const LAST_UPDATED = 'May 21, 2026';

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <h1>Terms of Service</h1>
        <p className={styles.meta}>Last updated: {LAST_UPDATED}</p>

        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of Even Steven
          (the &quot;Service&quot;), operated by Even Steven (&quot;we&quot;, &quot;us&quot;). By
          using the Service you agree to these Terms.
        </p>

        <h2>1. The Service</h2>
        <p>
          Even Steven is a mobile application that helps groups of people track shared
          expenses and calculate the minimum settlements needed to balance accounts. The
          Service is provided for personal, non-commercial use.
        </p>

        <h2>2. Accounts</h2>
        <p>
          You must sign in with a Google account to use Even Steven. You are responsible
          for all activity that occurs under your account. You must not share your account
          credentials or use another person&apos;s account without permission.
        </p>

        <h2>3. User Content</h2>
        <p>
          You retain ownership of the expense data and other content you add to the
          Service. By adding content, you grant us a limited licence to store and display
          that content to other authorised members of your groups.
        </p>
        <p>
          You are responsible for the accuracy of expenses and settlements you record.
          Even Steven does not verify financial information and is not a financial
          services provider.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You must not:</p>
        <ul>
          <li>Use the Service for any unlawful purpose</li>
          <li>Attempt to access another user&apos;s data without authorisation</li>
          <li>Introduce malicious code or attempt to disrupt the Service</li>
          <li>Resell or commercialise access to the Service</li>
          <li>Impersonate another person</li>
        </ul>

        <h2>5. Group Invites and Email</h2>
        <p>
          When you add a person by email, an automated invite email is sent on your behalf.
          You represent that you have a legitimate reason to contact the recipient and that
          they would reasonably expect to receive this communication.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind. We do
          not guarantee that the Service will be uninterrupted, error-free, or free of
          security vulnerabilities. Even Steven is not responsible for disputes between
          group members regarding expenses or settlements.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Even Steven shall not be liable for any
          indirect, incidental, special, or consequential damages arising from your use
          of the Service, including financial loss resulting from inaccurate expense
          records.
        </p>

        <h2>8. Termination</h2>
        <p>
          You may stop using the Service and delete your account at any time. We may
          suspend or terminate your access if you violate these Terms, with or without
          notice.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We may update these Terms. Continued use of the Service after changes are
          posted constitutes acceptance of the updated Terms. We will notify you of
          material changes via in-app notification.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Denmark. Any disputes shall be resolved
          in the courts of Denmark.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms? Contact us at{' '}
          <a href="mailto:legal@evensteven.app">legal@evensteven.app</a>.
        </p>
      </article>
    </main>
  );
}

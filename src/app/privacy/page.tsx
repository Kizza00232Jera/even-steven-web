import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Even Steven',
};

const LAST_UPDATED = 'May 21, 2026';

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <h1>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: {LAST_UPDATED}</p>

        <p>
          Even Steven (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and share information
          when you use the Even Steven mobile application and related services.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>Account information</h3>
        <p>
          When you sign in with Google, we receive your name, email address, and profile
          photo. You may choose a display name that differs from your Google name.
        </p>

        <h3>Expense and group data</h3>
        <p>
          We store the expenses, balances, and group information you create. This includes
          amounts, descriptions, categories, participant lists, and settlement records.
        </p>

        <h3>Usage data</h3>
        <p>
          We collect standard server logs (IP addresses, timestamps, feature interactions)
          to operate and improve the service.
        </p>

        <h3>Push notification tokens</h3>
        <p>
          If you enable notifications, we store your device push token to deliver alerts
          about group activity.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and operate the Even Steven service</li>
          <li>To calculate and display shared expense balances</li>
          <li>To send transactional notifications (expense added, settlement recorded, invite received)</li>
          <li>To send invite emails on your behalf when you add group members by email</li>
          <li>To improve the app based on aggregate usage patterns</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell your personal data. We share data only with:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — our database and authentication provider (EU region)
          </li>
          <li>
            <strong>Google</strong> — for authentication via Google Sign-In
          </li>
          <li>
            <strong>Expo / Expo Push Notifications</strong> — for delivering push alerts
          </li>
          <li>
            <strong>Resend</strong> — for sending invite emails on your behalf
          </li>
          <li>
            <strong>Other group members</strong> — expenses and balances you add are
            visible to participants in your group
          </li>
        </ul>

        <h2>4. Expense Visibility</h2>
        <p>
          Expenses are visible only to participants of that expense. Non-participants in
          the same group cannot see expenses they were not included in.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          Your data is retained for as long as your account exists. You may delete your
          account at any time from the Account settings screen. Account deletion permanently
          removes your profile, anonymises your contributions to shared expenses, and
          cannot be undone.
        </p>

        <h2>6. Your Rights (GDPR)</h2>
        <p>
          If you are located in the European Economic Area, you have the right to access,
          correct, or delete your personal data, and to object to or restrict its
          processing. To exercise these rights, contact us at the address below. You also
          have the right to lodge a complaint with your local data protection authority.
        </p>

        <h2>7. Data Security</h2>
        <p>
          All data is transmitted over HTTPS and stored in encrypted databases hosted in
          the EU (Stockholm, Sweden). Row-level security policies ensure users can only
          access data they are authorised to see.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Even Steven is not directed at children under 13. We do not knowingly collect
          personal data from children under 13.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of
          material changes via a push notification or in-app banner.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about this policy? Reach us at{' '}
          <a href="mailto:privacy@evensteven.app">privacy@evensteven.app</a>.
        </p>
      </article>
    </main>
  );
}
